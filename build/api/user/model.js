"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ObjectId = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UserSchema = new _mongoose.Schema({
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
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  updated: {
    type: Date,
    "default": Date.now
  },
  updatedBy: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function transform(obj, ret) {
      delete ret._id;
    }
  }
});
UserSchema.methods = {
  view: function view(full) {
    var view = {
      // simple view
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      updated: this.updated
    };
    return full ? _objectSpread({}, view, {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      updatedBy: this.updatedBy
    }) : view;
  }
};

var User = _mongoose["default"].model("User", UserSchema);

var ObjectId = _mongoose["default"].Types.ObjectId;
exports.ObjectId = ObjectId;
var _default = User;
exports["default"] = _default;
//# sourceMappingURL=model.js.map