"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOne = findOne;
exports.findAll = findAll;
exports.update = update;
exports.destroy = destroy;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireWildcard(require("./model"));

var _responses = require("../../services/responses");

var helper = _interopRequireWildcard(require("../../services/helpers"));

// Retrieve a single record with a given adminId
function findOne(req, res) {
  if (req.session.key) {
    var recordId = req.params.adminId || "";
    var _res$locals = res.locals,
        userId = _res$locals.userId,
        userType = _res$locals.userType;
    if (!userId || !userType) return (0, _responses.fail)(res, 400, "Invalid authentication credentials");
    if (userType !== "admin") return (0, _responses.fail)(res, 422, "Only Admins are allowed to update this record not ".concat(userType));
    if (!recordId) recordId = userId;
    if (!_model.ObjectId.isValid(recordId)) return (0, _responses.fail)(res, 422, "Invalid record Id as request parameter");
    return _model["default"].findById(recordId).then(function (result) {
      if (!result) return (0, _responses.notFound)(res, "Error record not found.");
      return (0, _responses.success)(res, 200, result, "retrieving record was successfully!");
    })["catch"](function (err) {
      if (err.kind === "ObjectId") {
        (0, _responses.notFound)(res, "Error retrieving record.\r\n".concat(err.message));
      }

      return (0, _responses.fail)(res, 500, "Error retrieving record.\r\n".concat(err.message));
    });
  } else {
    return (0, _responses.fail)(res, 401, "Session timeout, please re-login");
  }
} // / Retrieve and return all records from the database.


function findAll(req, res) {
  if (req.session.key) {
    return _model["default"].find().limit(4).sort({
      createdAt: -1
    }).select({
      // eslint-disable-next-line object-property-newline
      email: true,
      firstName: true,
      lastName: true
    }).then(function (result) {
      return (0, _responses.success)(res, 200, result, "retrieving record(s) was successfully!");
    })["catch"](function (err) {
      return (0, _responses.fail)(res, 500, "Error retrieving record(s).\r\n".concat(err.message));
    });
  } else {
    return (0, _responses.fail)(res, 401, "Session timeout, please re-login");
  }
} // Update a admin


function update(_x, _x2) {
  return _update.apply(this, arguments);
} // Delete a admin with the specified adminId in the request


function _update() {
  _update = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var data, _res$locals2, userId, userType, userEmail, record, newObject;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.session.key) {
              _context.next = 34;
              break;
            }

            data = req.body || {};
            _res$locals2 = res.locals, userId = _res$locals2.userId, userType = _res$locals2.userType, userEmail = _res$locals2.userEmail;

            if (!(!userId || !userType)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 400, "Invalid authentication credentials"));

          case 5:
            if (!(userType !== "admin")) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 422, "Only Admins are allowed to update this record not ".concat(userType)));

          case 7:
            if (!(!userEmail && !data.email)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 422, "You must provide an alphanumeric email address"));

          case 9:
            record = {};
            _context.prev = 10;
            _context.next = 13;
            return _model["default"].findById(userId);

          case 13:
            record = _context.sent;
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](10);
            return _context.abrupt("return", (0, _responses.fail)(res, 422, "Error fetching Admin information"));

          case 19:
            if (record) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", (0, _responses.notFound)(res, "Admin not found"));

          case 21:
            newObject = {};
            newObject.updatedBy = userId;
            newObject.updated = Date.now();
            if (data.firstName) newObject.firstName = data.firstName;
            if (data.lastName) newObject.lastName = data.lastName;
            if (!userEmail) newObject.email = data.email.toLowerCase();

            if (!data.password) {
              _context.next = 31;
              break;
            }

            _context.next = 30;
            return helper.hashPassword(data.password);

          case 30:
            newObject.password = _context.sent;

          case 31:
            return _context.abrupt("return", _model["default"].findByIdAndUpdate(userId, newObject, {
              "new": true
            }).then(function (result) {
              if (!result) return (0, _responses.notFound)(res, "Error: newly submitted record not found with id ".concat(userId));
              return (0, _responses.success)(res, 200, result, "Record has been created successfully!");
            })["catch"](function (err) {
              return (0, _responses.fail)(res, 500, "Error updating record with id ".concat(userId, ".\r\n").concat(err.message));
            }));

          case 34:
            return _context.abrupt("return", (0, _responses.fail)(res, 401, "Session timeout, please re-login"));

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 16]]);
  }));
  return _update.apply(this, arguments);
}

function destroy(_x3, _x4) {
  return _destroy.apply(this, arguments);
}

function _destroy() {
  _destroy = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var recordId, _res$locals3, userId, userType;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.session.key) {
              _context2.next = 16;
              break;
            }

            recordId = req.params.adminId || "";

            if (recordId) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 400, "No record Id as request parameter"));

          case 4:
            if (_model.ObjectId.isValid(recordId)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 422, "Invalid record Id as request parameter"));

          case 6:
            _res$locals3 = res.locals, userId = _res$locals3.userId, userType = _res$locals3.userType;

            if (!(!userId || !userType)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 400, "Invalid authentication credentials"));

          case 9:
            if (!(userType === "admin" && recordId === userId)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 13;
            break;

          case 12:
            return _context2.abrupt("return", (0, _responses.fail)(res, 422, "Only Admin is allowed to delete this record not ".concat(userType)));

          case 13:
            return _context2.abrupt("return", _model["default"].findByIdAndRemove(recordId).then(function (record) {
              if (!record) return (0, _responses.notFound)(res, "Record not found with id ".concat(recordId));
              return (0, _responses.success)(res, 200, [], "Record deleted successfully!");
            })["catch"](function (err) {
              if (err.kind === "ObjectId" || err.name === "NotFound") {
                return (0, _responses.notFound)(res, "Error: record not found with id ".concat(recordId, "\r\n").concat(err.message));
              }

              return (0, _responses.fail)(res, 500, "Error: could not delete record with id ".concat(recordId, "\r\n").concat(err.message));
            }));

          case 16:
            return _context2.abrupt("return", (0, _responses.fail)(res, 401, "Session timeout, please re-login"));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _destroy.apply(this, arguments);
}
//# sourceMappingURL=controller.js.map