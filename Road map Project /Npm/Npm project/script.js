const dayjs = require('dayjs');

const timeElement =
	  document.querySelector('.current-time');

function updateTime() {

	  timeElement.textContent =
		    dayjs().format('HH:mm:ss');

}

updateTime();

setInterval(updateTime, 1000);
