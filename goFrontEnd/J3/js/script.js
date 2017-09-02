var timer;
var flag = 0;
var startDate;
var sec = '00';
var min = '00';
var hr = '00';
var misec = '00';

function stopwatch() {
    misec++;
    if (misec === 100) {
        misec = 0;
        sec++;
        if (sec < 10) sec = '0' + sec;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min < 10) min = '0' + min;
            if (min === 60) {
                min = 0;
                hr++;
                if (hr < 10) hr = '0' + hr;
            }
        }
    }
    if (misec < 10) misec = '0' + misec;
    var watch = document.getElementById('stopwatch_block');
    watch.innerHTML = hr + ':' + min + ':' + sec + '.' + misec;
    timer = setTimeout(stopwatch, 10);
}

function start_timer() {
    if (flag == 0) {
        startDate = new Date();
        stopwatch();
        flag = 1;
        var s_btn = document.getElementById('s_btn');
        s_btn.innerHTML = 'PAUSE IT';
    }
    else {
        pause_timer();
    }
}

function pause_timer() {
    clearTimeout(timer);
    flag = 0;
    var s_btn = document.getElementById('s_btn');
    s_btn.innerHTML = 'START IT';
}

function stop_timer() {
    clearTimeout(timer);
    var watch = document.getElementById('stopwatch_block');
    watch.innerHTML = '00:00:00.00';
    timer = 0;
    hr = min = sec = msec = '00';
    flag = 0;
    var s_btn = document.getElementById('s_btn');
    s_btn.innerHTML = 'START IT';
    document.getElementById('lbl_block').innerHTML = '';
}

function mark() {
    if (timer > 0) {
        var lbl = document.getElementById('lbl_block');
        lbl.innerHTML = lbl.innerHTML + '<br>' + document.getElementById('stopwatch_block').innerHTML;
    }
}