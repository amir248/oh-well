const mobileNavbar = document.querySelector(".mobile--nav");
const desktopNavbar = document.querySelector(".desktop--nav");
const menuArea = document.querySelector(".menu--area");
const menuBtn = document.querySelector(".menu--btn");
const menuCloseBtn = document.querySelector(".menu--close-btn");
const discountLink = document.querySelector(".discount--link");

menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("CLICK");
  menuArea.style.transform = "translateX(0)";
  menuArea.style.opacity = "1";
});
menuCloseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("CLICK");
  menuArea.style.transform = "translateX(-110%)";
  menuArea.style.opacity = "0";
});
discountLink.addEventListener("click", function (e) {
  e.preventDefault();
  menuArea.style.transform = "translateX(-110%)";
  menuArea.style.opacity = "0";
  document
    .getElementById("discountsAndPromotions")
    .scrollIntoView({ behavior: "smooth" });
});
