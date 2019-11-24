"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var weather = _interopRequireWildcard(require("./controller"));

var router = _express["default"].Router();

router.get("/weather/search", weather.search);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map