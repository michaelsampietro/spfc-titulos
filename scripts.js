window.onload = function () {
    calcular()
    setInterval(calcular, 1000)
}

function calcular() {
    var now = moment('2012-12-12 21:50:00');
    var end = moment();
    var duration = moment.duration(end.diff(now));
    var days = duration.asDays();
    duration.subtract(moment.duration(days,'days'));
    var hours = duration.hours();
    duration.subtract(moment.duration(hours,'hours'));
    var minutes = duration.minutes();
    duration.subtract(moment.duration(minutes,'minutes'));
    var seconds = duration.seconds();

    if (hours < 0) {
        hours *= -1;
    }

    if (minutes < 0) {
        minutes *= -1;
    }

    if (seconds < 0) {
        seconds *= -1;
    }

    document.getElementById('tempo').innerHTML = Math.floor(days) + ' dias, ' + hours + ' horas, ' + minutes + ' minutos, ' + seconds + ' segundos';
}