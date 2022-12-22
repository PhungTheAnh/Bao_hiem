class BaoGiaController {
  // [Get] /news
  index(req, res) {
    res.render("partials/bao-gia/bao-gia");
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new BaoGiaController();
