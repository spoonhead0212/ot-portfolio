$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(".navvy").toggle(500);
    });
});
//.hide() is the syntax used to hide element

// $(document).ready(function(){  //allows all documents to load before actions
//     $("#name").click(function(){  //targeting the selector 
//       $(this).hide();  // what to do the the selector
//     });
//   });

// $(document).ready(function(){
//     $("#name").dblclick(function(){
//         $(this).hide();
//     })
// })
// hides element on double click

// $(document).ready(function(){
//     $("#name").mouseenter(function(){
//         alert("who dey waba?");
//     })
// })
//alert you when u hover the selected element

// $(document).ready(function(){
//     $("#name").mouseleave(function(){
//         alert("who dey waba?");
//     })
// })
//alert you when you leave the selected element

// $(document).ready(function(){
//     $("#name").mousedown(function(){
//         alert("you held down the mouse on me")
//     })
// })
// alerts you when a mouse is held down on the element

// $(document).ready(function(){
//     $("#name").hover(function(){
//         alert('we love you tech bro!');
//     },
//     function(){
//         alert("goodbye tech bro")
//     })
// })
