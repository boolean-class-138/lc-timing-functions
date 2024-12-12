// DOM ELEMENTS
const displayElm = document.getElementById("display");

// VARIABLES
let seconds = 10;

// MAIN
const intervalID = setInterval(() => {
    if(seconds === 0) {
        clearInterval(intervalID);
        displayElm.innerHTML = "🎉 Buon Anno 🎉";
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
    } else {
        displayElm.innerHTML = seconds;
        seconds--;
    }
}, 1000);