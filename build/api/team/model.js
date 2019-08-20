"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ObjectId = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongoosastic = _interopRequireDefault(require("mongoosastic"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TeamSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    es_indexed: true
  },
  code: {
    type: String,
    es_indexed: true
  },
  founded: {
    type: String,
    es_indexed: true
  },
  country: {
    type: String,
    es_indexed: true
  },
  venue_name: {
    type: String,
    es_indexed: true
  },
  venue_surface: {
    type: String,
    es_indexed: true
  },
  venue_address: {
    type: String,
    es_indexed: true
  },
  venue_city: {
    type: String,
    es_indexed: true
  },
  venue_capacity: {
    type: Number,
    es_indexed: true
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
TeamSchema.methods = {
  view: function view(full) {
    var _view;

    var view = (_view = {
      // simple view
      name: this.name,
      code: this.code,
      founded: this.founded
    }, (0, _defineProperty2["default"])(_view, "founded", this.country), (0, _defineProperty2["default"])(_view, "venue_capacity", this.venue_capacity), (0, _defineProperty2["default"])(_view, "venue_address", this.venue_address), (0, _defineProperty2["default"])(_view, "venue_city", this.venue_city), (0, _defineProperty2["default"])(_view, "venue_name", this.venue_name), (0, _defineProperty2["default"])(_view, "venue_surface", this.venue_surface), (0, _defineProperty2["default"])(_view, "updated", this.updated), _view);
    return full ? _objectSpread({}, view, {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      updatedBy: this.updatedBy
    }) : view;
  }
};
TeamSchema.plugin(_mongoosastic["default"], {
  index: "teams",
  host: process.env.ELASTICSEARCH_URL,
  port: process.env.ELASTICSEARCH_PORT,
  hydrate: false,
  hydrateOptions: {
    lean: true
  }
});

var Team = _mongoose["default"].model("Team", TeamSchema);

var ObjectId = _mongoose["default"].Types.ObjectId;
exports.ObjectId = ObjectId;
var _default = Team;
exports["default"] = _default;
//# sourceMappingURL=model.js.map