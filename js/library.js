document.querySelector('#nav-elt-library').addEventListener('click', () => {
    gsap.to(window, {duration: .9, scrollTo: '.main-svg', ease: 'power4.inOut'})
})

document.querySelector('#nav-elt-story').addEventListener('click', () => {
    gsap.to(window, {duration: .9, scrollTo: '.story', ease: 'power4.inOut'})
})

document.querySelector('#nav-elt-goal').addEventListener('click', () => {
    gsap.to(window, {duration: .9, scrollTo: '.goal', ease: 'power4.inOut'})
})

document.querySelector('#nav-elt-vision').addEventListener('click', () => {
    gsap.to(window, {duration: .9, scrollTo: '.vision', ease: 'power4.inOut'})
})

document.querySelector('#nav-elt-dictionary').addEventListener('click', () => {
    gsap.to(window, {duration: .9, scrollTo: '.dictionary', ease: 'power4.inOut'})
})

document.querySelector('#Path_238').addEventListener('mouseover', () => {
    gsap.to('#Ellipse_27, #Path_240, #United_Kingdom', .15, {delay: .3, opacity: 1})
})

document.querySelector('#Path_235').addEventListener('mouseover', () => {
    gsap.to('#Ellipse_29, #Path_241, #France', .15, {delay: .3, opacity: 1})
})

document.querySelector('#Path_236').addEventListener('mouseover', () => {
    gsap.to('#Ellipse_30, #Path_242, #Germany', .15, {delay: .3, opacity: 1})
})

document.querySelector('#Path_239').addEventListener('mouseover', () => {
    gsap.to('#Ellipse_28, #Line_33, #Netherlands', .15, {delay: .3, opacity: 1})
})

document.querySelector('#Path_237').addEventListener('mouseover', () => {
    gsap.to('#Ellipse_31, #Path_243, #Finland', .15, {delay: .3, opacity: 1})
})