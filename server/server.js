const express = require("express");
const app = express();

const apiRouter = require("./routes/apiRouter");

const PORT = 3000;

app.use(express.json());

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    error: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.error);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
