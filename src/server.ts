import express, { Application } from "express";
import { environment } from "./config";
const app: Application = express();
const port = environment.port;

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
  