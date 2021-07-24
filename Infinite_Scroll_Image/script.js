const container = document.querySelector('.container');
const URL = 'https://source.unsplash.com/collection/';

function getRandomNum() {
    return Math.floor(Math.random() * 100); // will get random num = 0 to 99
}

function loadImages(numImages = 15) {
    for(let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        img.src = `${URL}${getRandomNum()}`;
        img.height = '250';
        img.width = '250';
        container.appendChild(img);
    }
}

loadImages(); // Initial Loading

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})