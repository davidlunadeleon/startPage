import * as config from '../config/config.json';

function sortAux(a, b) {
    return a.until - b.until;
}

function greetings() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var greetingsMap = config.greetingMessages;
    greetingsMap.sort(sortAux);
    var i = 0;
    while (hours * 100 + minutes > greetingsMap[i].until) {
        i++;
    }
    document.getElementById('greetingMessage').textContent =
        greetingsMap[i].message + config.name;
}

export { greetings };
