"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ObjectId = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _ref;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AdminSchema = new _mongoose.Schema((_ref = {
  email: {
    type: String,
    lowercase: true,
    max: 100,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  updated: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
}, (0, _defineProperty2["default"])(_ref, "updated", {
  type: Date,
  "default": Date.now
}), (0, _defineProperty2["default"])(_ref, "updatedBy", {
  type: String
}), _ref), {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function transform(obj, ret) {
      delete ret._id;
    }
  }
});
AdminSchema.methods = {
  view: function view(full) {
    var view = {
      // simple view
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    return full ? _objectSpread({}, view, {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      updatedBy: this.updatedBy
    }) : view;
  }
};

var Admin = _mongoose["default"].model("Admin", AdminSchema);

var ObjectId = _mongoose["default"].Types.ObjectId;
exports.ObjectId = ObjectId;
var _default = Admin;
exports["default"] = _default;
//# sourceMappingURL=model.js.map