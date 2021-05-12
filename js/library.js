//FUNCTION FOR library.html & eng-library.html

window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#loaded';
		window.location.reload();
	}
}

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

const windowWidth = window.screen.width
if (windowWidth <= 1200) {
    const goalSvgHeight = document.querySelector('#goal-svg').offsetHeight;
    document.getElementById('goal-text-heading').style.marginTop = `${goalSvgHeight}px`;
}