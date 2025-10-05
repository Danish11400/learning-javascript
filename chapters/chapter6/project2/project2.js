"use strict;";
const openBtn = document.querySelectorAll(".show-model");
const hiddenDiv = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const addinghidden = function () {
  hiddenDiv.classList.add("hidden");
  overlay.classList.add("hidden");
};
const removeHidden = function () {
  hiddenDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function () {
    removeHidden();
  });
}
const showNow = document.querySelector(".cross-btn");
showNow.addEventListener("click", function () {
  addinghidden();
});
document.addEventListener("keydown", function (hi) {
  if (hi.key === "Escape") {
    if (!hiddenDiv.classList.contains("hidden")) {
      addinghidden();
    }
  }
});
