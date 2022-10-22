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

// // 
// window.addEventListener("scroll", () => {
//   let menuNav = document.querySelector(".navigations")
//    let currentScroll = window.pageXOffset;
//   //  currentScroll tracks the page scroll level
//   if (currentScroll >= 300) {
//     menuNav.classList.add("hide-show-nav")
//   } else {
//     menuNav.classList.remove("hide-show-nav")
//   }
// })
