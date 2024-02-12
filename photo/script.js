// MY JS
const navbar = document.querySelector(".navbar");
const backToTop = document.querySelector(".returnBack--btn");
const blockSlider = document.querySelector(".block--slider");

function WoodenBlockSlider() {
  if (window.innerWidth < 680) {
    blockSlider.style.height = "400px";
  }
}
WoodenBlockSlider();

function scrollReveal() {
  window.addEventListener("scroll", revealItem);
  function revealItem() {
    const reveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveal[i].getBoundingClientRect().top;
      var revealPoint = 200;
      if (revealTop < windowHeight - revealPoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
}

scrollReveal();

function returnBack() {
  window.addEventListener("scroll", function (e) {
    if (
      this.document.body.scrollTop > 900 ||
      this.document.documentElement.scrollTop > 900
    ) {
      backToTop.style.filter = "opacity(1)";
      backToTop.style.transform = "translateY(0)";
    } else {
      backToTop.style.filter = "opacity(0)";
      backToTop.style.transform = "translateY(30px)";
    }
  });
  backToTop.addEventListener("click", function (e) {
    e.preventDefault;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
returnBack();

function accordianComponent() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
accordianComponent();
