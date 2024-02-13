function includeHTML() {
 var z, i, elmnt, file, xhttp;
 /* Loop through a collection of all HTML elements: */
 z = document.getElementsByTagName("*");
 for (i = 0; i < z.length; i++) {
   elmnt = z[i];
   /*search for elements with a certain atrribute:*/
   file = elmnt.getAttribute("w3-include-html");
   if (file) {
     /* Make an HTTP request using the attribute value as the file name: */
     xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4) {
         if (this.status == 200) {elmnt.innerHTML = this.responseText;}
         if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
         /* Remove the attribute, and call this function once more: */
         elmnt.removeAttribute("w3-include-html");
         includeHTML();
       }
     }
     xhttp.open("GET", file, true);
     xhttp.send();
     /* Exit the function: */
     return;
   }
 }
}
includeHTML();

setTimeout(()=>{
  const mobileNavbar = document.querySelector(".mobile--nav");
  const desktopNavbar = document.querySelector(".desktop--nav");
  const menuArea = document.querySelector(".menu--area");
  const menuBtn = document.querySelector(".menu--btn");
  const menuCloseBtn = document.querySelector(".menu--close-btn");
  const discountLink = document.querySelector(".discount--link");

  menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menuArea.style.transform = "translateX(0)";
    menuArea.style.opacity = "1";
  });
  menuCloseBtn.addEventListener("click", function (e) {
    e.preventDefault();
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

},1000);
