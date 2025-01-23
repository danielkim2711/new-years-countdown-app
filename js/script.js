const updateCountdown = () => {
  const { days, hours, mins, seconds } = getTimeUnits('01 Jan 2026');
  updateCountdownTimer(days, hours, mins, seconds);
};

const getTimeUnits = (futureDate) => {
  const newYearsDate = new Date(futureDate);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const oneDay = 86400;
  const oneHour = 3600;

  return {
    days: Math.floor(totalSeconds / oneDay),
    hours: Math.floor(totalSeconds / oneHour) % 24,
    mins: Math.floor(totalSeconds / 60) % 60,
    seconds: Math.floor(totalSeconds % 60),
  };
};

const updateCountdownTimer = (days, hours, mins, seconds) => {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secondsEl = document.getElementById('seconds');

  daysEl.textContent = formatDays(days);
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
};

const formatDays = (days) => String(days).padStart(3, '0');
const formatTime = (time) => String(time).padStart(2, '0');

updateCountdown();
setInterval(updateCountdown, 1000);
