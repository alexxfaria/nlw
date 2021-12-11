import "reflect-metadata";
import { router } from "./routes";
import express  from "express";
import "./database";

const app = express();
const port = process.env.API_PORT

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log("Server is runnig")
});
