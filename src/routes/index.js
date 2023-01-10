// Home
const homeRouter = require("./layout/home");
// tin-tuc
const tintucRouter = require("./tin-tuc/tin-tuc");
// tu-van
const tuvanRouter = require("./tu-van/tu-van");
const danhmuc1Router = require("./tu-van/danh-muc");
const danhmuc1DetailRouter = require("./tu-van/danh-muc-detail");
// dich-vu
const dichvuRouter = require("./dich-vu/dich-vu");
const danhmucRouter = require("./dich-vu/danh-muc");
const danhmucDetailRouter = require("./dich-vu/danh-muc-detail");
// bao-gia
const baogiaRouter = require("./bao-gia/bao-gia");
// login
const loginRouter = require("./login/login");
const forgotPwRouter = require("./login/forgotPw");
const newPwRouter = require("./login/newPw");
const otpRouter = require("./login/otp");
// dao-tao
const daotaoRouter = require("./dao-tao/dao-tao");
const giangvienRouter = require("./dao-tao/giang-vien");
const giangvienDetailRouter = require("./dao-tao/giang-vien-detail");
const khoahocRouter = require("./dao-tao/khoa-hoc");
const khoahocDetailRouter = require("./dao-tao/khoa-hoc-detail");
const lichthiRouter = require("./dao-tao/lich-thi");
const lichthiDetailRouter = require("./dao-tao/lich-thi-detail");
const lienheRouter = require("./dao-tao/lien-he");
const luyenthiRouter = require("./dao-tao/luyen-thi");
const luyenthiAllRouter = require("./dao-tao/luyen-thi-all");
const baithiRouter = require("./dao-tao/bai-thi");
const kqbaithiRouter = require("./dao-tao/kq-bai-thi");

function route(app) {
  // tin-tuc
  app.use("/tin-tuc", tintucRouter);
  // tu-van
  app.use("/tu-van", tuvanRouter);
  app.use("/tu-van-danh-muc", danhmuc1Router);
  app.use("/tu-van-danh-muc-chi-tiet", danhmuc1DetailRouter);
  // dich-vu
  app.use("/dich-vu", dichvuRouter);
  app.use("/dich-vu-danh-muc", danhmucRouter);
  app.use("/dich-vu-danh-muc-chi-tiet", danhmucDetailRouter);
  // bao-gia
  app.use("/bao-gia", baogiaRouter);
  // login
  app.use("/dang-nhap", loginRouter);
  app.use("/quen-mat-khau", forgotPwRouter);
  app.use("/mat-khau-moi", newPwRouter);
  app.use("/otp", otpRouter);
  // dao-tao
  app.use("/dao-tao", daotaoRouter);
  app.use("/giang-vien", giangvienRouter);
  app.use("/giang-vien-chi-tiet", giangvienDetailRouter);
  app.use("/khoa-hoc", khoahocRouter);
  app.use("/khoa-hoc-chi-tiet", khoahocDetailRouter);
  app.use("/lich-thi", lichthiRouter);
  app.use("/lich-thi-chi-tiet", lichthiDetailRouter);
  app.use("/lien-he", lienheRouter);
  app.use("/luyen-thi", luyenthiRouter);
  app.use("/luyen-thi-tat-ca", luyenthiAllRouter);
  app.use("/bai-thi", baithiRouter);
  app.use("/ket-qua-bai-thi", kqbaithiRouter);
  // home
  app.use("", homeRouter);
}
module.exports = route;
