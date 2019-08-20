"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;
exports.create = create;
exports.findAll = findAll;
exports.findOne = findOne;
exports.update = update;
exports.destroy = destroy;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireWildcard(require("../../api/team/model"));

var _responses = require("../../services/responses");

var _elasticsearch = _interopRequireDefault(require("../../services/elasticsearch"));

// Find searched Teams
function search(_x, _x2) {
  return _search.apply(this, arguments);
} // Create a team


function _search() {
  _search = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _ref, q, search, body;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref = req.query || {}, q = _ref.q;

            if (q) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 422, "Why incorrect query string ".concat(q, "?")));

          case 3:
            // let results;
            search = function search(index, body) {
              return _elasticsearch["default"].search({
                index: index,
                body: body
              });
            };

            body = {
              from: 0,
              size: 5,
              query: {
                multi_match: {
                  query: q,
                  fields: ["name", "venue_name", "venue_city", "venue_address", "country"],
                  fuzziness: "AUTO"
                }
              },
              _source: ["name", "venue_name", "venue_city", "venue_address", "venue_surface", "country", "founded"]
            };
            search("teams", body).then(
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(results) {
                var result;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (results) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return", (0, _responses.fail)(res, 500, "No search result found"));

                      case 2:
                        result = results.hits.hits.map(function (source) {
                          return source._source;
                        });
                        (0, _responses.success)(res, 200, result, "retrieving record(s) was successfully!");

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x7) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](function (err) {
              return (0, _responses.fail)(res, 500, "Error retrieving record(s).\r\n".concat(err.message));
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _search.apply(this, arguments);
}

function create(req, res) {
  if (req.session.key) {
    var data = req.body || {};
    var _res$locals = res.locals,
        userId = _res$locals.userId,
        userType = _res$locals.userType;

    if (!userId || !userType) {
      return (0, _responses.fail)(res, 400, "Invalid authentication credentials");
    }

    if (userType !== "admin") {
      return (0, _responses.fail)(res, 422, "Only admin are allowed to add products not ".concat(userType));
    } // Validate request


    if (!data.name) {
      return (0, _responses.fail)(res, 422, "Team name can not be empty and must be alphanumeric.");
    }

    if (!data.venue_name) {
      return (0, _responses.fail)(res, 422, "Team stadium name can not be empty and must be alphanumeric.");
    }

    if (!data.venue_surface) {
      return (0, _responses.fail)(res, 422, "Team head coach can not be empty and must be alphanumeric.");
    }

    if (!data.venue_address) {
      return (0, _responses.fail)(res, 422, "Team's nick name can not be empty and must be alphanumeric.");
    }

    var newObject = {};
    if (data.name) newObject.name = data.name;
    if (data.venue_name) newObject.venue_name = data.venue_name;
    if (data.venue_surface) newObject.venue_surface = data.venue_surface;
    if (data.venue_address) newObject.venue_address = data.venue_address;
    if (data.venue_city) newObject.venue_city = data.venue_city;
    if (data.venue_capacity) newObject.venue_capacity = data.venue_capacity;
    if (data.code) newObject.code = data.code;
    if (data.founded) newObject.founded = data.founded;
    if (data.country) newObject.country = data.country;
    var record = new _model["default"](newObject);
    return record.save().then(function (result) {
      if (!result) {
        return (0, _responses.fail)(res, 404, "Error: not found newly created team");
      }

      return (0, _responses.success)(res, 200, result, "New team record has been created successfully");
    })["catch"](function (err) {
      return (0, _responses.fail)(res, 500, "An error occured while trying to create a team");
    });
  } else {
    return (0, _responses.fail)(res, 500, "Session timeout, please re-login");
  }
} // / Retrieve and return all records from the database.


function findAll(req, res) {
  if (req.session.key) {
    return _model["default"].find().limit(20).sort({
      createdAt: -1
    }).select({
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
    }).then(function (result) {
      return (0, _responses.success)(res, 200, result, "retrieving record(s) was successfully!");
    })["catch"](function (err) {
      return (0, _responses.fail)(res, 500, "Error retrieving record(s).\r\n".concat(err.message));
    });
  } else {
    return (0, _responses.fail)(res, 500, "Session timeout, please re-login");
  }
} // Retrieve a single record with a given teamId


function findOne(req, res) {
  if (req.session.key) {
    var recordId = req.params.teamId || "";
    var _res$locals2 = res.locals,
        userId = _res$locals2.userId,
        userType = _res$locals2.userType;
    if (!userId || !userType) return (0, _responses.fail)(res, 400, "Invalid authentication credentials");
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
    return (0, _responses.fail)(res, 500, "Session timeout, please re-login");
  }
} // Update a team identified by the adminId in the request


function update(_x3, _x4) {
  return _update.apply(this, arguments);
} // Delete a team with the specified teamId in the request


function _update() {
  _update = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var teamId, data, _res$locals3, userId, userType, newObject;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.session.key) {
              _context3.next = 25;
              break;
            }

            teamId = req.params.teamId || "";
            data = req.body || {};
            _res$locals3 = res.locals, userId = _res$locals3.userId, userType = _res$locals3.userType;

            if (!(!userId || !userType)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", (0, _responses.fail)(res, 400, "Invalid authentication credentials"));

          case 6:
            if (!(userType !== "admin")) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", (0, _responses.fail)(res, 422, "Only Admins are allowed to update this record not ".concat(userType)));

          case 8:
            if (data.name) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", (0, _responses.fail)(res, 422, "You must provide an alphanumeric email address"));

          case 10:
            newObject = {};
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
            return _context3.abrupt("return", _model["default"].findByIdAndUpdate(teamId, newObject, {
              "new": true
            }).then(function (result) {
              if (!result) return (0, _responses.notFound)(res, "Error: newly submitted record not found with id ".concat(userId));
              return (0, _responses.success)(res, 200, result, "Record has been created successfully!");
            })["catch"](function (err) {
              return (0, _responses.fail)(res, 500, "Error updating record with id ".concat(userId, ".\r\n").concat(err.message));
            }));

          case 25:
            return _context3.abrupt("return", (0, _responses.fail)(res, 500, "Session timeout, please re-login"));

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function destroy(_x5, _x6) {
  return _destroy.apply(this, arguments);
}

function _destroy() {
  _destroy = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var recordId, _res$locals4, userType, userId;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.session.key) {
              _context4.next = 14;
              break;
            }

            recordId = req.params.teamId || "";
            _res$locals4 = res.locals, userType = _res$locals4.userType, userId = _res$locals4.userId;

            if (!(!userId || !userType)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", (0, _responses.fail)(res, 400, "Invalid authentication credentials"));

          case 5:
            if (recordId) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", (0, _responses.fail)(res, 400, "No record Id as request parameter"));

          case 7:
            if (!(userType !== "admin")) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", (0, _responses.fail)(res, 422, "Only Admins are allowed to update this record not ".concat(userType)));

          case 9:
            if (recordId) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", (0, _responses.fail)(res, 422, "Invalid record Id as request parameter"));

          case 11:
            return _context4.abrupt("return", _model["default"].findByIdAndRemove(recordId).then(function (record) {
              if (!record) return (0, _responses.notFound)(res, "Record not found with id ".concat(recordId));
              return (0, _responses.success)(res, 200, [], "Record deleted successfully!");
            })["catch"](function (err) {
              if (err.kind === "ObjectId" || err.name === "NotFound") {
                return (0, _responses.notFound)(res, "Error: record not found with id ".concat(recordId, "\r\n").concat(err.message));
              }

              return (0, _responses.fail)(res, 500, "Error: could not delete record with id ".concat(recordId, "\r\n").concat(err.message));
            }));

          case 14:
            return _context4.abrupt("return", (0, _responses.fail)(res, 500, "Session timeout, please re-login"));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _destroy.apply(this, arguments);
}
//# sourceMappingURL=controller.js.map