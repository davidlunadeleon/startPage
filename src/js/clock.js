import * as config from '../config/config.json';

function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = '';
    if (config.clockFormat) {
        ampm = hours > 12 ? 'PM' : 'AM';
        hours = hours % 12;
    }
    var currentTime = `${hours}:`;
    if (minutes < 10) {
        currentTime += `0${minutes}`;
    } else {
        currentTime += minutes;
    }
    currentTime += ` ${ampm}`;
    document.getElementById('currentTime').textContent = currentTime;
}

function addZero(s) {
    if (s < 10) {
        return `0${s}`;
    } else {
        return `${s}`;
    }
}

function currentDate() {
    var time = new Date();
    var date = addZero(time.getDate());
    var month = addZero(time.getMonth());
    var currentDate = '';
    switch (config.dateFormat) {
        case 'ddmmyy':
            currentDate = `${date}/${month}/${time.getFullYear()}`;
            break;
        case 'yymmdd':
            currentDate = `${time.getFullYear()}/${month}/${date}`;
            break;
        case 'yyddmm':
            currentDate = `${time.getFullYear()}/${date}/${time.getFullYear()}`;
            break;
        case 'mmddyy':
        default:
            currentDate = `${month}/${date}/${time.getFullYear()}`;
            break;
    }
    document.getElementById('currentDate').textContent = currentDate;
}

export { clock, currentDate };
