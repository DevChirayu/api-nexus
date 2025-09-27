import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .disable("etag")
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.get("/health", (req: any, res: any) => {
    res.json({ ok: true, env: config.env });
  });

  return app;
};
