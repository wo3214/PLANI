const ulBtn = document.querySelector(".text_icon");
const ulList = document.querySelector(".button_list");
const iCon = document.querySelector(".text_icon i");

ulBtn.onclick = function () {
  ulList.classList.toggle("on");
  iCon.classList.toggle("ion");
};
