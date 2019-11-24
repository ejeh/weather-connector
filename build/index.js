"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

var PORT = process.env.PORT || 4000; // listen for requests

_app["default"].listen(PORT, "0.0.0.0", function () {
  console.log("Server is listening on port ".concat(PORT));
});

var _default = _app["default"];
exports["default"] = _default;
//# sourceMappingURL=index.js.map