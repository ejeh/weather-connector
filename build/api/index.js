"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _weather = _interopRequireDefault(require("./weather"));

var router = _express["default"].Router(); // Use Routes


router.use(_weather["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map