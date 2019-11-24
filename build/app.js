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

var _cors = _interopRequireDefault(require("cors"));

var _api = _interopRequireDefault(require("./api"));

// import dependencies
// import routes
_dotenv["default"].config();

var app = (0, _express["default"])();
var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use((0, _cors["default"])(corsOptions)); // app.use(cookieParser());
// app.use(helmet());

app.use(_bodyParser["default"].urlencoded({
  extended: true,
  limit: "10mb"
}));
app.use(_bodyParser["default"].json({
  limit: "10mb"
}));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public"))); // const database = process.env.DB_HOST;
// // Configuring the database
// mongoose.Promise = global.Promise;
// // Connecting to the database
// mongoose
//   .connect(database, {
//     useNewUrlParser: true,
//     reconnectTries: Number.MAX_SAFE_INTEGER,
//     reconnectInterval: 1000,
//     poolSize: 5,
//     socketTimeoutMS: 45000,
//     autoReconnect: true
//   })
//   .then(() => {
//     console.log("Successfully connected to the database!");
//   })
//   .catch(err => {
//     console.log(err, "Could not connect to the database. Exiting now...");
//     process.exit();
//   });
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// define a simple route

app.get("/app", function (req, res) {
  res.json({
    message: "Welcome to Mock Weather Forcast."
  });
}); // Use Routes

app.use("/api/v1", _api["default"]); // Serve as static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(_express["default"]["static"]("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(_path["default"].resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function (req, res, next) {
  var error = new Error("Not found!");
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: "Weather Forcast API says ".concat(error.message)
    }
  });
  next();
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map