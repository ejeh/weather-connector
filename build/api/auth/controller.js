"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidAdmin = isValidAdmin;
exports.isValidUser = isValidUser;
exports.emailSignup = emailSignup;
exports.emailLogin = emailLogin;
exports.getUserModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../../api/admin/model"));

var _model2 = _interopRequireDefault(require("../../api/user/model"));

var _responses = require("../../services/responses");

var _helpers = require("../../services/helpers");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _jwt = require("../../services/jwt");

var getUserModel = function getUserModel(userType) {
  var user = null;

  switch (userType) {
    case "admin":
      user = _model["default"];
      break;

    case "user":
      user = _model2["default"];
      break;

    default:
      user = null;
  }

  return user;
}; // Authorize to access admin protected route


exports.getUserModel = getUserModel;

function isValidAdmin(req, res, next) {
  var accessToken = (0, _jwt.getToken)(req);
  var filter;

  if (!req.params) {
    return (0, _responses.fail)(res, 403, "Authentication failed: Invalid request parameters.");
  }

  if (!accessToken) {
    return (0, _responses.fail)(res, 403, "Authencation faied: Undefined token.");
  }

  try {
    var _jwt$verify = _jsonwebtoken["default"].verify(accessToken, _jwt.jwtSecret),
        _jwt$verify$payload = _jwt$verify.payload,
        id = _jwt$verify$payload.id,
        email = _jwt$verify$payload.email;

    if (email) {
      filter = {
        email: email
      };
    }

    return _model["default"].findOne(filter).select({
      email: true,
      firstName: true,
      lastName: true
    }).exec().then(function (admin) {
      if (!admin) {
        return (0, _responses.notFound)(res, "Admin with email ".concat(email, " not found in database"));
      }

      res.locals.userId = id;
      res.locals.userType = "admin";
      res.locals.userEmail = email;
      return next();
    });
  } catch (error) {
    return (0, _responses.fail)(res, 401, "Admin verication failed, please login");
  }
} // / Authorize to access user protected route


function isValidUser(req, res, next) {
  var accessToken = (0, _jwt.getToken)(req);
  var filter;

  if (!req.params) {
    return (0, _responses.fail)(res, 403, "Authentication failed: Invalid request parameters.");
  }

  if (!accessToken) {
    return (0, _responses.fail)(res, 403, "Authencation faied: Undefined token.");
  }

  try {
    var _jwt$verify2 = _jsonwebtoken["default"].verify(accessToken, _jwt.jwtSecret),
        _jwt$verify2$payload = _jwt$verify2.payload,
        id = _jwt$verify2$payload.id,
        email = _jwt$verify2$payload.email;

    if (email) {
      filter = {
        email: email
      };
    }

    return _model2["default"].findOne(filter).select({
      email: true,
      firstName: true,
      lastName: true
    }).exec().then(function (user) {
      if (!user) {
        return (0, _responses.notFound)(res, "Admin with email ".concat(email, " not found in database"));
      }

      res.locals.userId = id;
      res.locals.userType = "user";
      res.locals.userEmail = email;
      return next();
    });
  } catch (error) {
    return (0, _responses.fail)(res, 401, "Admin verication failed, please login");
  }
} // Sigup admin route


function emailSignup(_x, _x2, _x3) {
  return _emailSignup.apply(this, arguments);
} // Login admin route


function _emailSignup() {
  _emailSignup = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, email, password, userType, User, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            userType = req.params.userType;

            if (!(!email || !password)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 401, "Request should have an Email and Password"));

          case 4:
            if (req.params) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 403, "Authentication Failed: invalid request parameters."));

          case 6:
            User = getUserModel(userType);

            if (User) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 401, "Unknown user type!"));

          case 9:
            _context.prev = 9;
            _context.next = 12;
            return (0, _helpers.findEmail)(User, email);

          case 12:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 15;
              break;
            }

            _context.t0 = {};

          case 15:
            user = _context.t0;
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](9);
            return _context.abrupt("return", (0, _responses.fail)(res, 500, "Error finding user with email ".concat(email, ". ").concat(_context.t1.message)));

          case 21:
            if (!(user && email === user.email)) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", (0, _responses.fail)(res, 500, "User with email already exist. ".concat(email)));

          case 23:
            return _context.abrupt("return", (0, _helpers.hashPassword)(password).then(function (hash) {
              var newUser = new User({
                email: req.body.email,
                password: hash
              });
              return newUser.save().then(function (saved) {
                return (0, _responses.success)(res, 200, saved, "new User record has been created");
              })["catch"](function (err) {
                return (0, _responses.fail)(res, 500, "Error creating user. ".concat(err));
              });
            })["catch"](function (err) {
              return (0, _responses.fail)(res, 500, "Error encrypting user password. ".concat(err.message));
            }));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 18]]);
  }));
  return _emailSignup.apply(this, arguments);
}

function emailLogin(_x4, _x5) {
  return _emailLogin.apply(this, arguments);
}

function _emailLogin() {
  _emailLogin = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, userType, User, currentUser, user, match;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req.session.key = req.body.email;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            userType = req.params.userType;

            if (userType) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 403, "Authentication Failed: invalid request parameters."));

          case 5:
            if (!(!email || !password)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 401, "Request should have an Email and Password"));

          case 7:
            User = getUserModel(userType);

            if (User) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 401, "Unknown user type!"));

          case 10:
            _context2.prev = 10;
            _context2.next = 13;
            return (0, _helpers.findEmail)(User, email);

          case 13:
            _context2.t0 = _context2.sent;

            if (_context2.t0) {
              _context2.next = 16;
              break;
            }

            _context2.t0 = {};

          case 16:
            user = _context2.t0;
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t1 = _context2["catch"](10);
            return _context2.abrupt("return", (0, _responses.fail)(res, 500, "Error finding user with email ".concat(email, ". ").concat(_context2.t1.message)));

          case 22:
            if (user.email) {
              _context2.next = 24;
              break;
            }

            return _context2.abrupt("return", (0, _responses.fail)(res, 500, "Could not find user with email ".concat(email)));

          case 24:
            _context2.next = 26;
            return (0, _helpers.comparePasswords)(password, user.password);

          case 26:
            match = _context2.sent;

            if (!match) {
              _context2.next = 29;
              break;
            }

            return _context2.abrupt("return", user.save().then(function (result) {
              currentUser = result;
              return new Promise(function (resolve, reject) {
                _jsonwebtoken["default"].sign({
                  payload: {
                    id: result.id,
                    email: email
                  }
                }, _jwt.jwtSecret, {
                  expiresIn: 3000
                }, function (err, token) {
                  if (err) reject(err);
                  resolve(token);
                });
              });
            }).then(function (accessToken) {
              try {
                var encrypted = (0, _jwt.encrypt)(accessToken);
                (0, _responses.success)(res, 200, {
                  accessToken: encrypted,
                  id: currentUser.id
                }, "Authentication successful!");
              } catch (err) {
                (0, _responses.fail)(res, 401, "Unable to generate an access token");
              }
            })["catch"](function (err) {
              (0, _responses.fail)(res, 500, "Unable to authenticate user", err);
            }));

          case 29:
            return _context2.abrupt("return", (0, _responses.fail)(res, 403, "Authentication Failed: invalid credentials."));

          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[10, 19]]);
  }));
  return _emailLogin.apply(this, arguments);
}
//# sourceMappingURL=controller.js.map