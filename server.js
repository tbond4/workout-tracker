const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });