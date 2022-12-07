const a = document.querySelectorAll(".label");

function myfunction(index) {
  a[index].classList.add("label-focus");
}

function myfunction1(index, e) {
  console.log(e);
  if (!e.value) {
    a[index].classList.remove("label-focus");
  }
}
