// import dependencies
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import session from "express-session";
import redis from "redis";
const redisClient = redis.createClient({
  host: "redis"
});
const redisStore = require("connect-redis")(session);

// import routes
import api from "./api";

dotenv.config();

const app = express();
redisClient.on("error", err => {
  console.log("Redis error: ", err);
});

// Start a session; we use Redis for the session store.
// "secret" will be used to create the session ID hash (the cookie id and the redis key value)
// "name" will show up as your cookie name in the browser
// "cookie" is provided by default; you can add it to add additional personalized options
// The "store" ttl is the expiration time for each Redis session ID, in seconds
app.use(
  session({
    secret: "ThisIsHowYouUseRedisSessionStorage",
    name: "_redis",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
    store: new redisStore({
      host: "localhost",
      port: 6379,
      client: redisClient,
      ttl: 2000
    })
  })
);

// app.use(cookieParser());
// app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

const database = process.env.DB_HOST;

// Configuring the database
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(database, {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_SAFE_INTEGER,
    reconnectInterval: 1000,
    poolSize: 5,
    socketTimeoutMS: 45000,
    autoReconnect: true
  })
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch(err => {
    console.log(err, "Could not connect to the database. Exiting now...");
    process.exit();
  });

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mock Premier Fixtures." });
});

// modify request object
app.use((req, res, next) => {
  res.locals.userId = 0.0;
  res.locals.userType = "anonymous";
  res.locals.role = "";
  next();
});

// Use Routes
app.use("/api/v1", api);

app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: `Mock premier league API says ${error.message}`
    }
  });
  next();
});

export default app;
