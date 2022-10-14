function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function(){
      $(".hamburger-menu").click(function(){
        $(".navvy").slideToggle(500);
    });
});


let toggle = document.querySelector("#switch");
toggle.addEventListener("click", () => {
  let colorMode = document.body;
  colorMode.classList.toggle("whiteBg");
})
