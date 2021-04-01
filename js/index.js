document.querySelector('.landing-preloader-end').addEventListener('click', () => {
    gsap.to('.landing-preloader-end', .3, { opacity: 0})
    gsap.to('.landing-preloader-end', 0, { delay: .3, display: 'none'})
    gsap.to('.landing-preloader', .9, { scale: .6, ease:'power4.inOut'})
    gsap.to('.landing-preloader', 1.2, { delay: .65, y: '-100vh', ease:'power4.inOut'})
    gsap.to('.landing-preloader', 0, { delay: 1.9, display: 'none'})

    gsap.to('.container', 1.2, { delay: .65, y: '0', ease:'power4.inOut'})
    gsap.to('.container', .9, { delay: 1.3, scale: 1, ease:'power4.inOut'})
    gsap.to('#menu', .3, { delay: 1.5, opacity: 1})
})