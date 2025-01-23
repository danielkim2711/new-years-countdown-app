const updateCountdown = () => {
  const { days, hours, mins, seconds } = getTimeUnits('01 Jan 2026');
  updateCountdownTimer(days, hours, mins, seconds);
};

const getTimeUnits = (futureDate) => {
  const newYearsDate = new Date(futureDate);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const SECONDS_IN_A_DAY = 86400;
  const SECONDS_IN_AN_HOUR = 3600;
  const SECONDS_IN_A_MINUTE = 60;

  return {
    days: Math.floor(totalSeconds / SECONDS_IN_A_DAY),
    hours: Math.floor((totalSeconds % SECONDS_IN_A_DAY) / SECONDS_IN_AN_HOUR),
    mins: Math.floor((totalSeconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE),
    seconds: Math.floor(totalSeconds % SECONDS_IN_A_MINUTE),
  };
};

const updateCountdownTimer = (days, hours, mins, seconds) => {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secondsEl = document.getElementById('seconds');

  daysEl.textContent = formatNumberWithZeros(days, 3);
  hoursEl.textContent = formatNumberWithZeros(hours, 2);
  minsEl.textContent = formatNumberWithZeros(mins, 2);
  secondsEl.textContent = formatNumberWithZeros(seconds, 2);
};

const formatNumberWithZeros = (num, length) =>
  String(num).padStart(length, '0');

updateCountdown();
setInterval(updateCountdown, 1000);
