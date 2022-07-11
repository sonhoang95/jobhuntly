import express from "express";
const app = express();

// env
import dotenv from "dotenv";
dotenv.config();

// logger
import morgan from "morgan";

// db
import connectDB from "./db/connect.js";

// middleware
import NotFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/authenticate.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Welcome from API" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", authenticateUser, jobsRoutes);

app.use(NotFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
