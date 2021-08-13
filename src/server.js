const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;


// MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));
app.disable('x-powered-by');


// ROUTES
require("./routes/clientRoutes")(app)

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});
app.use((req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});