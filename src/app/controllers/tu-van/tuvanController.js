class TuvanController {
  // [Get] /news
  index(req, res) {
    res.render("partials/tu-van/", { title: "Tư vấn" });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new TuvanController();
