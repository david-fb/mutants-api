const { config } = require("./config");
const express = require("express");
const app = express();
const PORT = config.port;
const routerApi = require("./routes");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/errorHandler");

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Mutants Api");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
