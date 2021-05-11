const hh = document.querySelector('.hh');
const mm = document.querySelector('.mm');
const ss = document.querySelector('.ss');

setInterval(() => {
	let day = new Date();
	let hr = day.getHours();
	let min = day.getMinutes();
  let sec = day.getSeconds();
  let msec = day.getMilliseconds();
	hh.style.transform = `rotateZ(${(hr + min / 60) * 30}deg)`;
	mm.style.transform = `rotateZ(${(min + sec / 60) * 6}deg)`;
	ss.style.transform = `rotateZ(${(sec + msec/1000)* 6}deg)`;
});


