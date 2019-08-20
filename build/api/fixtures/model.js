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

var FixturesSchema = new _mongoose.Schema({
  event_date: {
    type: String,
    es_indexed: true
  },
  event_timestamp: {
    type: Number
  },
  firstHalfStart: {
    type: String,
    es_indexed: true
  },
  round: {
    type: String,
    es_indexed: true
  },
  status: {
    type: String,
    "enum": ["pending", "Match Finished"],
    es_indexed: true,
    "default": "pending"
  },
  statusShort: {
    type: String,
    "default": null,
    es_indexed: true
  },
  venue: {
    type: String,
    es_indexed: true
  },
  referee: {
    type: String,
    es_indexed: true
  },
  homeTeam: {
    team_id: {
      type: String
    },
    team_name: {
      type: String,
      es_indexed: true
    },
    logo: {
      type: String
    }
  },
  awayTeam: {
    team_id: {
      type: String
    },
    team_name: {
      type: String,
      es_indexed: true
    },
    logo: {
      type: String
    }
  },
  goalsHomeTeam: {
    type: Number,
    "default": 0,
    es_indexed: true
  },
  goalsAwayTeam: {
    type: Number,
    "default": 0,
    es_indexed: true
  },
  score: {
    halftime: {
      type: String,
      "default": 0,
      es_indexed: true
    },
    fulltime: {
      type: String,
      "default": 0,
      es_indexed: true
    },
    extratime: {
      type: String,
      "default": null,
      es_indexed: true
    },
    penalty: {
      type: String,
      "default": null,
      es_indexed: true
    }
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
FixturesSchema.methods = {
  view: function view(full) {
    var _view;

    var view = (_view = {
      // simple view
      firstHalfStart: this.firstHalfStart,
      round: this.round,
      status: this.status,
      venue: this.venue,
      event_date: this.event_date,
      homeTeam: this.homeTeam,
      statusShort: this.statusShort,
      referee: this.referee,
      awayTeam: this.awayTeam
    }, (0, _defineProperty2["default"])(_view, "awayTeam", this.goalsHomeTeam), (0, _defineProperty2["default"])(_view, "goalsAwayTeam", this.goalsAwayTeam), (0, _defineProperty2["default"])(_view, "score", this.score), _view);
    return full ? _objectSpread({}, view, {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      updatedBy: this.updatedBy
    }) : view;
  }
};
FixturesSchema.plugin(_mongoosastic["default"], {
  index: "fixtures",
  host: process.env.ELASTICSEARCH_URL,
  port: process.env.ELASTICSEARCH_PORT,
  hydrate: false,
  hydrateOptions: {
    lean: true
  }
});

var Fixtures = _mongoose["default"].model("Fixtures", FixturesSchema);

var ObjectId = _mongoose["default"].Types.ObjectId;
exports.ObjectId = ObjectId;
var _default = Fixtures;
exports["default"] = _default;
//# sourceMappingURL=model.js.map