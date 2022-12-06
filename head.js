let header = document.querySelector("header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.style.zIndex = "999";
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};
/* header */
