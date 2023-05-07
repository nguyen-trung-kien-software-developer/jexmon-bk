import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Application } from "express";

import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const port: any = process.env.PORT || 3000;

app
  .listen(port, function () {
    console.info(`Server running on : http://localhost:${port}`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("server startup error: address already in use");
    } else {
      console.log(err);
    }
  });
