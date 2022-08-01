// using global constiables is a bad practice??

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

// переменная для отображения, работает ли таймер
// чтобы предотвратить повторный вызов функции во время ее работы
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
    alert("Время закончилось");
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

// document.getElementById("reset-sessions")

const resetSessions = () => {
  counter = 0;
  document.getElementById("sessions").innerHTML = counter;
  localStorage.setItem("sessions", counter);
};

// (+)косяк 1: alert появляется на времени 00:01

// (+)сделать так, чтобы после окончания таймера
// нажатие на Start не вызывалао Alert и не добавляло 1 к Sessions

// (+)косяк 2: если нажать несколько раз на Start,
// появляется бесконечный цикл с alert

// (+, ниже -1 не уходит)косяк 3: time в консоле не должен уходить в минус

// (+)косяк 4: после окончания таймера, если нажать на Start вместо Reset,
// появляеться 0-1:0-1 (то есть, таймер уходит в минус)

// (+)косяк 5: при нажаитие на Reset во время работы таймера нужно чтоб срабатывала и пауза тоже

// (+)косяк 6: после окончания таймера, кнопка Reset срабатывает
// только после нажания на кнопку Stop.

// косяк 7: если нажать на Stop когда на таймере осталась 1 сек,
//то нажатие на кнопку Start не продолжит таймер.
