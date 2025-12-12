let minute = 25;
let sec = 0;
let timer;
let running = false;

function play() {
    if (running == false) {
        running = true;
        console.log(running)
        timer = setInterval(() => {
            upHTML();
            if (sec < 0) {
                if (minute == 0 && sec == 0) {
                    running = false;
                    console.log(running)
                    clearInterval(timer);
                }
                sec = 59;

            }
            if (sec == 59) {
                minute--;
                upHTML();
                sec--;
            } else {
                sec--;
            }
        }, 1000
        );
    }
}

function reset() {
    sec = 0;
    minute = 25;
    clearInterval(timer);
    running = false;
    upHTML();
}

function pause() {
    clearInterval(timer);
    running = false;
}

function upHTML() {
    if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
    } else {
        document.getElementById("sec").innerHTML = sec;
    }
    document.getElementById("minute").innerHTML = minute;
}