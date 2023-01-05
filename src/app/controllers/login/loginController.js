const con = require("../../../../connect");

class LoginController {
  // [Get] /news

  index(req, res) {
    res.render("partials/dang-nhap/login", { title: "Đăng nhập" });
  }
  login(req, res) {
    con.query(
      "SELECT * FROM users WHERE email='" +
        req.query.email +
        "' and password='" +
        req.query.password +
        "'",
      function (err, result) {
        if (err) throw res.send({ user: err });
        res.send({ user: result });
      }
    );
  }
}

module.exports = new LoginController();
