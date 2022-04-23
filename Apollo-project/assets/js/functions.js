
$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}
window.addEventListener('DOMContentLoaded', (event) => {

function smoothScroll(){
// Faire la fonction ici
}

window.addEventListener('DOMContentLoaded', (event) => {

let slides = document.getElementsByClassName("banner");
let navlinks = document.getElementsByClassName("slider_navlink");
let imageActive = 0;

document.getElementsByClassName('.icon-chevron-thin-right next').addEventListener('click', () => {
	changerSlide(imageActive +1)
});
document.getElementsByClassName('.icon-chevron-thin-left prev').addEventListener('click', () => {
	changerSlide(imageActive -1)
});

function changerSlide(moveTo){
	if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}

	slides[imageActive].classList.toggle("active");
    navlinks[imageActive].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");

	imageActive = moveTo;
}
})

//fullSlider();
nav();

smoothScroll();

});
})