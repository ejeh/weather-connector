// import dependencies
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

// import routes
import api from "./api";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",

  credentials: true
};

app.use(cors(corsOptions));

// app.use(cookieParser());
// app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

// const database = process.env.DB_HOST;

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
app.get("/app", (req, res) => {
  res.json({ message: "Welcome to Mock Weather Forcast." });
});

// Use Routes
app.use("/api/v1", api);

// Serve as static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: `Weather Forcast API says ${error.message}`
    }
  });
  next();
});

export default app;
