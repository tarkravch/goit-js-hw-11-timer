const cellDays = document.querySelector('[data-value="days"]');
const cellHours = document.querySelector('[data-value="hours"]');
const cellMinutes = document.querySelector('[data-value="mins"]');
const cellSeconds = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor(eventDate) {
        this.timerLauncher(Object.values(eventDate));
    }

    timerLauncher(eventDate) {
        window.addEventListener('load', this.timeCalculation(eventDate));
    }

    timeCalculation(eventDate) {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = eventDate - currentTime;
            this.getTimeComponents(deltaTime);
        }, 1000);
    };

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        console.log(`${days}:${hours}:${mins}:${secs}`);
        return updateClockface({ days, hours, mins, secs });
    };

    pad(value) {
        return String(value).padStart(2, '0');
    };
};

const timer = new CountdownTimer({
    targetDate: new Date('Dec 31, 2021, 23:59:59').getTime(),

});

function updateClockface({ days, hours, mins, secs }) {
    cellDays.textContent = days;
    cellHours.textContent = hours;
    cellMinutes.textContent = mins;
    cellSeconds.textContent = secs;
};