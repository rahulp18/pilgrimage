import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/post.js";
import userRouter from "./routes/user.js";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const connectDatabase = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DataBase connected");
  } catch (error) {
    console.log(error);
  }
};

// Routes
app.use("/api/users", authRouter);
app.use("/api/post", postRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;
const StartServer = () => {
  connectDatabase(process.env.MONGO_URI);
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

StartServer();
