const lapBtn = document.getElementById('lapBtn');
const timeMilliSec = document.getElementById('timerMilisec');
const timeSec = document.getElementById('timerSec');
const timeMins = document.getElementById('timerMins');
const timeHrs = document.getElementById('timerHrs');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const lapRecord = document.getElementById('lapRecord');
let lapAdd = document.getElementById('lapAdd');

let hours = 00;
let minutes =00;
let seconds = 00;
let miliseconds = 00;

let displayMilisec = miliseconds;
let displaySec = seconds;
let displayMins = minutes;
let displayHours = hours;

let lapCounter = 0;
let timer;


function start() {
  miliseconds++;

  if (miliseconds < 10) displayMilisec = "0" + miliseconds.toString();
  else displayMilisec = miliseconds;

  if (seconds < 10) displaySec = "0" + seconds.toString();
  else displaySec = seconds;

  if (minutes < 10) displayMins = "0" + minutes.toString();
  else displayMins = minutes;

  if (hours < 10) displayHours = "0" + hours.toString();
  else displayHours = hours;

  if (miliseconds / 100 === 1) {
    seconds++;
    miliseconds = 0;

    if (seconds / 60 === 1) {
      minutes++;
      seconds = 0;

      if (minutes / 60 === 1) {
        hours++;
        minutes = 0;
      }
    }
  }
  timeMilliSec.innerHTML = displayMilisec;
  timeSec.innerHTML = displaySec;
  timeMins.innerHTML = displayMins;
  timeHrs.innerHTML = displayHours;
}
//startBtn.onclick = function () {
  //clearInterval(interval);
  //interval = setInterval(start, 10);
//}
// resetBtn.onclick = function () {
//   clearInterval(interval);
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
//   miliseconds = 0;

//  timeMilliSec.innerHTML = "00";
//   timeSec.innerHTML = "00";
// }
// pauseBtn.onclick = function () {
//   clearInterval(interval);
// }
//lapBtn.onclick = function () {
//  lapNow = timeHrs.innerHTML + ":" + timeMins.innerHTML + ":" + timeSec.innerHTML + ":" + timeMilliSec.innerHTML;
//  lapRecord.innerHTML += lapNow + "<br>";
//}
function startfn(a){
  timer=setInterval(start,10);
  a.target.parentElement.children[1].style.display = "none";
  a.target.style.display = "none";
  a.target.parentElement.children[2].style.display = "inline";
  a.target.parentElement.children[3].style.display = "inline";
}
function pausefn(a){
  clearInterval(timer);
  a.target.parentElement.children[3].style.display = "none";
  a.target.style.display = "none";
  a.target.parentElement.children[1].style.display = "inline";
  a.target.parentElement.children[0].style.display = "inline";
}
function resetfn(a){
  lapAdd.style.display = "none";
  a.target.classList.add("disabled");
  timeMilliSec.innerHTML = "00";
  timeSec.innerHTML = "00";
  timeMins.innerHTML = "00";
  timeHrs.innerHTML = "00";
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  
  ;
let clearLaps = document.getElementsByClassName('singleLap');
console.log(clearLaps);
if(clearLaps.length > 0){
  Array.from(clearLaps).forEach (element => {
    element.remove();
  
  });
}
lapCounter =0;
}

function lapfn(a){
  console.log("Hello");
  lapCounter++;
  let createLap = document.createElement('div');
  createLap.classList="singleLap";
  
  min=("0"+minutes).slice(-2);
  sec=("0"+seconds).slice(-2);
  milisec=("0"+miliseconds).slice(-2);
  createLap.innerHTML = `<span class="lap">${lapCounter}</span><span class="lap">${min} : ${sec} : ${milisec}</span>`;
  lapAdd.appendChild(createLap);
  lapAdd.style.display = "block";

}
startBtn.addEventListener('click',startfn);
pauseBtn.addEventListener('click',pausefn);
resetBtn.addEventListener('click',resetfn);
lapBtn.addEventListener('click',lapfn);


