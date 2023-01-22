// date 2/1 12:00

function clock() {
  const drop_date = 'Feb 1, 2023 00:00:00';
  var next_drop = new Date(drop_date).getTime(); 

  const now = new Date().getTime();
  const timeleft = next_drop - now;  
  const  days = (Math.floor(timeleft / (1000 * 60 * 60 * 24)).toString().padStart(2,'0'));
  const  hours = (Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,'0'));
  const  minutes = (Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,'0'));
  const  seconds = (Math.floor((timeleft % (1000 * 60)) / 1000).toString().padStart(2,'0'));
  document.getElementById("days").innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
};
setInterval(clock,1000);

