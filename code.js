function myFunction(x) {
  x.classList.toggle("change");
}

// $(document).ready(function(){
//       $(".hamburger-menu").click(function(){
//         $(".navvy").slideToggle(500);
//     });
// });


let hamburgerMenu = document.querySelector(".hamburger-menu");
let menuDiv = document.querySelector(".navvy");
hamburgerMenu.addEventListener("click", () => {
  menuDiv.classList.toggle("hamburger-show")
})
