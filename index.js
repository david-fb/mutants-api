const { config } = require("./config");
const express = require("express");
const app = express();
const PORT = config.port;
const routerApi = require("./routes");
const sequelize = require("./libs/sequelize");

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
  res.send("Hello world");
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
