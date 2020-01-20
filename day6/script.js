const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
	let now = new Date();
	let seconds = now.getSeconds();
	let secondsDegree = ((seconds/60)*360+90);
	secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

	let minutes = now.getMinutes();
	let minutesDegree = ((minutes/60)*360+90);
	minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

	let hours = now.getHours();
	let hoursDegree = ((hours/60)*360+90);
	hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

	console.log(seconds); 
}

setInterval(setDate, 1000);
