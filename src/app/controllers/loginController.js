class LoginController {
  // [Get] /news
  index(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "index.htm");
  }
}

module.exports = new LoginController();
