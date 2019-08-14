import express from "express";
import * as fixtures from "./controller";
import { isValidAdmin, isValidUser } from "../auth/controller";
import { initFixtures } from "../fixtures/init";

const router = express.Router();

router.get("/init/fixtures", initFixtures);

router.get("/fixtures/search", fixtures.search);

/**
 * @api {get} /fixture/:fixtureId Retrieve team
 * @apiName RetrieveFixture
 * @apiGroup Fixture
 * @apiSuccess {Object} Fixture's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixture not found.
 */
router.get("/fixture/:fixtureId", isValidAdmin, fixtures.findOne);

router.get("/fixtures/completed/user", isValidUser, fixtures.completed);

router.get("/fixtures/pending/user", isValidUser, fixtures.pending);

/**
 * @api {get} /fixtures Retrieve fixtures
 * @apiName RetrieveFixtures
 * @apiGroup Fixtures
 * @apiSuccess {Object[]} rows List of Fixtures.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/fixtures/admin", isValidAdmin, fixtures.findAll);

router.get("/fixtures/user", isValidUser, fixtures.findAll);

/**
 * @api {post} /fixtures Create fixture
 * @description New created fixture
 * @apiName CreateFixture
 * @apiGroup Fixture
 * @apiParam team
 * @apiParam time fixture time
 * @apiParam date fixture date
 * @apiParam venue fixture venue
 */
router.post("/fixtures", isValidAdmin, fixtures.create);

/**
 * @api {put} /fixture/:fixtureId Update fixture
 * @description New updated fixture
 * @apiName UpdateFixture
 * @apiGroup fixture
 * @apiParam team fixture team
 * @apiParam time fixture time
 * @apiParam date fixture date
 * @apiParam venue fixture venue
 */
router.put("/fixture/:fixtureId", isValidAdmin, fixtures.update);

/**
 * @description admin has exclusive right to modify this fixture
 */
router.patch("/fixture/:fixtureId", isValidAdmin, fixtures.played);

router.delete("/fixture/:fixtureId", isValidAdmin, fixtures.destroy);

export default router;
