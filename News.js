let header = document.querySelector("header");
let cf = document.querySelectorAll("a");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.style.zIndex = "999";
    header.classList.add("drop");
    header.style.backgroundColor = "white";
    cf.style.color = "black";
  } else {
    header.classList.remove("drop");
    header.style.backgroundColor = "pink";
  }
};
