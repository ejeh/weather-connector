import express from "express";
import * as team from "../../api/team/controller";
import { isValidAdmin, isValidUser } from "../auth/controller";
import { initTeams } from "../team/init";

const router = express.Router();

router.get("/init/teams", initTeams);

router.get("/teams/search", team.search);

/**
 * @api {get} /teams/:teamId Retrieve team
 * @apiName Retrieveteam
 * @apiGroup Team
 * @apiSuccess {Object} Team's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Team not found.
 */
router.get("/team/admin/:teamId", isValidAdmin, team.findOne);

router.get("/team/user/:teamId", isValidUser, team.findOne);

/**
 * @api {get} /teams Retrieve teams
 * @apiName RetrieveTeams
 * @apiGroup Team
 * @apiSuccess {Object[]} rows List of Temas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/teams/admin", isValidAdmin, team.findAll);

router.get("/teams/user", isValidUser, team.findAll);

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
router.post("/teams", isValidAdmin, team.create);

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
router.put("/teams/:teamId", isValidAdmin, team.update);

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
router.delete("/teams/:teamId", isValidAdmin, team.destroy);

export default router;
