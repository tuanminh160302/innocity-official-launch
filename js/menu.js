$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('open');
	});
});

var menuClick = 0
document.querySelector('#menu').addEventListener('click', () => {
    menuClick = 1 - menuClick
    if (menuClick === 1) {
        gsap.to('.menu-container', 1.1, { scaleX: 1, ease:'power4.inOut'})
    } else if (menuClick === 0) {
        gsap.to('.menu-container', 1.1, { scaleX: 0, ease:'power4.inOut'})
    }
})
