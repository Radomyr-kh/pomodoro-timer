let time = 5;
let intervalId;
const zero = "0";
let counter = +localStorage.getItem("sessions") || 0;

const updateCounter = () => {
  document.getElementById("sessions").innerHTML = counter;
};

if (counter) {
  updateCounter();
}

let timerActive = false;

function myStartFunction() {
  if (time > 0 && timerActive === false) {
    intervalId = setInterval(myTimer, 1000);
    timerActive = true;
  }
}

function myPauseFunction() {
  clearInterval(intervalId);
  timerActive = false;
}

function myResetFunction() {
  if (timerActive === false) {
    time = 5;
    document.getElementById("minutes").innerHTML = zero + zero;
    document.getElementById("seconds").innerHTML = zero + time;
    timerActive = false;
  }
}

function myTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (time < 0) {
    clearInterval(intervalId);
    alert("Time to rest");
    minutes = zero;
    seconds = zero;
    counter += 1;
    document.getElementById("sessions").innerHTML = counter;
    timerActive = false;
    localStorage.setItem("sessions", counter);
  }
  if (minutes < 10) {
    document.getElementById("minutes").innerHTML = zero + minutes;
  }
  if (seconds < 10) {
    document.getElementById("seconds").innerHTML = zero + seconds;
  }
  console.log(time);
  time--;
}

const resetSessions = () => {
  counter = 0;
  document.getElementById("sessions").innerHTML = counter;
  localStorage.setItem("sessions", counter);
};

