class DanhMucController {
  // [Get] /news
  index(req, res) {
    res.render("partials/tu-van/danh-muc/", { title: "Danh mục" });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new DanhMucController();
