import "reflect-metadata";
import { router } from "./routes";
import express, { Request, Response, NextFunction }  from "express";
import "./database";
import "express-async-errors";

const app = express();
const port = process.env.API_PORT

app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response:Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      error:err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
})
app.listen(port, () => {
  console.log("Server is runnig")
});
