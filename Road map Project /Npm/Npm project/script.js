const dayjs = require('dayjs');

const timeElement =
  document.querySelector('.current-time');

timeElement.textContent =
  dayjs().format('HH:mm:ss');
console.log(dayjs().format());
