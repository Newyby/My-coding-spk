const dayjs = require('dayjs');


const timeElement =
	  document.querySelector('.current-time');
	  
	const dateElement =
	document.querySelector('.current-date');

function updateTime() {

	  timeElement.textContent =
		    dayjs().format('HH:mm:ss');
		    
		dateElement.textContent =
	dayjs().format('DD MMMM YYYY');

}

updateTime();

setInterval(updateTime, 1000);
