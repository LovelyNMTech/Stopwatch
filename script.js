const timerDisplay = document.querySelector('.timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    timerDisplay.textContent = formatTime(elapsedTime);
  }, 10);
}

function stopTimer() { 
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerDisplay.textContent = '00:00:00';
}

function formatTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  let milliseconds = Math.floor((time % 1000) / 10);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(number) {
  return number < 10 ? `0${number}` : number;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
