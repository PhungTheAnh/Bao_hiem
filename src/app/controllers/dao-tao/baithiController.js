class BaithiController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dao-tao/luyen-thi-chung-chi/bai-thi", {
      title: "Bài thi",
    });
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new BaithiController();
