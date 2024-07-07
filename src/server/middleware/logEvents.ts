import { format } from "date-fns";
import { v4 as uuid } from "uuid";

import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logEvents = async (message: string, logName: string) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

const logger = (req: any, res: any, next: any) => {
  if (
    req.url === "/" ||
    req.url === "/home" ||
    req.url === "/contacts" ||
    req.url === "/projects"
  )
    logEvents(
      `${req.method}\t${req.headers.origin}\t${req.header("user-agent")}\t${
        req.url
      }`,
      "reqLog.txt"
    );
  next();
};

export default logger;
