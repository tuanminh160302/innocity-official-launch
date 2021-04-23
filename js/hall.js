window.onload = () => {
    setTimeout(() => {
        gsap.to('#awards-svg path:nth-child(1)', 8, {strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(2)', 2, {delay: .3, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(3)', 2, {delay: .6, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(4)', 2, {delay: .9, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(5)', 2, {delay: 1.2, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(6)', 2, {delay: 1.5, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(7)', 2, {delay: 1.8, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(8)', 2, {delay: 2.5, strokeDashoffset: 0})
        gsap.to('#awards-svg path:nth-child(9)', 6, {delay: 1.6, strokeDashoffset: 0})
        
        gsap.to('#awards-svg', .5, {delay: 3, fill: 'white'})
        gsap.to('.fade-in', .9, { delay: 3, y: 0, opacity: 1, ease: 'power4.inOut'})
    }, 500)
}

var sceneParallax = document.querySelector('.portal-con');
var parallaxInstance = new Parallax(sceneParallax, {
    relativeInput: true
});

var sceneParallax = document.querySelector('.grave-con');
var parallaxInstance = new Parallax(sceneParallax, {
    relativeInput: true
});

var sceneParallax = document.querySelector('.star-con');
var parallaxInstance = new Parallax(sceneParallax, {
    relativeInput: true
});