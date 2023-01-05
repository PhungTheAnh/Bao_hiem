class BaoGiaController {
  // [Get] /news
  index(req, res) {
    res.render("partials/bao-gia/", { title: "Báo giá" });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new BaoGiaController();
