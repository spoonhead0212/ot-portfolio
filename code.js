//  change menu icon class
 function myFunction(x) {
  x.classList.toggle("change");
 }

// navigation appearance on mobile

let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  let menuDiv = document.querySelector(".navvy");
  menuDiv.classList.toggle("hamburger-show")
})

let menuWrap = document.querySelector(".navigations");
// the whole menu is wrapped in here
let topScroll = 0;
// this is the page scroll pixel
window.addEventListener("scroll", () => {

   if (topScroll < window.scrollY) {
    menuWrap.classList.add("scroll-switch");
   } else {
    menuWrap.classList.remove("scroll-switch");
   }

   topScroll = window.scrollY;
})

