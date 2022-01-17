let treatmentImg = document.querySelector(".treatment-image");
let treatmentTltip = document.querySelector(".treatment-tooltip");

treatmentImg.addEventListener('mouseover', function() {
    treatmentTltip.style.display = "unset";
});

treatmentImg.addEventListener('mouseout', function() {
    treatmentTltip.style.display = "none";
});


// document.querySelector('.button-hider').addEventListener('click', function () {
//     document.querySelector('.pseudo-parent').classList.toggle('hide-before');
// });