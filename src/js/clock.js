import * as config from '../config/config.json';

function clock(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = ""
    if(config.clockFormat){
        ampm = (hours > 12 ? "PM" : "AM");
        hours = hours%12;
    }
    var currentTime = `${hours}:`;
    if(minutes < 10){
        currentTime += `0${minutes}`;
    } else {
        currentTime += minutes;
    }
    currentTime += ` ${ampm}`;
    document.getElementById('currentTime').textContent = currentTime;
}

export { clock };