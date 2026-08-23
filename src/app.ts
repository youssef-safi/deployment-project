import express from "express";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json("200 OK version 2.0.0");
});

export default app;
