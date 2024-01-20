const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

dotenv.config();

const connectDB = require("./src/services/mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

const userRouter = require("./src/routes/user");
const authRouter = require("./src/routes/auth");
const resourceRouter = require("./src/routes/resources");
const adminRouter = require("./src/routes/admin");

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/resources", resourceRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
