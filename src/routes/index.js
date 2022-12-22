const homeRouter = require("./home");
const loginRouter = require("./login");
const baogiaRouter = require("./bao-gia");

function route(app) {
  app.use("/bao-gia", baogiaRouter);
  app.use("/dang-nhap", loginRouter);
  app.use("", homeRouter);

  // app.get("/bao-gia", function (req, res) {
  //   res.render("partials/bao-gia/bao-gia");
  // });

  // app.get("/", function (req, res) {
  //   res.render("partials/page/home");
  // });

  // app.get("/dang-nhap", function (req, res) {
  //   res.render("partials/dang-nhap/login");
  // });
}
module.exports = route;
