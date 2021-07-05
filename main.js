let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');
let timeArea = document.getElementById('time');

let time = 0;
let timerId = null;


startButton.addEventListener('click', (event)=>{
  if (timerId !== null){return;}
  timerId = setInterval(() => {
  time += 100;
  timeArea.innerText = formatTime(time);
  },100);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.desabled = false;
});

stopButton.addEventListener('click', (event)=>{
  clearInterval(timerId);
  timerId = null;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener('click',(event)=>{
  clearInterval();
  time = 0;
  timeArea.textContent = '00:00:00:000';
})


function formatTime(time) {
  let msec = time % 1000;
  let tempsec = Math.floor(time / 1000);
  let sec = tempsec % 60;
  let min = Math.floor(tempsec / 60);
  let hour = Math.floor(min / 60);
  
  let msStr = msec.toString().padStart(3,'0');
  let tsecStr = tempsec.toString().padStart(3,'0');
  let sStr = sec.toString().padStart(2,'0');
  let mStr = min.toString().padStart(2,'0');
  let hStr = hour.toString().padStart(2,'0');
  
  return  hStr + ':' + mStr+ ':' + sStr + ':' + msStr ;
}
