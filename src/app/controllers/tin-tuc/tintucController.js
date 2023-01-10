class TintucController {
  // [Get] /news
  index(req, res) {
    res.render("partials/tin-tuc-kien-thuc/tin-tuc/", { title: "Tin tức" });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new TintucController();
