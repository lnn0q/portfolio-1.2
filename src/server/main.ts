import "dotenv/config";
import express from "express";
import ViteExpress from "vite-express";

import https from "https";

import { rateLimit } from "express-rate-limit";

import mailSend from "./mail-sender.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const httpsOptions = {
  // Path to your SSL certificate file
  //1  cert: fs.readFileSync("/etc/letsencrypt/live/lnn0q.dev/fullchain.pem"),
  //cert: fs.readFileSync(path.join(__dirname, "certs", "cert.crt")),
  // Path to your SSL private key file
  //1  key: fs.readFileSync("/etc/letsencrypt/live/lnn0q.dev/privkey.pem"),
  //key: fs.readFileSync(path.join(__dirname, "certs", "cert.key")),
};

const PORT: any = process.env.PORT || 3000;

// Form limiter
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 2 reqests per windowsMs
});

const app = express();

app.use(express.json());

app.use("/api/contact", apiRequestLimiter);

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
  console.log("Server is listening on port 3000...")
);

//const server = https.createServer(httpsOptions, app).listen(PORT, () => {
//  console.log(`Server is listening on port ${PORT}...`);
//});

//ViteExpress.bind(app, server);
