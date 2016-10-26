//function Stopwatch() {
//    var second = document.getElementById('s'), 
//        minute = document.getElementById('m'), 
//        hour = document.getElementById('h'), 
//        milisecond = document.getElementById('ms');
//        
//    milisecond = +milisecond;
//    
//    milisecond++;
//    
//    if (milisecond === 1000) {
//        second++;
//        milisecond = 0;
//    }
//    
//    if (second === 60) {
//        minute++;
//        second = 0;
//    }
//    
//    if (minute === 60) {
//        hour++;
//        minute = 0;
//    }
//    
//    console.log ('milisecond:' +milisecond);
//    $('.stopwatch_block').text(hour + ':' + minute + ':' + second + '.' + milisecond);
//}
//
//function start_timer() {
//    setInterval(Stopwatch, 1000);
//}


var sec = 0;
var min = 0;
var hr = 0;
var misec = 0;
function stopwatch () {
    
    misec++;
    
    if (misec === 1000) {
        misec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hr++;
            }
        }
    }
    
    var watch = document.getElementById('stopwatch_block');
    watch.innerHTML=hr+':'+min+':'+sec+':'+misec;
    
//    console.log ('misec:'+misec);
//    
//    console.log(hr+':'+':'+min+':'+sec+':'+misec);
    
}

function start_timer() {
    setInterval(stopwatch, 1);
}


