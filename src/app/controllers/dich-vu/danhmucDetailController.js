class DanhmucDetailController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dich-vu/danh-muc/chi-tiet", {
      title: "Danh mục chi tiết",
    });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new DanhmucDetailController();
