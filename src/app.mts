import express, { Express, Request, Response } from "express";
import "./db/connection.mjs";
import cors from "cors";
import { apiRouter } from "./routes/api.router.mjs";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.all("*", (_: Request, res: Response) => {
  res.status(404).send({ success: false, message: "Not found" });
});

export default app;