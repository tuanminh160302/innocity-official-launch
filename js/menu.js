$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('open');
	});
});

var menuClick = 0
document.querySelector('#menu').addEventListener('click', () => {
    menuClick = 1 - menuClick
    if (menuClick === 1) {
        gsap.to('.menu-container', .9, { scaleX: 1, ease:'power4.inOut'})
        gsap.to('.menu-nav-li', .5, { delay: .7, x: '0', ease: 'power4.easeInOut'})
        gsap.to('.menu-nav-li', .3, { delay: .7, opacity: 1})
        gsap.to('.language', .3, { delay: .7, opacity: 1})
        gsap.to('html, body', 0, { overflowY: 'hidden'})
        gsap.to('.container', 0.7, { webkitFilter: 'blur(5px)'})
    } else if (menuClick === 0) {
        gsap.to('.menu-container', .9, { delay: .3, scaleX: 0, ease:'power4.inOut'})
        gsap.to('.menu-nav-li', 0, { delay: .3, x: '-5vw', ease: 'power4.easeInOut'})
        gsap.to('.menu-nav-li', .3, { opacity: 0})
        gsap.to('html, body', 0, { delay: 1.2, overflowY: 'auto'})
        gsap.to('.container', 0.7, { delay: 0.9, webkitFilter: 'blur(0px)'})
        gsap.to('.language', .3, { opacity: 0})
    }
})

var language = 'vn'

document.getElementById('vn').addEventListener('click', () => {
    language = 'vn'
    console.log(language)
    setTimeout(() => {
        document.location.href = 'index'
    })
})

document.getElementById('eng').addEventListener('click', () => {
    language = 'eng'
    console.log(language)
    setTimeout(() => {
        document.location.href = 'eng-index'
    })
})

document.querySelector('#logo').addEventListener('click', () => {
    console.log(language)
    // if (language === 'vn') {
    //     document.location.href = 'index'
    // } else if (language === 'eng') {
    //     document.location.href = 'eng-index'
    // }
})

screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
