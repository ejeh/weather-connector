"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var fixtures = _interopRequireWildcard(require("./controller"));

var _controller2 = require("../auth/controller");

var _init = require("../fixtures/init");

var router = _express["default"].Router();

router.get("/init/fixtures", _init.initFixtures);
router.get("/fixtures/search", fixtures.search);
/**
 * @api {get} /fixture/:fixtureId Retrieve team
 * @apiName RetrieveFixture
 * @apiGroup Fixture
 * @apiSuccess {Object} Fixture's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Fixture not found.
 */

router.get("/fixture/:fixtureId", _controller2.isValidAdmin, fixtures.findOne);
router.get("/fixtures/completed/user", _controller2.isValidUser, fixtures.completed);
router.get("/fixtures/pending/user", _controller2.isValidUser, fixtures.pending);
/**
 * @api {get} /fixtures Retrieve fixtures
 * @apiName RetrieveFixtures
 * @apiGroup Fixtures
 * @apiSuccess {Object[]} rows List of Fixtures.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */

router.get("/fixtures/admin", _controller2.isValidAdmin, fixtures.findAll);
router.get("/fixtures/user", _controller2.isValidUser, fixtures.findAll);
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

router.post("/fixtures", _controller2.isValidAdmin, fixtures.create);
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

router.put("/fixture/:fixtureId", _controller2.isValidAdmin, fixtures.update);
/**
 * @description admin has exclusive right to modify this fixture
 */

router.patch("/fixture/:fixtureId", _controller2.isValidAdmin, fixtures.played);
router["delete"]("/fixture/:fixtureId", _controller2.isValidAdmin, fixtures.destroy);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map