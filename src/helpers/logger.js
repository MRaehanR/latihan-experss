import winston, { format } from "winston";

const getFilename = (error) => {
  const stackArray = error.stack.split("\n");
  if (stackArray.length >= 2) {
    const stackLine = stackArray[1].trim();
    const match = stackLine.match(/\((.*):(\d+):(\d+)\)$/);
    if (match) {
      const filename = match[1];
      const line = match[2];

      return { filename, line };
    }
  }
};

export const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    format.align(),
    format.printf((error) => {
      const { filename, line } = getFilename(error);

      return `[${error.timestamp}] ${error.level}:${error.message} [${filename} (line: ${line})]`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./src/logs/error.log",
      level: "error",
    }),
  ],
});
