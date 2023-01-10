class DanhmucDetailController {
  // [Get] /news
  index(req, res) {
    res.render("partials/tu-van/danh-muc/chi-tiet", {
      title: "Tư vấn chi tiết",
    });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new DanhmucDetailController();
