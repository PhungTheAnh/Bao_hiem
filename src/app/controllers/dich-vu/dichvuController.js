class DichVuController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dich-vu/", { title: "Dịch vụ" });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new DichVuController();
