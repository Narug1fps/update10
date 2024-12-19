import express from "express";
import bodyParser from "body-parser";
import newsRouter from "./routes/news.router.js";
import userRouter from "./routes/user.router.js"
import indexRouter from "./routes/index.router.js"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;



mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Banco de dados conectado com sucesso!!"); // Log successful database connection
    // Start server on specified port
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta: ${PORT}`); // Log server running message
    });
  })
  .catch((error) => console.log(error));



app.use(cors())

app.use(bodyParser.json());

app.use("/api", indexRouter)
app.use("/api/news", newsRouter)
app.use("/api/user", userRouter)

