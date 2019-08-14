import Team, { ObjectId } from "../../api/team/model";
import { success, fail, notFound } from "../../services/responses";
import esClient from "../../services/elasticsearch";

// Find searched Teams
export async function search(req, res) {
  const { q } = req.query || {};

  if (!q) return fail(res, 422, `Why incorrect query string ${q}?`);
  // let results;
  const search = function search(index, body) {
    return esClient.search({ index: index, body: body });
  };
  let body = {
    from: 0,
    size: 3,
    query: {
      multi_match: {
        query: q,
        fields: [
          "name",
          "venue_name",
          "venue_city",
          "venue_address",
          "country"
        ],
        fuzziness: "AUTO"
      }
    },
    _source: [
      "name",
      "venue_name",
      "venue_city",
      "venue_address",
      "venue_surface",
      "country",
      "founded"
    ]
  };
  search("teams", body)
    .then(async results => {
      if (!results) {
        return fail(res, 500, "No search result found");
      }
      const result = results.hits.hits.map(source => {
        return source._source;
      });
      success(res, 200, result, "retrieving record(s) was successfully!");
    })
    .catch(err =>
      fail(res, 500, `Error retrieving record(s).\r\n${err.message}`)
    );
}

// Create a team
export function create(req, res) {
  if (req.session.key) {
    const data = req.body || {};
    const { userId, userType } = res.locals;
    if (!userId || !userType) {
      return fail(res, 400, "Invalid authentication credentials");
    }
    if (userType !== "admin") {
      return fail(
        res,
        422,
        `Only admin are allowed to add products not ${userType}`
      );
    }
    // Validate request
    if (!data.name) {
      return fail(
        res,
        422,
        "Team name can not be empty and must be alphanumeric."
      );
    }

    if (!data.venue_name) {
      return fail(
        res,
        422,
        "Team stadium name can not be empty and must be alphanumeric."
      );
    }
    if (!data.venue_surface) {
      return fail(
        res,
        422,
        "Team head coach can not be empty and must be alphanumeric."
      );
    }
    if (!data.venue_address) {
      return fail(
        res,
        422,
        "Team's nick name can not be empty and must be alphanumeric."
      );
    }

    const newObject = {};

    if (data.name) newObject.name = data.name;
    if (data.venue_name) newObject.venue_name = data.venue_name;
    if (data.venue_surface) newObject.venue_surface = data.venue_surface;
    if (data.venue_address) newObject.venue_address = data.venue_address;
    if (data.venue_city) newObject.venue_city = data.venue_city;
    if (data.venue_capacity) newObject.venue_capacity = data.venue_capacity;
    if (data.code) newObject.code = data.code;
    if (data.founded) newObject.founded = data.founded;
    if (data.country) newObject.country = data.country;

    const record = new Team(newObject);

    return record
      .save()
      .then(result => {
        if (!result) {
          return fail(res, 404, "Error: not found newly created team");
        }
        return success(
          res,
          200,
          result,
          "New team record has been created successfully"
        );
      })
      .catch(err => {
        return fail(res, 500, "An error occured while trying to create a team");
      });
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}

// / Retrieve and return all records from the database.
export function findAll(req, res) {
  if (req.session.key) {
    return Team.find()
      .limit(20)
      .sort({ createdAt: -1 })
      .select({
        // eslint-disable-next-line object-property-newline
        name: true,
        code: true,
        founded: true,
        country: true,
        venue_capacity: true,
        venue_address: true,
        venue_city: true,
        venue_name: true,
        venue_surface: true
      })
      .then(result =>
        success(res, 200, result, "retrieving record(s) was successfully!")
      )
      .catch(err =>
        fail(res, 500, `Error retrieving record(s).\r\n${err.message}`)
      );
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}

// Retrieve a single record with a given teamId
export function findOne(req, res) {
  if (req.session.key) {
    let recordId = req.params.teamId || "";
    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (!ObjectId.isValid(recordId))
      return fail(res, 422, "Invalid record Id as request parameter");
    return Team.findById(recordId)
      .then(result => {
        if (!result) return notFound(res, "Error record not found.");
        return success(res, 200, result, "retrieving record was successfully!");
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          notFound(res, `Error retrieving record.\r\n${err.message}`);
        }
        return fail(res, 500, `Error retrieving record.\r\n${err.message}`);
      });
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}
// Update a team identified by the adminId in the request
export async function update(req, res) {
  if (req.sesssion.key) {
    const teamId = req.params.teamId || "";
    const data = req.body || {};
    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (userType !== "admin")
      return fail(
        res,
        422,
        `Only Admins are allowed to update this record not ${userType}`
      );
    if (!data.name)
      return fail(res, 422, "You must provide an alphanumeric email address");

    const newObject = {};
    newObject.updatedBy = userId;
    newObject.updated = Date.now();
    if (data.name) newObject.name = data.name;
    if (data.venue_name) newObject.venue_name = data.venue_name;
    if (data.venue_surface) newObject.venue_surface = data.venue_surface;
    if (data.venue_address) newObject.venue_address = data.venue_address;
    if (data.venue_city) newObject.venue_city = data.venue_city;
    if (data.venue_capacity) newObject.venue_capacity = data.venue_capacity;
    if (data.code) newObject.code = data.code;
    if (data.founded) newObject.founded = data.founded;
    if (data.country) newObject.country = data.country;

    return Team.findByIdAndUpdate(teamId, newObject, { new: true })
      .then(result => {
        if (!result)
          return notFound(
            res,
            `Error: newly submitted record not found with id ${userId}`
          );
        return success(
          res,
          200,
          result,
          "Record has been created successfully!"
        );
      })
      .catch(err =>
        fail(
          res,
          500,
          `Error updating record with id ${userId}.\r\n${err.message}`
        )
      );
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}

// Delete a team with the specified teamId in the request
export async function destroy(req, res) {
  if (req.session.key) {
    const recordId = req.params.teamId || "";
    const { userType, userId } = res.locals;
    if (!userId || !userType) {
      return fail(res, 400, "Invalid authentication credentials");
    }
    if (!recordId) return fail(res, 400, "No record Id as request parameter");
    if (userType !== "admin")
      return fail(
        res,
        422,
        `Only Admins are allowed to update this record not ${userType}`
      );
    if (!recordId)
      return fail(res, 422, "Invalid record Id as request parameter");
    return Team.findByIdAndRemove(recordId)
      .then(record => {
        if (!record)
          return notFound(res, `Record not found with id ${recordId}`);
        return success(res, 200, [], "Record deleted successfully!");
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return notFound(
            res,
            `Error: record not found with id ${recordId}\r\n${err.message}`
          );
        }
        return fail(
          res,
          500,
          `Error: could not delete record with id ${recordId}\r\n${err.message}`
        );
      });
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}
