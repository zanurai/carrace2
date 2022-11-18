//alert('hello');

let game = document.getElementById("game");
let car = document.getElementById("car");
let racecar = document.getElementById("racecar");
let jeep = document.getElementById("jeep");
let result = document.getElementById("result");
let score = document.getElementById("score");
let counter = 0;
const accSound = new Audio("accident.mp3");
const musicSound = new Audio("music.mp3");
const raceSound = new Audio("race.mp3");

//display the car

car.addEventListener("animationiteration", (e) => {
    let random = (Math.floor(Math.random() * 3) * 130);
    car.style.left = random + 'px';

    counter++
    musicSound.play();
});

//display the jeep

jeep.addEventListener("animationiteration", (e) => {
    let random = (Math.floor(Math.random() * 4) * 160);
    jeep.style.left = random + "px";
    counter++
});

//moving the racecar

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        let racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

        if (racecarLeft < 300) {
            racecar.style.left = (racecarLeft + 130) + "px";

        }
        raceSound.play();
    }

    if (e.keyCode == "37") {
        let racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

        if (racecarLeft > 0) {
            racecar.style.left = (racecarLeft - 130) + 'px';
        }

        raceSound.play();
    }

});



setInterval(function gameover() {
    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue("top"));
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    let jeepTop = parseInt(window.getComputedStyle(jeep).getPropertyValue("top"));
    let jeepLeft = parseInt(window.getComputedStyle(jeep).getPropertyValue("left"));
    let racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));



    if ((jeepLeft === racecarLeft) && (jeepTop > 250) && (jeepTop < 470)) {

        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter}`;

        counter = 0;
    } else if ((carLeft === racecarLeft) && (carTop > 350) && (carTop < 570)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter}`;
        accSound.play();
        musicSound.pause();

        counter = 0;
    }
}, 50) 
