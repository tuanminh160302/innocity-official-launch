window.onload = () => {
    setTimeout(() => {
        gsap.to('.landing-preloader-text', .3, { opacity: 0})
        gsap.to('.landing-preloader-text', 0, { delay: .3, display: 'none'})
        gsap.to('.landing-preloader-inner', 0, { delay: .5, display: 'block'})
        gsap.to('.landing-preloader-inner', .5, { delay: .5, opacity: 1})
        gsap.to('#window', .7, { y: '-10vh', scale: .8, delay: 2.5, opacity: 0, ease: 'power4.in'})
        gsap.to('.landing-preloader-inner', .7, { delay: 2.5, opacity: 0,})
        gsap.to('.bp', 0, { delay: 2.5, display: 'block'})
        gsap.to('.bp', .7, { y: '0vh', scale: .8, delay: 3.2, opacity: 1, ease: 'power4.out'})
        gsap.to('.landing-preloader-end', 0, { delay: 3.2, display: 'block'})
        gsap.to('.landing-preloader-end', .7, { y: '0vh', scale: .8, delay: 3.9, opacity: 1, ease: 'power4.out'})

        loader();
        function loader(_success) {
            inner = document.querySelector('.landing-preloader-inner')
            var w = 0,
                t = setInterval(function() {
                    w = w + 1;
                    inner.textContent = w+'%';
                    if (w === 100){
                        clearInterval(t);
                        w = 0;
                        if (_success){
                            return _success();
                        }
                    }
                }, 20);
        }
    }, 500)
}

// document.querySelector('.btn').onclick = loader;