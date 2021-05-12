document.querySelector('#logo').addEventListener('click', () => {
    console.log(language)
    // if (language === 'vn') {
    //     document.location.href = 'index'
    // } else if (language === 'eng') {
    //     document.location.href = 'eng-index'
    // }
})

screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;