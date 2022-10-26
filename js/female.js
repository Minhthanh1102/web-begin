// #female-hide-mobile:checked ~ .female-opacity{
//     opacity: 0;
// }
// $("").click(function(){
//     $("female-opacity").style.background = "blue";
// //   $(this).css("background-color", "#FF7A00");
//   console.log(123)
// });

const arrows = document.querySelector("#female-arrows")
arrows.addEventListener("click",() =>{
    document.querySelector("#female-image").style.display = "none";
})