function myFunction(x) {
  x.classList.toggle("change");
}


let hamburgerMenu = document.querySelector(".hamburger-menu");
let menuDiv = document.querySelector(".navvy");
hamburgerMenu.addEventListener("click", () => {
  menuDiv.classList.toggle("hamburger-show")
})
