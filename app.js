var express = require("express");
const app = express();
var router = express.Router();
// import pageRouter from "../routers/pages";

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/layouts/client/index.html");
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Ban dag chay du an tai dia chi: http://%s:%s", host, port);
});
