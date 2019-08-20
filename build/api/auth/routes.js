"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

/**
 * @author 4Decoder
 */
var router = _express["default"].Router();
/**
 * @api {post} /:userType/auth/:authType Authenticate
 * @apiName SignMessage
 * @apiGroup Authenticate
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam userType User’s user type (Customer | Vendor | Admin).
 * @apiParam authType User’s authentication type.
 * @apiParam publicaddress User’s publicaddress posted in in the body.
 * @apiParam signature User’s signature posted in in the body.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 * @apiError 401 master access only.
 */


router.post("/authenticate/email/:userType/signup", _controller.emailSignup);
router.post("/authenticate/email/:userType/login", _controller.emailLogin);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map