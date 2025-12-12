let waktu = 10;
let timer;
function play() {
    timer = setInterval(() => {
        document.getElementById("waktu").innerHTML = waktu;
        console.log(waktu);
        waktu--;
        if (waktu < 0) {
            clearInterval(timer);
            console.log("Waktu Habis")
        }
    }, 1000
    );
}

function reset() {
    waktu = 10;
    document.getElementById("waktu").innerHTML = waktu;

}