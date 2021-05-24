import "module-alias/register";
import path from "path";
import dotenv from "dotenv";

if (process.env.EXEC_MODE !== "docker") {
  dotenv.config({ path: path.resolve(process.cwd(), "development.env") });
}
// [TODO]: Remove sample code
import { logger } from "@util/logger";
logger.info({ message: "Hello World" });
