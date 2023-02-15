$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("inc.html header", head);
$("footer").load("inc.html footer", foot);

function head() {
  let header = document.querySelector("header");
  let headerHeight = header.offsetHeight;
  /*  */
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
  const heBtn = document.querySelector(".header_menu_btn");
  const haMenu = document.querySelector(".ham_menu");
  const haText = document.querySelector(".ham_text");
  const haList = document.querySelector(".ham_list");
  const haButn = document.querySelector(".ham_button");
  const bOdy = document.querySelector("body");
  let tan = document.querySelector(".top_line");
  let ban = document.querySelector(".bottom_line");

  heBtn.onclick = function () {
    haMenu.classList.toggle("heon");
    haText.classList.toggle("ton");
    haList.classList.toggle("hlon");
    haButn.classList.toggle("bon");
    bOdy.classList.toggle("oa");
    tan.classList.toggle("tln");
    ban.classList.toggle("bln");
  };
  /* ham */
  let idx = localStorage.idx;
  $(".header_menu_bar li").removeClass("active");

  $(".header_menu_bar li").eq(idx).addClass("active");

  $(".header_menu_bar li").on("click", function () {
    idx = $(this).index();
    localStorage.idx = idx;
  });
  localStorage.clear();
}
/* localStorage */
function foot() {
  const ulBtn = document.querySelector(".footer_button");
  const ulList = document.querySelector(".button_list");
  const iCon = document.querySelector(".text_icon i");

  ulBtn.onclick = function () {
    ulList.classList.toggle("on");
    iCon.classList.toggle("ion");
  };
}
/* foot */

const liBtn = document.querySelectorAll(".container_list_box li");
const sPan = document.querySelectorAll(".container_list_box li span");
const pTag = document.querySelectorAll(".container_list_box li p");
const iMg = document.querySelectorAll(".container_list_box li img");
const conTent = document.querySelectorAll(".bg_box > div");
let ldx = 0;
let bdx = 0;
liBtn.forEach(function (li, key) {
  li.addEventListener("click", function () {
    liBtn[bdx].classList.remove("act");
    sPan[bdx].classList.remove("act");
    pTag[bdx].classList.remove("act");
    iMg[bdx].classList.remove("act");

    liBtn[key].classList.add("act");
    sPan[key].classList.add("act");
    pTag[key].classList.add("act");
    iMg[key].classList.add("act");
    bdx = key;
    conTent.forEach(function (co, ckey) {
      conTent[ldx].classList.remove("bgt");

      conTent[key].classList.add("bgt");

      ldx = key;
      window.scrollTo({
        left: 0,
        top: conTent[key].offsetTop,
        behavior: "smooth",
      });
    });
  });
});
conTent[0].classList.add("bgt");
