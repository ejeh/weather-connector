import User, { ObjectId } from "./model";
import { success, fail, notFound } from "../../services/responses";
import * as helper from "../../services/helpers";

// Retrieve a single record with a given userId
export function findOne(req, res) {
  if (req.session.key) {
    let recordId = req.params.userId || "";
    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (userType !== "user")
      return fail(
        res,
        422,
        `Only Users are allowed to update this record not ${userType}`
      );
    if (!recordId) recordId = userId;
    if (!ObjectId.isValid(recordId))
      return fail(res, 422, "Invalid record Id as request parameter");
    return User.findById(recordId)
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
    return fail(res, 401, "Session timeout, please re-login");
  }
}

// / Retrieve and return all records from the database.
export function findAll(req, res) {
  if (req.session.key) {
    return User.find()
      .limit(4)
      .sort({ createdAt: -1 })
      .select({
        // eslint-disable-next-line object-property-newline
        email: true,
        firstName: true,
        lastName: true
      })
      .then(result =>
        success(res, 200, result, "retrieving record(s) was successfully!")
      )
      .catch(err =>
        fail(res, 500, `Error retrieving record(s).\r\n${err.message}`)
      );
  } else {
    return fail(res, 401, "Session timeout, please re-login");
  }
}

// Update a user
export async function update(req, res) {
  if (req.session.key) {
    const data = req.body || {};
    const { userId, userType, userEmail } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");
    if (userType !== "user")
      return fail(
        res,
        422,
        `Only User are allowed to update this record not ${userType}`
      );
    if (!userEmail && !data.email)
      return fail(res, 422, "You must provide an alphanumeric email address");

    let record = {};
    try {
      record = await User.findById(userId);
    } catch (err) {
      return fail(res, 422, "Error fetching User information");
    }
    if (!record) return notFound(res, "User not found");

    const newObject = {};
    newObject.updatedBy = userId;
    newObject.updated = Date.now();
    if (data.firstName) newObject.firstName = data.firstName;
    if (data.lastName) newObject.lastName = data.lastName;
    if (!userEmail) newObject.email = data.email.toLowerCase();
    if (data.password)
      newObject.password = await helper.hashPassword(data.password);

    return User.findByIdAndUpdate(userId, newObject, { new: true })
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
    return fail(res, 401, "Session timeout, please re-login");
  }
}

// Delete a admin with the specified adminId in the request
export async function destroy(req, res) {
  if (req.session.key) {
    const recordId = req.params.userId || "";
    if (!recordId) return fail(res, 400, "No record Id as request parameter");
    if (!ObjectId.isValid(recordId))
      return fail(res, 422, "Invalid record Id as request parameter");

    const { userId, userType } = res.locals;
    if (!userId || !userType)
      return fail(res, 400, "Invalid authentication credentials");

    if (userType === "user" && recordId === userId) {
      // we are cool!
    } else {
      return fail(
        res,
        422,
        `Only  User is allowed to delete this record not ${userType}`
      );
    }
    return User.findByIdAndRemove(recordId)
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
    return fail(res, 401, "Session timeout, please re-login");
  }
}
