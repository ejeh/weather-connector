"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

var _request = _interopRequireDefault(require("request"));

var _responses = require("../../services/responses");

// Retrieve a single record
function search(req, res) {
  var apiKey = process.env.APIKEY;

  var _ref = req.query || {},
      q = _ref.q;

  var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(q, "&units=metric&appid=").concat(apiKey);
  (0, _request["default"])(url, function (err, response, result) {
    if (err) {
      if (!result) return (0, _responses.notFound)(res, "Error record not found.");
      return (0, _responses.fail)(res, 500, "Error retrieving record.\r\n".concat(err.message));
    } else {
      var weather = JSON.parse(result);
      return (0, _responses.success)(res, 200, weather, "retrieving record was successfull!");
    }
  });
}
//# sourceMappingURL=controller.js.map