
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

const nombreImage = 3
let imageActive = 1;
const slidePrec = document.querySelector('.icon-chevron-thin-left');
const slideSuiv = document.querySelector('.icon-chevron-thin-right');

function fullSlider(){
// Faire le code du slider ici
	slideSuiv.addEventListener('click', function(){
		if((imageActive * nombreImage) < 1){
			imageActive++;
		}
	})
	slidePrec.addEventListener('click', function(){
		if(imageActive > 1){
			imageActive--;
		}
	} )
}

fullSlider();
})

nav();

smoothScroll();


});
})