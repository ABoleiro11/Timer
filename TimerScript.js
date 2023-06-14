
const timerElement = document.getElementById('timer');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const startButton = document.getElementById('start');
const stoppButton = document.getElementById('stopp');
const resetButton = document.getElementById('reset');

let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  console.log("starttimer been called");

  if (stoppButton.disabled === false) {
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
  }
  
  if (hours === 0 && minutes === 0 && seconds === 0){
    document.getElementById('timer').innerHTML = "finished"; 
  }

  
  timerInterval = setInterval(decrementTimer, 1000);
  startButton.disabled = true;
  stoppButton.disabled = false;
  hoursInput.disabled = true;
  minutesInput.disabled = true;
  
}

function stoppTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stoppButton.disabled = true;
  hoursInput.disabled = false;
  minutesInput.disabled = false;

}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
  startButton.disabled = false;
  stoppButton.disabled = true;
  hoursInput.disabled = false;
  minutesInput.disabled = false;

}

function decrementTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      if (hours === 0) {
        stopTimer();
        return;
      }
      hours--;
      minutes = 59;
    } else {
      minutes--;
    }
    seconds = 59;
  } else {
    seconds--;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  timerElement.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, '0');
}

