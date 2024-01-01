const startNewYearCountdown = () => {
  const { days, hours, mins, seconds } = calculateTimeUnits();
  updateCountdown(days, hours, mins, seconds);
};

const calculateTimeUnits = () => {
  const newYearsDate = new Date('01 Jan 2025');
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  return { days, hours, mins, seconds };
};

const updateCountdown = (days, hours, mins, seconds) => {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secondsEl = document.getElementById('seconds');

  daysEl.innerHTML = formatDays(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
};

const formatDays = (days) => {
  if (days < 100 && days >= 10) return `0${days}`;
  else if (days < 10) return `00${days}`;

  return days;
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

startNewYearCountdown();
setInterval(startNewYearCountdown, 1000);
