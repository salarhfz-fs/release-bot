import fs from "fs";
import pino from "pino";
import path from "path";

const getLogDestinationStream = (): pino.DestinationStream => {
  if (process.env.NODE_ENV === "development" && process.env.LOG_FILE) {
    const log_dir = path.resolve(process.cwd() + process.env.LOG_FILE);
    const log_path = log_dir + "/dev.log";
    fs.mkdirSync(log_dir, {
      recursive: true,
    });
    fs.closeSync(fs.openSync(log_path, "w"));
    return pino.destination(log_path);
  }
  return process.stdout;
};

export const logger = pino(
  {
    name: process.env.APP_NAME,
    level: process.env.LOG_LEVEL,
    ...(process.env.NODE_ENV === "development" && {
      prettyPrint: {
        colorize: true,
        translateTime: true,
      },
    }),
  },
  getLogDestinationStream()
);
