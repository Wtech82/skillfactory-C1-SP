const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const pause = document.querySelector('.pause');


let countSec = 0;
let countMin = 0;
let down_pause = 0;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
  }
  if(countSec > 0 && down_pause === 0) countSec--;
  else if (countSec > 0 && down_pause === 1) countSec = countSec;
  else{
  	countSec = 59;
    countMin--;
  } 
  updateText();
}

plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}


start.onclick = () => {
	  countDown();  
}

stop.onclick = () =>{
  countSec = 0;
  countMin = 0;
}

//jQuerry function Pause
$(function(){
    $(".pause").click(function() {
       if (pause.innerHTML == 'Pause' && down_pause == 0){
    pause.innerHTML = 'Continue';
    down_pause = 1;
  }
  else {
    pause.innerHTML = 'Pause';
    down_pause = 0;
  } 
    });
});

//JS function Pause
/*pause.onclick = () =>{
  if (pause.innerHTML == 'Pause' && down_pause == 0){
    pause.innerHTML = 'Continue';
    down_pause = 1;
  }
  else {
    pause.innerHTML = 'Pause';
    down_pause = 0;
  }
}*/

