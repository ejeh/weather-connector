// time.js
exports.setTimeout = function() {
  return global.setTimeout.apply(global, arguments);
};

// Tests
const time = require("../util/time");
const sinon = require("sinon");
sinon.stub(time, "setTimeout");
