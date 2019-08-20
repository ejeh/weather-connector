"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var admin = _interopRequireWildcard(require("./controller"));

var _controller2 = require("../auth/controller");

var router = _express["default"].Router();
/**
 * @api {get} /admins/:adminId Retrieve admin
 * @apiName RetrieveAdmin
 * @apiGroup Admin
 * @apiSuccess {Object} admin Admin's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Admin not found.
 */


router.get("/admins/:adminId", _controller2.isValidAdmin, admin.findOne);
/**
 * @api {get} /admins Retrieve admins
 * @apiName RetrieveAdmins
 * @apiGroup Admin
 * @apiSuccess {Object[]} rows List of Admins.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */

router.get("/admins", _controller2.isValidAdmin, admin.findAll);
/**
 * @api {put} /admins Update admin
 * @apiName UpdateAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {String} firstName admin's first name
 * @apiParam {String} lastName admin's last name
 * @apiParam {String} email  admin's email address
 * @apiParam {String} password  admin's password
 * @apiParam {Date} updated update date
 * @apiParam {String} updatedBy  AdminID staff who updated the record
 * @apiSuccess {Object} admin Admin's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */

router.put("/admins", _controller2.isValidAdmin, admin.update);
/**
 * @api {delete} /admins/:adminId Delete admin
 * @apiName DeleteAdmin
 * @apiGroup Admin
 * @apiPermission master
 * @apiParam  access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */

router["delete"]("/admins/:adminId", _controller2.isValidAdmin, admin.destroy);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map