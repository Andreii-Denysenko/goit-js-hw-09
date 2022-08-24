import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const btn = document.querySelector('button [type="submit"]')
let delay = document.querySelector('input [name="delay"]');
let step = document.querySelector('input [name="step"]');
let amount = document.querySelector('input [name="amount"]');


form.addEventListener("submit", onGenerationPromise);


 function onGenerationPromise(evt){
    evt.preventDefault();

    delay = Number(evt.currentTarget.delay.value);
    step = Number(evt.currentTarget.step.value);
    amount = Number(evt.currentTarget.amount.value);

   if(delay >= 0 && step >= 0 && amount > 0 ){
for  (let position = 1; position <= amount; position +=1){
   delay += step;
     createPromise(position, delay)
 .then(({ position, delay }) => {
    setTimeout(() => {
        Notify.success(` Fulfilled promise ${position} in ${delay}ms`)
    }, delay);
 })
 .catch(({ position, delay }) => {
    setTimeout(() => {
        Notify.failure(` Rejected promise ${position} in ${delay}ms`)
    }, delay);
   
 });
}
   }};

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const objectPromise = { position, delay };
  
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(objectPromise);
      }
      reject(objectPromise);
    });
  };
