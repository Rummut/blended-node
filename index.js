const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = require("./app");
const { DB_URI, PORT } = process.env;

(async () => {
  await mongoose.connect(DB_URI);
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log("Server running. Use our port: 3000");
  });
})();
