$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("inc.html header>nav", head);
$("footer").load("inc.html footer>div", foot);

function head() {
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

  const heBtn = document.querySelector(".header_menu_btn");
  const haMenu = document.querySelector(".ham_menu");
  const haText = document.querySelector(".ham_text");
  const haList = document.querySelector(".ham_list");
  const haButn = document.querySelector(".ham_button");

  heBtn.onclick = function () {
    haMenu.classList.toggle("heon");
    haText.classList.toggle("ton");
    haList.classList.toggle("hlon");
    haButn.classList.toggle("bon");
  };

  let idx = localStorage.idx;
  $(".header_menu_bar li").removeClass("active");

  $(".header_menu_bar li").eq(idx).addClass("active");

  $(".header_menu_bar li").on("click", function () {
    idx = $(this).index();
    localStorage.idx = idx;
  });
}

function foot() {
  const ulBtn = document.querySelector(".text_icon");
  const ulList = document.querySelector(".button_list");
  const iCon = document.querySelector(".text_icon i");

  ulBtn.onclick = function () {
    ulList.classList.toggle("on");
    iCon.classList.toggle("ion");
  };
}
