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
