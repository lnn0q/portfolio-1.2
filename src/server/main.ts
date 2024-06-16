import express from "express";
import ViteExpress from "vite-express";

const app = express();

const PORT: any = process.env.PORT || 3000;

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000...")
);
