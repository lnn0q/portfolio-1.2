import "dotenv/config";
import express from "express";
import ViteExpress from "vite-express";

import { rateLimit } from "express-rate-limit";
import mailSend from "./mail-sender.ts";

import logger from "./middleware/logEvents.ts";

import projectsRouter from "./routes/api/projects.ts";

const PORT: any = process.env.PORT || 3000;

// Form limiter
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 3, // Limit each IP to 3 reqests per windowsMs
});

const app = express();

app.use(logger);
app.use(express.json());
app.use("/api/contact", apiRequestLimiter);
app.use("/api/projects", projectsRouter);

app.post("/api/contact", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    mailSend(data);
    res.status(200).send("Form submitted, message sent.");
  } catch (err) {
    res.status(500).send("Message wasn't sent.");
  }
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
);
