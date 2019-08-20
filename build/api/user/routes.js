"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var user = _interopRequireWildcard(require("./controller"));

var _controller2 = require("../../api/auth/controller");

var router = _express["default"].Router();
/**
 * @api {get} /user/:adminId Retrieve admin
 * @apiName RetrieveAdmin
 * @apiGroup Admin
 * @apiSuccess {Object} user user's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 user not found.
 */


router.get("/user/:userId", _controller2.isValidUser, user.findOne);
/**
 * @api {get} /users Retrieve user
 * @apiName Retrieveuser
 * @apiGroup user
 * @apiSuccess {Object[]} rows List of user.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */

router.get("/users", _controller2.isValidUser, user.findAll);
/**
 * @api {put} /user Update user
 * @apiName Updateuser
 * @apiGroup user
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} firstName user's first name
 * @apiParam {String} lastName user's last name
 * @apiParam {String} email  user's email address
 * @apiParam {String} password  user's password
 * @apiParam {Date} updated update date
 * @apiParam {String} updatedBy  userID staff who updated the record
 * @apiSuccess {Object} user user's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 user not found.
 * @apiError 401 master access only.
 */

router.put("/user", _controller2.isValidUser, user.update);
/**
 * @api {delete} /user/:userId Delete user
 * @apiName Deleteuser
 * @apiGroup user
 * @apiPermission master
 * @apiParam  access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 user not found.
 * @apiError 401 master access only.
 */

router["delete"]("/user/:userId", _controller2.isValidUser, user.destroy);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map