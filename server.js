const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cors());
app.use("/api", require("./routes/user.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
