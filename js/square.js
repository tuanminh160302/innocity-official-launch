var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//     triggerElement: '#awards-svg',
//     triggerHook: 0.5,
//     reverse: true
// })
// // scene.addIndicators();

// scene.setTween('#comp-svg', .5, { y: 0, opacity: 1});
// scene.addTo(controller);

// window.onload = () => {
//     setTimeout(() => {
//         gsap.to('#awards-svg path:nth-child(1)', 8, { strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(2)', 2, { delay: .3, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(3)', 2, { delay: .6, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(4)', 2, { delay: .9, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(5)', 2, { delay: 1.2, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(6)', 2, { delay: 1.5, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(7)', 2, { delay: 1.8, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(8)', 2, { delay: 2.5, strokeDashoffset: 0 })
//         gsap.to('#awards-svg path:nth-child(9)', 6, { delay: 1.6, strokeDashoffset: 0 })

//         gsap.to('#awards-svg', .5, { delay: 3, fill: 'white' })
//         gsap.to('.fade-in', .9, { delay: 3, y: 0, opacity: 1, ease: 'power4.inOut' })
//     }, 500)
// }

const windowWidth = window.screen.width
if (windowWidth >= 1200) {
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
}

if (windowWidth <= 600) {
    const hallContentText2 = document.getElementById('hall-content-head-2').offsetHeight
    const hallContentHead2 = document.getElementById('hall-content-text-2').offsetHeight
    const hallContent2 = hallContentHead2 + hallContentText2 + window.screen.height/5
    document.getElementsByClassName('grave-con')[0].style.marginTop = `${hallContent2}px`
}