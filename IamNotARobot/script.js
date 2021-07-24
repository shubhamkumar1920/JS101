const URL = 'https://source.unsplash.com/collection/';

function getRandomNum() {
    return (Math.floor(Math.random() * 6) + 1); // will get random num = 1 to 5
}
// random no 1 to 5
let randomNum = getRandomNum();

const images = [`${URL}${randomNum}`, `${URL}${randomNum}`];

for(let i = 1; i <= 5; i++) {
    
    if(images.indexOf(`${URL}${i}`) === -1) {
        images.push(`${URL}${i}`);
    }
}

const divIDArray = [];
// random no 1 to 6
function placeDivs() {
    while (divIDArray.length < 6) {
        let randomDiv = Math.floor(Math.random() * 6) + 1;

        if (divIDArray.indexOf(randomDiv) === -1) {
            divIDArray.push(randomDiv);
        }
    }

}

placeDivs();

// console.log(images);
// console.log(divIDArray);

function placeImages() {
    for(let i = 0; i < images.length; i++) {
        let divElement = document.getElementById(`${divIDArray[i]}`);
        const img = document.createElement('img');
        img.id = `img-${i+1}`; // to give unique identity
        img.className = 'imageList';
        img.src = images[i];
        let imageNum = images[i].substr(-1);
        img.setAttribute(`data-ns-test`, `img${imageNum}`);
        divElement.appendChild(img);
    }
}

placeImages();

document.querySelectorAll('.imageList')
.forEach((imgElement) => imgElement.addEventListener('click', handleImageClick));

const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('btn');

let clickedImgArray = [];

function handleImageClick(event) {
    resetButton.hidden = false; // show reset button
    let imgElement = event.target;
    let imgID = imgElement.getAttribute("id");
    if(clickedImgArray.indexOf(imgID) === -1) {
        clickedImgArray.push(imgID);
    }

    if(clickedImgArray.length === 2 ) {
        verifyButton.hidden = false; // show verify button

    } else if(clickedImgArray.length >= 3) {
        verifyButton.hidden = true; // hide verify button
    }
}

function handleResetClick() {
    resetButton.hidden = true; // hide reset button
    verifyButton.hidden = true; // hide verify button
    clickedImgArray = [];
    paraElement.innerText = ""; // to remove previous message
}

function handleVerifyClick() {
    verifyButton.hidden = true; // hide verify button

    // if(clickedImgArray.length === 2 ) {
        
        let firstImageID = document.getElementById(`${clickedImgArray[0]}`).getAttribute("data-ns-test");
        let secondtImageID = document.getElementById(`${clickedImgArray[1]}`).getAttribute("data-ns-test");

        displayMessage(firstImageID, secondtImageID);

    // }

}
let paraElement = document.getElementById("para");

function displayMessage(firstImageID, secondtImageID) {
    
    if(firstImageID === secondtImageID) {
        paraElement.innerText = `You are a human. Congratulations!`;
        paraElement.style.color = '#15d629';

    } else {
        paraElement.innerText = `We can't verify you as a human. You selected the non-identical tiles.`;
        paraElement.style.color = '#f5202e'
    }
}



