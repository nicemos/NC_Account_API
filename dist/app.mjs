import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/api.router.mjs";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.all("*", (_, res) => {
    res.status(404).send({ success: false, msg: "Not found" });
});
export default app;
