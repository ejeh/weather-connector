"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var team = _interopRequireWildcard(require("../../api/team/controller"));

var _controller2 = require("../auth/controller");

var _init = require("../team/init");

var router = _express["default"].Router();

router.get("/init/teams", _init.initTeams);
router.get("/teams/search", team.search);
/**
 * @api {get} /teams/:teamId Retrieve team
 * @apiName Retrieveteam
 * @apiGroup Team
 * @apiSuccess {Object} Team's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Team not found.
 */

router.get("/team/admin/:teamId", _controller2.isValidAdmin, team.findOne);
router.get("/team/user/:teamId", _controller2.isValidUser, team.findOne);
/**
 * @api {get} /teams Retrieve teams
 * @apiName RetrieveTeams
 * @apiGroup Team
 * @apiSuccess {Object[]} rows List of Temas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */

router.get("/teams/admin", _controller2.isValidAdmin, team.findAll);
router.get("/teams/user", _controller2.isValidUser, team.findAll);
/**
 * @api {post} /Teams Create product
 * @description New created team
 * @apiName CreateTeam
 * @apiGroup Team
 * @apiParam fullName team fullname
 * @apiParam nickName team nick name
 * @apiParam founded team date fouded
 * @apiParam ground team ground
 * @apiParam owner team owner
 * @apiParam headCoach team head coach
 * @apiParam league team league
 * @apiParam website team website
 */

router.post("/teams", _controller2.isValidAdmin, team.create);
/**
 * @api {put} /Teams Update team
 * @description New created team
 * @apiName UpdateTeam
 * @apiGroup Team
 * @apiParam fullName team fullname
 * @apiParam nickName team nick name
 * @apiParam founded team date fouded
 * @apiParam ground team ground
 * @apiParam owner team owner
 * @apiParam headCoach team head coach
 * @apiParam league team league
 * @apiParam website team website
 */

router.put("/teams/:teamId", _controller2.isValidAdmin, team.update);
/**
 * @api {delete} /team/:teamID Delete team
 * @apiName DeleteTeam
 * @apiGroup Team
 * @apiPermission master
 * @apiParam  access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Admin not found.
 * @apiError 401 master access only.
 */

router["delete"]("/teams/:teamId", _controller2.isValidAdmin, team.destroy);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map