const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./src/routes/auth.routes.js");
const Templates = require("./src/routes/templates.routes.js");
const verifyToken = require("./src/middleware/authJWT.middleware.js");

mongoose.connect("mongodb://localhost:27017/cv_generator_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors({ credentials: true, origin: true }));

//parse requests content type

app.use(express.json());
//parse request of content-type
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/auth", userRoutes);
app.use('/templates', verifyToken, Templates)
// setup server to listen on port 3000
app.listen(3000, () => {
  console.log("server started " + 3000);
});
