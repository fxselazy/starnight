const express = require("express");
const app = express();
const mongoose = require("mongoose");

const config = require("./src/config/config");
const routes = require("./src/routes/routes");

const port = config.PORT || 3000;

// connect db
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log("server is running on port: ", port);
});