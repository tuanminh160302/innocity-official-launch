var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '#svg-trigger',
    triggerHook: 0.65,
    reverse: true
})
// scene.addIndicators();


scene.setTween('#comp-svg', .5, { y: 0, opacity: 1});
scene.addTo(controller);

// var scene = new ScrollMagic.Scene({
//     triggerElement: '#next-img',
//     triggerHook: 0.1,
// })
// // scene.addIndicators();
// scene.setTween('#intro-name', .5, { delay: .6, opacity: 1});
// scene.addTo(controller);


// var scene = new ScrollMagic.Scene({
//     triggerElement: '.hr',
//     triggerHook: 0.2,
//     reverse: false,
// })
// // scene.addIndicators();
// scene.setTween('.videos-trigger', 1, { opacity: 1});
// scene.addTo(controller);