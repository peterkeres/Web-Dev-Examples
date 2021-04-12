const colorButton = document.querySelector('#newBtn');
const oldBtn = document.querySelector("#oldBtn");
const heading = document.querySelector('h1');
const body = document.querySelector('body');


colorButton.addEventListener('click', () => setNewColor() );
oldBtn.addEventListener('click', () => prevColor() );
colorButton.addEventListener('click', () => showOldButton(), {once: true});



function showOldButton(){
    document.querySelector('#oldBtn').classList.add("showOldBtn");
}

function prevColor(){
    const oldColor = body.style.backgroundColor;
    body.style.backgroundColor = oldBtn.style.backgroundColor;
    heading.innerText = oldBtn.style.backgroundColor;
    oldBtn.style.backgroundColor = oldColor;
}


function setOldColor(backgroundColor){
    oldBtn.style.backgroundColor = backgroundColor;
}


function setNewColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;

    setOldColor(body.style.backgroundColor);

    body.style.backgroundColor = newColor;
    heading.innerText = newColor;
}


