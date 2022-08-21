function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const refs = {
    btStart: document.querySelector("[data-start]"),
    btStop: document.querySelector("[data-stop]"),
};

refs.btStart.addEventListener('click', onStartBodyColor);
refs.btStop.addEventListener('click', onStopBodyColor);
refs.btStop.disabled = true;
let idInterval = null;

function onStartBodyColor(){
idInterval = setInterval(onRandomColor, 1000);
 refs.btStart.disabled = true;
 refs.btStop.disabled = false;
};

function onRandomColor (){
document.body.style.backgroundColor = getRandomHexColor();
}

function onStopBodyColor(){
clearInterval(idInterval);
refs.btStart.disabled = false;
};
const x = 10;
console.log(x)