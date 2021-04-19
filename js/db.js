// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBPMV9EDWLzv7u6aKXbU32q3Z2iekXLHcQ",
    authDomain: "innocity-e3b97.firebaseapp.com",
    projectId: "innocity-e3b97",
    storageBucket: "innocity-e3b97.appspot.com",
    messagingSenderId: "960209920927",
    appId: "1:960209920927:web:7eb2de48ec5e10453d53aa",
    measurementId: "G-95YBP318QV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })


const postList = document.querySelector('.post-container')

function renderPost(doc) {
    let div = document.createElement('div')
    let title = document.createElement('span')
    let content = document.createElement('span')
    let read = document.createElement('span')
    title.className = 'blog-title'

    div.setAttribute('data-id', doc.id)
    title.textContent = doc.data().title
    content.textContent = doc.data().content
    read.textContent = doc.data().read

    div.appendChild(title)
    div.appendChild(read)

    blogList.appendChild(div)

    div.addEventListener('click', () => {
        readMore.appendChild(content)
        content.className = 'content-read-more'
        gsap.to(readMore, 0, { display: 'block' })
        gsap.to(readMore, 0.9, { y: 0, ease: 'power4.inOut' })
        gsap.to('header', 0, { background: 'transparent' })
        gsap.to('header', 0, { delay: .5, background: 'black' })
    })

    document.querySelector('#read-more-back').addEventListener('click', () => {
        setTimeout(() => {
            readMore.removeChild(content)
        }, 900)
        content.className = 'content-read-more'
        gsap.to(readMore, 0, { delay: .9, display: 'none' })
        gsap.to(readMore, 0.9, { y: '-100vh', ease: 'power4.inOut' })
        gsap.to('header', 0, { background: 'transparent' })
        gsap.to('header', 0, { delay: .9, background: '#343a69' })
    })
}

// getting data
// db.collection('blog').orderBy('date').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderBlog(doc)
//     })
// })

//real-time listener
db.collection('blog').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if (change.type === 'added') {
            renderBlog(change.doc)
        }
    })
})

//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('blog').add({
        title: form.title.value,
        date: Math.floor(Date.now() / 1000),
        content: form.content.value,
        read: 'Read more'
    })
    form.title.value = ''
    form.content.value = ''
})