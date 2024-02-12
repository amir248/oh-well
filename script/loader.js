const loaderArea = document.querySelector(".loader--frame");

function loader() {
  window.addEventListener("load", function (e) {
    loaderArea.style.display = "none";
  });
}
loader();
