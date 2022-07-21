const timrediv =document.getElementById('timer');
const startbutton =document.getElementById('stsrt-btn');
const didStart = true;
 let timer;
function startbuttons(event) {  
    starTimer();
    if(didStart) {
didStart = false;
clearInterval(timer);
timrediv.innerText='0'

    } else{ 
       didStart = true;
        starTimer();

    }
}
 
 function starTimer(event) { 

    const dateRun = new Date().valueOf();
    const dateNow = new Date().valueOf();
    const newTimer= Math.floor( (dateNow - dateRun) / 1000)    ;
    timrediv.innerText= newTimer;
    timer= setInterval(() => {
        const dateNow = new Date().valueOf();
        const newTimer= Math.floor((dateNow - dateRun) / 1000)    ;
        timrediv.innerText= newTimer;
    }, 500);

    
}

