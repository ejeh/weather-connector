import Fixtures, { ObjectId } from "../../api/fixtures/model";
import { success, fail, notFound } from "../../services/responses";
import esClient from "../../services/elasticsearch";

// Find searched Products
export async function search(req, res) {
  const { q } = req.query || {};

  if (!q) return fail(res, 422, `Why incorrect query string ${q}?`);
  // let results;
  const search = function search(index, body) {
    return esClient.search({ index: index, body: body });
  };
  let body = {
    query: {
      multi_match: {
        query: q,
        fields: ["status", "venue", "awayTeam.team_name", "homeTeam.name"],
        fuzziness: "AUTO"
      }
    },
    _source: [
      "event_date",
      "firstHalfStart",
      "statusShort",
      "venue",
      "homeTeam",
      "awayTeam",
      "goalsHomeTeam",
      "goalsAwayTeam",
      "score",
      "status"
    ]
  };
  search("fixtures", body)
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

export function create(req, res) {
  if (req.session.key) {
    const data = req.body || {};
    const { userId, userType } = res.locals;
    if (userType !== "admin") {
      return fail(
        res,
        422,
        `Only admin are allowed to add products not ${userType}`
      );
    }
    // Validate request
    if (!data.event_date) {
      return fail(
        res,
        422,
        "Fixtures date can not be empty and must be alphanumeric."
      );
    }

    if (!data.venue) {
      return fail(
        res,
        422,
        "Feature venue can not be empty and must be alphanumeric."
      );
    }
    if (!data.homeTeam.team_name) {
      return fail(
        res,
        422,
        "Fixtures home team can not be empty and must be alphanumeric."
      );
    }
    if (!data.awayTeam.team_name) {
      return fail(
        res,
        422,
        "Fixtures away_team name can not be empty and must be alphanumeric."
      );
    }

    const newObject = {};
    if (data.event_date) newObject.event_date = data.event_date;
    if (data.venue) newObject.venue = data.venue;

    newObject.homeTeam = {};
    if (data.homeTeam.team_name)
      newObject.homeTeam.team_name = data.homeTeam.team_name;
    if (data.awayTeam.team_name) newObject.awayTeam = {};
    newObject.awayTeam.team_name = data.awayTeam.team_name;
    if (data.firstHalfStart) newObject.firstHalfStart = data.firstHalfStart;
    if (data.refree) newObject.refree = data.refree;
    if (data.goalsHomeTeam) newObject.goalsHomeTeam = data.goalsHomeTeam;
    if (data.goalsAwayTeam) newObject.goalsAwayTeam = data.goalsAwayTeam;
    if (data.round) newObject.round = data.round;
    if (data.statusShort) newObject.statusShort = data.statusShort;

    newObject.score = {};
    if (data.score.extratime) newObject.score.extratime = data.score.extratime;
    if (data.score.penalty) newObject.score.penalty = data.score.penalty;
    if (data.score.halftime) newObject.score.halftime = data.score.halftime;
    if (data.score.fulltime) newObject.score.fulltime = data.score.fulltime;

    const record = new Fixtures(newObject);

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
          "New fixture has been created successfully"
        );
      })
      .catch(err => {
        return fail(
          res,
          500,
          `An error occured while trying to create a team: ${err.message}`
        );
      });
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}

// / Retrieve and return all records from the database.
export function findAll(req, res) {
  if (req.session.key) {
    return Fixtures.find()
      .limit(50)
      .sort({ createdAt: -1 })
      .select({
        // eslint-disable-next-line object-property-newline
        venue: true,
        homeTeam: true,
        awayTeam: true,
        refree: true,
        event_date: true,
        status: true,
        firstHalfStart: true
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
// Retrieve all completed fixtures
export function completed(req, res) {
  if (req.session.key) {
    const filter = {
      status: "Match Finished"
    };
    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (userType !== "user")
      return fail(
        res,
        422,
        `Only Users are allowed to update this record not ${userType}`
      );
    return Fixtures.find(filter)
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

// Retrieve all pending fixtures
export function pending(req, res) {
  if (req.session.key) {
    const filter = {
      status: "pending"
    };
    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (userType !== "user")
      return fail(
        res,
        422,
        `Only Users are allowed to update this record not ${userType}`
      );
    return Fixtures.find(filter)
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

// Retrieve a single record with a given teamId
export function findOne(req, res) {
  if (req.session.key) {
    let recordId = req.params.fixtureId || "";
    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (userType !== "admin")
      return fail(
        res,
        422,
        `Only Admins are allowed to update this record not ${userType}`
      );
    if (!ObjectId.isValid(recordId))
      return fail(res, 422, "Invalid record Id as request parameter");
    return Fixtures.findById(recordId)
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

// Update a admin identified by the adminId in the request
export async function update(req, res) {
  if (req.session.key) {
    const fixtureId = req.params.fixtureId || "";
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

    // Validate request

    const newObject = {};
    newObject.updatedBy = userId;
    newObject.updated = Date.now();
    if (data.event_date) newObject.event_date = data.event_date;
    if (data.venue) newObject.venue = data.venue;

    newObject.homeTeam = {};
    if (data.homeTeam.team_name)
      newObject.homeTeam.team_name = data.homeTeam.team_name;
    if (data.awayTeam.team_name) newObject.awayTeam = {};
    newObject.awayTeam.team_name = data.awayTeam.team_name;
    if (data.firstHalfStart) newObject.firstHalfStart = data.firstHalfStart;
    if (data.refree) newObject.refree = data.refree;
    if (data.status) newObject.status = data.status;
    if (data.goalsHomeTeam) newObject.goalsHomeTeam = data.goalsHomeTeam;
    if (data.goalsAwayTeam) newObject.goalsAwayTeam = data.goalsAwayTeam;
    if (data.round) newObject.round = data.round;
    if (data.statusShort) newObject.statusShort = data.statusShort;

    newObject.score = {};
    if (data.score.extratime) newObject.score.extratime = data.score.extratime;
    if (data.score.penalty) newObject.score.penalty = data.score.penalty;
    if (data.score.halftime) newObject.score.halftime = data.score.halftime;
    if (data.score.fulltime) newObject.score.fulltime = data.score.fulltime;

    return Fixtures.findByIdAndUpdate(fixtureId, newObject, { new: true })
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

// fixtures played update
export async function played(req, res) {
  if (req.session.key) {
    const recordId = req.params.fixtureId || "";
    const data = req.body || {};
    const { userId, userType } = res.locals;
    let adminId;
    if (userType === "admin" || !ObjectId.isValid(adminId)) {
      adminId = userId;
    } else {
      return fail(
        res,
        422,
        `Only admins are allowed to approval products not ${userType}`
      );
    }
    if (!ObjectId.isValid(recordId)) {
      return fail(res, 422, "Invalid record Id as request parameter");
    }
    if (!["pending", "match Finish"].includes(data.status)) {
      return fail(
        res,
        422,
        `Fixtures status must be either pending or completed"${data.status}".`
      );
    }

    const newObject = {};
    newObject.updated = Date.now();
    newObject.updatedBy = userId;
    if (data.status) {
      newObject.status = data.status;
    }

    // Find fixture and update it with the request body
    return Fixtures.findByIdAndUpdate(recordId, newObject, { new: true })
      .then(result => {
        if (!result) {
          return notFound(res, `Fixture not found with id ${recordId} first`);
        }
        return success(
          res,
          200,
          result.view(true),
          "Fixture has been acted on successfully!"
        );
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return notFound(
            res,
            `Fixture not found with id ${recordId}\r\n${err.message}`
          );
        }
        return fail(
          res,
          500,
          `Error updating fixture with id ${recordId}\r\n${err.message}`
        );
      });
  } else {
    return fail(res, 500, "Session timeout, please re-login");
  }
}

// Delete a fixture with the specified teamId in the request
export async function destroy(req, res) {
  if (req.session.key) {
    const recordId = req.params.fixtureId || "";
    if (!recordId) return fail(res, 400, "No record Id as request parameter");
    if (!recordId)
      return fail(res, 422, "Invalid record Id as request parameter");
    return Fixtures.findByIdAndRemove(recordId)
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
