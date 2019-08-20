"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elasticsearch = _interopRequireDefault(require("elasticsearch"));

var esClient = new _elasticsearch["default"].Client({
  host: "127.0.0.1:9200",
  log: "trace"
});
var _default = esClient;
exports["default"] = _default;
//# sourceMappingURL=index.js.map