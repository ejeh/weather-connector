"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth"));

var _admin = _interopRequireDefault(require("./admin"));

var _user = _interopRequireDefault(require("./user"));

var _team = _interopRequireDefault(require("./team"));

var _fixtures = _interopRequireDefault(require("./fixtures"));

var router = _express["default"].Router(); // Use Routes


router.use(_team["default"]);
router.use(_auth["default"]);
router.use(_admin["default"]);
router.use(_user["default"]);
router.use(_fixtures["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map