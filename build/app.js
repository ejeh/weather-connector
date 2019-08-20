"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _redis = _interopRequireDefault(require("redis"));

var _api = _interopRequireDefault(require("./api"));

// import dependencies
var redisClient = _redis["default"].createClient(); // host: "redis"


var redisStore = require("connect-redis")(_expressSession["default"]); // import routes


_dotenv["default"].config();

var app = (0, _express["default"])();
redisClient.on("error", function (err) {
  console.log("Redis error: ", err);
}); // Start a session; we use Redis for the session store.
// "secret" will be used to create the session ID hash (the cookie id and the redis key value)
// "name" will show up as your cookie name in the browser
// "cookie" is provided by default; you can add it to add additional personalized options
// The "store" ttl is the expiration time for each Redis session ID, in seconds

app.use((0, _expressSession["default"])({
  secret: "ThisIsHowYouUseRedisSessionStorage",
  name: "_redis",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  },
  // Note that the cookie-parser module is no longer needed
  store: new redisStore({
    host: "localhost",
    port: 6379,
    client: redisClient,
    ttl: 2000
  })
})); // app.use(cookieParser());
// app.use(helmet());

app.use(_bodyParser["default"].urlencoded({
  extended: true,
  limit: "10mb"
}));
app.use(_bodyParser["default"].json({
  limit: "10mb"
}));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public")));
var database = process.env.DB_HOST; // Configuring the database

_mongoose["default"].Promise = global.Promise; // Connecting to the database

_mongoose["default"].connect(database, {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_SAFE_INTEGER,
  reconnectInterval: 1000,
  poolSize: 5,
  socketTimeoutMS: 45000,
  autoReconnect: true
}).then(function () {
  console.log("Successfully connected to the database!");
})["catch"](function (err) {
  console.log(err, "Could not connect to the database. Exiting now...");
  process.exit();
});

_mongoose["default"].set("useFindAndModify", false);

_mongoose["default"].set("useCreateIndex", true); // define a simple route


app.get("/", function (req, res) {
  res.json({
    message: "Welcome to Mock Premier Fixtures."
  });
}); // modify request object

app.use(function (req, res, next) {
  res.locals.userId = 0.0;
  res.locals.userType = "anonymous";
  res.locals.role = "";
  next();
}); // Use Routes

app.use("/api/v1", _api["default"]);
app.use(function (req, res, next) {
  var error = new Error("Not found!");
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: "Mock premier league API says ".concat(error.message)
    }
  });
  next();
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map