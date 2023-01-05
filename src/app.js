const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const morgan = require("morgan");
const route = require("./routes/index");
const mysql = require("mysql");

// http logger
// app.use(morgan("combined"));
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
//
app.use(express.static(path.join(__dirname, "public")));
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);


app.listen(port, () =>
  console.log(`Du an dang chay tai http://localhost:${port}`)
);
