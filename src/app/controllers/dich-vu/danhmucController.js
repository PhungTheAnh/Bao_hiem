class DanhmucController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dich-vu/danh-muc", { title: "Danh mục" });
  }
  // [GET] /news/:slug
  slug(req, res) {
    res.render("partials/dich-vu/danh-muc", { title: "Danh mục" });
  }
}

module.exports = new DanhmucController();
