const clockface = document.querySelector('#timer-1');
const cellDays = document.querySelector('[data-value="days"]');
const cellHours = document.querySelector('[data-value="hours"]');
const cellMinutes = document.querySelector('[data-value="mins"]');
const cellSeconds = document.querySelector('[data-value="secs"]');


/* class CountdownTimer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.onTick = onTick;
        /* this.timerLauncher(); */

/* 
    timerLauncher() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    } */



function timeCalculation() {
    const eventTime = new Date('May 31, 2021, 23:59:59').getTime();
    console.log(eventTime);
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = eventTime - currentTime;
        const time = getTimeComponents(deltaTime);
        /* this.onTick(time); */
    }, 1000);
};


function updateClockface({ days, hours, mins, secs }) {
    cellDays.textContent = `${days}`;
    cellHours.textContent = `${hours}`;
    cellMinutes.textContent = `${mins}`;
    cellSeconds.textContent = `${secs}`;
};

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
};

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
    return String(value).padStart(2, '0');
};


/* const timer = new CountdownTimer({
    /*  selector: '#timer-1', */
/*  targetDate: new Date('Jul 17, 2019'), */
//  onTick: updateClockface(),