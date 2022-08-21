import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]')
const daysValue = document.querySelector('[data-days]');
const minuteValue = document.querySelector('[data-minutes]');
const hourValue = document.querySelector('[data-hours]');
const secValue = document.querySelector('[data-seconds]');
const InputDate = document.querySelector('#datetime-picker');
let selectedTime  = null;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
     if(selectedDates[0] < Date.now()){
window.alert('Please choose a date in the future');
selectedDates[0] = new Date();
     }else {
        btnStart.disabled = false;
        selectedTime = selectedDates[0];
     }
    },
  };


class Timer {
    constrctor(){
    this.timerID = null;
    this.isActive = false;
    startBtn.disabled = true; 
    };


startTimer(){
    if(this.isActive){
        return;
    };
this.isActive = true;
this.timerID = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = selectedTime - currentTime;
          const componentsTimer = convertMs(deltaTime);
          this.updateComponentsTimer(componentsTimer);
          if (deltaTime <= 0 || deltaTime <= 10) {
            this.stopTimer();
          }
        }, 1000);
};

    stopTimer(){
            clearInterval(this.timerID);
        };
    updateComponentsTimer({days, hours, minutes, seconds}){
        daysValue.textContent = addLeadingZero(days);
        hourValue.textContent = addLeadingZero(hours);
        minuteValue.textContent =  addLeadingZero(minutes);
        secValue.textContent = addLeadingZero(seconds);
        };

};

const timer = new Timer();
flatpickr(InputDate, options);
btnStart.addEventListener('click', () => timer.startTimer());
