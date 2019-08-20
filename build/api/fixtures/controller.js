"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;
exports.create = create;
exports.findAll = findAll;
exports.completed = completed;
exports.pending = pending;
exports.findOne = findOne;
exports.update = update;
exports.played = played;
exports.destroy = destroy;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireWildcard(require("../../api/fixtures/model"));

var _responses = require("../../services/responses");

var _elasticsearch = _interopRequireDefault(require("../../services/elasticsearch"));

// Find searched Fixtures
function search(_x, _x2) {
  return _search.apply(this, arguments);
} // Create  a fixture


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
              query: {
                multi_match: {
                  query: q,
                  fields: ["status", "venue", "awayTeam.team_name", "homeTeam.name"],
                  fuzziness: "AUTO"
                }
              },
              _source: ["event_date", "firstHalfStart", "statusShort", "venue", "homeTeam", "awayTeam", "goalsHomeTeam", "goalsAwayTeam", "score", "status", "round", "referee"]
            };
            search("fixtures", body).then(
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

              return function (_x9) {
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

    if (userType !== "admin") {
      return (0, _responses.fail)(res, 422, "Only admin are allowed to add products not ".concat(userType));
    } // Validate request


    if (!data.event_date) {
      return (0, _responses.fail)(res, 422, "Fixtures date can not be empty and must be alphanumeric.");
    }

    if (!data.venue) {
      return (0, _responses.fail)(res, 422, "Feature venue can not be empty and must be alphanumeric.");
    }

    if (!data.homeTeam.team_name) {
      return (0, _responses.fail)(res, 422, "Fixtures home team can not be empty and must be alphanumeric.");
    }

    if (!data.awayTeam.team_name) {
      return (0, _responses.fail)(res, 422, "Fixtures away_team name can not be empty and must be alphanumeric.");
    }

    var newObject = {};
    if (data.event_date) newObject.event_date = data.event_date;
    if (data.venue) newObject.venue = data.venue;
    newObject.homeTeam = {};
    if (data.homeTeam.team_name) newObject.homeTeam.team_name = data.homeTeam.team_name;
    if (data.awayTeam.team_name) newObject.awayTeam = {};
    newObject.awayTeam.team_name = data.awayTeam.team_name;
    if (data.firstHalfStart) newObject.firstHalfStart = data.firstHalfStart;
    if (data.refree) newObject.refree = data.refree;
    if (data.goalsHomeTeam) newObject.goalsHomeTeam = data.goalsHomeTeam;
    if (data.goalsAwayTeam) newObject.goalsAwayTeam = data.goalsAwayTeam;
    if (data.round) newObject.round = data.round;
    if (data.statusShort) newObject.statusShort = data.statusShort;
    var record = new _model["default"](newObject);
    return record.save().then(function (result) {
      if (!result) {
        return (0, _responses.fail)(res, 404, "Error: not found newly created team");
      }

      return (0, _responses.success)(res, 200, result, "New fixture has been created successfully");
    })["catch"](function (err) {
      return (0, _responses.fail)(res, 500, "An error occured while trying to create a team: ".concat(err.message));
    });
  } else {
    return (0, _responses.fail)(res, 500, "Session timeout, please re-login");
  }
} // / Retrieve and return all records from the database.


function findAll(req, res) {
  if (req.session.key) {
    return _model["default"].find().limit(50).sort({
      createdAt: -1
    }).select({
      // eslint-disable-next-line object-property-newline
      venue: true,
      homeTeam: true,
      awayTeam: true,
      refree: true,
      event_date: true,
      status: true,
      firstHalfStart: true
    }).then(function (result) {
      return (0, _responses.success)(res, 200, result, "retrieving record(s) was successfully!");
    })["catch"](function (err) {
      return (0, _responses.fail)(res, 500, "Error retrieving record(s).\r\n".concat(err.message));
    });
  } else {
    return (0, _responses.fail)(res, 500, "Session timeout, please re-login");
  }
} // Retrieve all completed fixtures


function completed(req, res) {
  if (req.session.key) {
    var filter = {
      status: "Match Finished"
    };
    var _res$locals2 = res.locals,
        userId = _res$locals2.userId,
        userType = _res$locals2.userType;
    if (!userId || !userType) return (0, _responses.fail)(res, 400, "Invalid authentication credentials");
    if (userType !== "user") return (0, _responses.fail)(res, 422, "Only Users are allowed to update this record not ".concat(userType));
    return _model["default"].find(filter).then(function (result) {
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
} // Retrieve all pending fixtures


function pending(req, res) {
  if (req.session.key) {
    var filter = {
      status: "pending"
    };
    var _res$locals3 = res.locals,
        userId = _res$locals3.userId,
        userType = _res$locals3.userType;
    if (!userId || !userType) return (0, _responses.fail)(res, 400, "Invalid authentication credentials");
    if (userType !== "user") return (0, _responses.fail)(res, 422, "Only Users are allowed to update this record not ".concat(userType));
    return _model["default"].find(filter).then(function (result) {
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
} // Retrieve a single record with a given teamId


function findOne(req, res) {
  if (req.session.key) {
    var recordId = req.params.fixtureId || "";
    var _res$locals4 = res.locals,
        userId = _res$locals4.userId,
        userType = _res$locals4.userType;
    if (!userId || !userType) return (0, _responses.fail)(res, 400, "Invalid authentication credentials");
    if (userType !== "admin") return (0, _responses.fail)(res, 422, "Only Admins are allowed to update this record not ".concat(userType));
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
} // Update a fixtures identified by the fixturesId in the request


function update(_x3, _x4) {
  return _update.apply(this, arguments);
} // fixtures played update


function _update() {
  _update = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var fixtureId, data, _res$locals5, userId, userType, newObject;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.session.key) {
              _context3.next = 32;
              break;
            }

            fixtureId = req.params.fixtureId || "";
            data = req.body || {};
            _res$locals5 = res.locals, userId = _res$locals5.userId, userType = _res$locals5.userType;

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
            newObject = {};
            newObject.updatedBy = userId;
            newObject.updated = Date.now();
            if (data.event_date) newObject.event_date = data.event_date;
            if (data.venue) newObject.venue = data.venue;
            newObject.homeTeam = {};
            if (data.homeTeam.team_name) newObject.homeTeam.team_name = data.homeTeam.team_name;
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
            return _context3.abrupt("return", _model["default"].findByIdAndUpdate(fixtureId, newObject, {
              "new": true
            }).then(function (result) {
              if (!result) return (0, _responses.notFound)(res, "Error: newly submitted record not found with id ".concat(userId));
              return (0, _responses.success)(res, 200, result, "Record has been created successfully!");
            })["catch"](function (err) {
              return (0, _responses.fail)(res, 500, "Error updating record with id ".concat(userId, ".\r\n").concat(err.message));
            }));

          case 32:
            return _context3.abrupt("return", (0, _responses.fail)(res, 500, "Session timeout, please re-login"));

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function played(_x5, _x6) {
  return _played.apply(this, arguments);
} // Delete a fixture with the specified teamId in the request


function _played() {
  _played = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var recordId, data, _res$locals6, userId, userType, adminId, newObject;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.session.key) {
              _context4.next = 20;
              break;
            }

            recordId = req.params.fixtureId || "";
            data = req.body || {};
            _res$locals6 = res.locals, userId = _res$locals6.userId, userType = _res$locals6.userType;

            if (!(userType === "admin" || !_model.ObjectId.isValid(adminId))) {
              _context4.next = 8;
              break;
            }

            adminId = userId;
            _context4.next = 9;
            break;

          case 8:
            return _context4.abrupt("return", (0, _responses.fail)(res, 422, "Only admins are allowed to approval products not ".concat(userType)));

          case 9:
            if (_model.ObjectId.isValid(recordId)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", (0, _responses.fail)(res, 422, "Invalid record Id as request parameter"));

          case 11:
            if (["pending", "match Finish"].includes(data.status)) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", (0, _responses.fail)(res, 422, "Fixtures status must be either pending or completed\"".concat(data.status, "\".")));

          case 13:
            newObject = {};
            newObject.updated = Date.now();
            newObject.updatedBy = userId;

            if (data.status) {
              newObject.status = data.status;
            } // Find fixture and update it with the request body


            return _context4.abrupt("return", _model["default"].findByIdAndUpdate(recordId, newObject, {
              "new": true
            }).then(function (result) {
              if (!result) {
                return (0, _responses.notFound)(res, "Fixture not found with id ".concat(recordId, " first"));
              }

              return (0, _responses.success)(res, 200, result.view(true), "Fixture has been acted on successfully!");
            })["catch"](function (err) {
              if (err.kind === "ObjectId" || err.name === "NotFound") {
                return (0, _responses.notFound)(res, "Fixture not found with id ".concat(recordId, "\r\n").concat(err.message));
              }

              return (0, _responses.fail)(res, 500, "Error updating fixture with id ".concat(recordId, "\r\n").concat(err.message));
            }));

          case 20:
            return _context4.abrupt("return", (0, _responses.fail)(res, 500, "Session timeout, please re-login"));

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _played.apply(this, arguments);
}

function destroy(_x7, _x8) {
  return _destroy.apply(this, arguments);
}

function _destroy() {
  _destroy = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(req, res) {
    var recordId;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!req.session.key) {
              _context5.next = 9;
              break;
            }

            recordId = req.params.fixtureId || "";

            if (recordId) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", (0, _responses.fail)(res, 400, "No record Id as request parameter"));

          case 4:
            if (recordId) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", (0, _responses.fail)(res, 422, "Invalid record Id as request parameter"));

          case 6:
            return _context5.abrupt("return", _model["default"].findByIdAndRemove(recordId).then(function (record) {
              if (!record) return (0, _responses.notFound)(res, "Record not found with id ".concat(recordId));
              return (0, _responses.success)(res, 200, [], "Record deleted successfully!");
            })["catch"](function (err) {
              if (err.kind === "ObjectId" || err.name === "NotFound") {
                return (0, _responses.notFound)(res, "Error: record not found with id ".concat(recordId, "\r\n").concat(err.message));
              }

              return (0, _responses.fail)(res, 500, "Error: could not delete record with id ".concat(recordId, "\r\n").concat(err.message));
            }));

          case 9:
            return _context5.abrupt("return", (0, _responses.fail)(res, 500, "Session timeout, please re-login"));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _destroy.apply(this, arguments);
}
//# sourceMappingURL=controller.js.map