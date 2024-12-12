// FUNCTIONS
function cronoInterval() {
    timer = setInterval(() => {
        seconds++;
        cronoElm.innerHTML = seconds;
    }, 1000)
}

// DOM ELEMENTS
const cronoElm = document.getElementById("crono");
const btnStartElm = document.getElementById("btn-start");
const btnStopElm = document.getElementById("btn-stop");
const btnPause = document.getElementById("btn-pause");
// VARIABLES
let seconds = 0;
// L'ID del setInterval
let timer;
let isCronInPause = false;

// DOM EVENTS
// Start
btnStartElm.addEventListener("click", function() {
    btnStartElm.disabled = true;
    btnStopElm.disabled = false;
    btnPause.disabled = false;

    seconds = 0;
    
    cronoInterval();
})

// Pause / Resume
btnPause.addEventListener("click", function() {
    isCronInPause = !isCronInPause;
    
    if(isCronInPause) {
        btnPause.innerHTML = "Resume";
        clearInterval(timer);
    } else {
        btnPause.innerHTML = "Pause";
        cronoInterval();
    }
})

// Stop
btnStopElm.addEventListener("click", function() {
    clearInterval(timer);
    btnStartElm.disabled = false;
    btnStopElm.disabled = true;
    btnPause.disabled = true;
    isCronInPause = false;
    btnPause.innerHTML = "Pause";
});