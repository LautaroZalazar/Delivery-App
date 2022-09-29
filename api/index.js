import "dotenv/config";
import mongoose from "mongoose";
import Express from "express";
import Cors from "cors";
import morgan from "morgan";
import route from "./src/index.js";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const app = Express();

// Controladores y dependencias.
app.use(Cors());
app.use(morgan("dev"));
app.use(Express.json({ limit: "50mb" }));
app.use(Express.urlencoded({ extended: true, limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Route
app.use("/", route);

// Coneccion.

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@delivery-app.5p0es0n.mongodb.net/?retryWrites=true&w=majority`,
    {
      // useCreateIndex: true,
      // useFindAndModify: false,
      useNewUrlParser: true,
    }
  )
  .then((db) => console.log("conexion exitosa"))
  .catch((err) => console.log("error: ", err));

// Levanto el servidor a usar.
const server = app.listen(`${DB_HOST}`, () =>
  console.log(`Listening at port: ${DB_HOST}` )
);

server.on("error", (e) => {
  console.log("server error");
});
