document.querySelector('.landing-preloader-end').addEventListener('click', () => {
    gsap.to('.landing-preloader-end', .3, { opacity: 0})
    gsap.to('.landing-preloader-end', 0, { delay: .3, display: 'none'})
    gsap.to('.landing-preloader', .9, { scale: .6, ease:'power4.inOut'})
    gsap.to('.landing-preloader', 1.2, { delay: .65, y: '-100vh', ease:'power4.inOut'})
    gsap.to('.landing-preloader', 0, { delay: 1.9, display: 'none'})

    gsap.to('.container', 1.2, { delay: .65, y: '0', ease:'power4.inOut'})
    gsap.to('.container', .9, { delay: 1.3, scale: 1, ease:'power4.inOut'})
    gsap.to('#menu', .3, { delay: 1.5, opacity: 1})
    gsap.to('html', 0, {delay: 2.2, backgroundColor: '#171223'})
    gsap.to('body', 0, {delay: 2.2, backgroundColor: '#171223'})
})

var sceneParallax = document.querySelector('.landing-1-svg-container');
var parallaxInstance = new Parallax(sceneParallax, {
    relativeInput: true
});


for (let i=0; i<2; i++) {
    document.querySelectorAll('.contact-trigger')[i].addEventListener('click', () => {
        gsap.to('.shortlink-rect', .2, {opacity: 0})
        setTimeout(() => {
            document.getElementById('city-square').style.display = 'none'
            document.getElementById('city-hall').style.display = 'none'
            document.getElementById('library').style.display = 'none'
            document.getElementById('museum').style.display = 'none'
            document.getElementById('contact').style.display = 'block'
        }, 200)
        gsap.to('.shortlink-rect', .2, {delay: .25, opacity: 1})
    })
}
for (let i=0; i<2; i++) {
    document.querySelectorAll('.cityhall-trigger')[i].addEventListener('click', () => {
        gsap.to('.shortlink-rect', .2, {opacity: 0})
        setTimeout(() => {
            document.getElementById('city-square').style.display = 'none'
            document.getElementById('city-hall').style.display = 'block'
            document.getElementById('library').style.display = 'none'
            document.getElementById('museum').style.display = 'none'
            document.getElementById('contact').style.display = 'none'
        }, 200)
        gsap.to('.shortlink-rect', .2, {delay: .25, opacity: 1})
    })
}

for (let i=0; i<2; i++) {
    document.querySelectorAll('.library-trigger')[i].addEventListener('click', () => {
        gsap.to('.shortlink-rect', .2, {opacity: 0})
        setTimeout(() => {
            document.getElementById('city-square').style.display = 'none'
            document.getElementById('city-hall').style.display = 'none'
            document.getElementById('library').style.display = 'block'
            document.getElementById('museum').style.display = 'none'
            document.getElementById('contact').style.display = 'none'
        }, 200)
        gsap.to('.shortlink-rect', .2, {delay: .25, opacity: 1})
    })
}

for (let i=0; i<2; i++) {
    document.querySelectorAll('.museum-trigger')[i].addEventListener('click', () => {
        gsap.to('.shortlink-rect', .2, {opacity: 0})
        setTimeout(() => {
            document.getElementById('city-square').style.display = 'none'
            document.getElementById('city-hall').style.display = 'none'
            document.getElementById('library').style.display = 'none'
            document.getElementById('museum').style.display = 'block'
            document.getElementById('contact').style.display = 'none'
        }, 200)
        gsap.to('.shortlink-rect', .2, {delay: .25, opacity: 1})
    })
}

for (let i=0; i<3; i++) {
    document.querySelectorAll('.citysquare-trigger')[i].addEventListener('click', () => {
        gsap.to('.shortlink-rect', .2, {opacity: 0})
        setTimeout(() => {
            document.getElementById('city-square').style.display = 'block'
            document.getElementById('city-hall').style.display = 'none'
            document.getElementById('library').style.display = 'none'
            document.getElementById('museum').style.display = 'none'
            document.getElementById('contact').style.display = 'none'
        }, 200)
        gsap.to('.shortlink-rect', .2, {delay: .25, opacity: 1})
    })
}