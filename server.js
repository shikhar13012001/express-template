require("dotenv").config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const ErrorMiddleware = require("./middlewares/Error");
const testRouter = require("./routers/test.routes");
const authRouter = require("./routers/auth.routes");
const userRouter = require("./routers/user.routes");
const orderRouter = require("./routers/order.routes");
const courseRouter = require("./routers/course.routes");
const contactRouter = require("./routers/contact.routes");
const app = express();
const connectToDb = require("./config/db");
const cors = require("cors");

// uncaught exception
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Server shutting down due to uncaught exception`);
  process.exit(1);
});

// unhandled promise rejection
process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Server shutting down due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});

app.use(express.json());
app.use(
  cors({
    origin: [/netlify\.app$/, /localhost:\d{4}$/],
    credentials: true,
  })
);
app.use(express.json({ limit: "20mb" }));

// connect to db
connectToDb();

// ROUTES

app.get("/", (req, res, next) => {
  return res.status(200).send("API service running 🚀");
});

app.use("/api/v1/test", testRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/contact", contactRouter);

// error middleware

app.use(ErrorMiddleware);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
