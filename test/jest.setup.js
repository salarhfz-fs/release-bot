if (process.env.EXEC_MODE !== "docker") {
  const path = require("path");
  require("dotenv").config({ path: path.resolve(process.cwd(), "test.env") });
}
