class HomeController {
  // [Get] /news
  index(req, res) {
    res.render("partials/page/home");
  }
}

module.exports = new HomeController();

// const homeController = require('')
