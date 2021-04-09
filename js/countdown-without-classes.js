const cellDays = document.querySelector('[data-value="days"]');
const cellHours = document.querySelector('[data-value="hours"]');
const cellMinutes = document.querySelector('[data-value="mins"]');
const cellSeconds = document.querySelector('[data-value="secs"]');


window.addEventListener('load', timeCalculation);


function timeCalculation() {
    const eventTime = new Date('May 31, 2021, 23:59:59').getTime();
    console.log(eventTime);
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = eventTime - currentTime;
        getTimeComponents(deltaTime);

    }, 1000);
};

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    console.log(`${days}:${hours}:${mins}:${secs}`);
    return updateClockface({ days, hours, mins, secs });

};

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
    return String(value).padStart(2, '0');
};

function updateClockface({ days, hours, mins, secs }) {
    cellDays.textContent = days;
    cellHours.textContent = hours;
    cellMinutes.textContent = mins;
    cellSeconds.textContent = secs;
};