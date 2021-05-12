//FUNCTION FOR city-hall.html & eng-city-hall.html

positionTagWidth = document.querySelector('.position-tag').offsetWidth * 0.6

var slideIndex = 1

document.querySelector('#position-nav span:nth-child(1)').addEventListener('click', () => {
    gsap.to('#position-2', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-3', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-1', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
    gsap.to('#position-nav span:nth-child(1)', .4, { scale: 1})
    gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
    slideIndex = 1
})

document.querySelector('#position-nav span:nth-child(2)').addEventListener('click', () => {
    gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-3', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-2', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
    gsap.to('#position-nav span:nth-child(2)', .4, { scale: 1})
    gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
    slideIndex = 2
})

document.querySelector('#position-nav span:nth-child(3)').addEventListener('click', () => {
    gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-3', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
    gsap.to('#position-nav span:nth-child(3)', .4, { scale: 1})
    gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
    slideIndex = 3
})

document.querySelector('#position-nav span:nth-child(4)').addEventListener('click', () => {
    gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-3', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-4', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
    gsap.to('#position-nav span:nth-child(4)', .4, { scale: 1})
    gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
    slideIndex = 4
})

document.querySelector('#position-nav span:nth-child(5)').addEventListener('click', () => {
    gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-3', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-4', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
    gsap.to('#position-5', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
    gsap.to('#position-nav span:nth-child(5)', .4, { scale: 1})
    gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
    gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
    slideIndex = 5
})

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            if (slideIndex === 5) {
                gsap.to('#position-2', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-1', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 1
            } else if (slideIndex === 4) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                slideIndex = 5
            } else if (slideIndex === 3) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 4
            } else if (slideIndex === 2) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 3
            } else if (slideIndex === 1) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 2
            }
        } else {
            /* right swipe */
            if (slideIndex === 1) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                slideIndex = 5
            } else if (slideIndex === 2) {
                gsap.to('#position-2', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-1', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 1
            } else if (slideIndex === 3) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 2
            } else if (slideIndex === 4) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 3
            } else if (slideIndex === 5) {
                gsap.to('#position-1', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-2', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-3', .7, { transform: `translate(calc(-50% - 20vw - ${positionTagWidth}px), -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-5', .7, { transform: `translate(20vw, -50%) scale(.6)`, opacity: 0,ease: 'power4.inOut'})
                gsap.to('#position-4', .7, { transform: `translate(-50%, -50%) scale(1)`, opacity: 1,ease: 'power4.inOut'})
                gsap.to('#position-nav span:nth-child(4)', .4, { scale: 1})
                gsap.to('#position-nav span:nth-child(1)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(2)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(3)', .4, { scale: .6})
                gsap.to('#position-nav span:nth-child(5)', .4, { scale: .6})
                slideIndex = 4
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
