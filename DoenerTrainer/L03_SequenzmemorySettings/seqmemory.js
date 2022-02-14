"use strict";
//wurde gemeinsam bearbeitet mit: Lisa, Debbie, Tini
var L03_Sequenz;
(function (L03_Sequenz) {
    let form;
    let memoryField;
    let startButton;
    let sequence = [];
    let input;
    let timer;
    // let formData: FormData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        form = document.querySelector("#settings");
        form.addEventListener("change", clickHandler);
        memoryField = document.querySelector("#field");
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createCard);
    }
    function clickHandler(_event) {
        let formData = new FormData(document.forms[0]);
    }
    function createCard(_sequence) {
        input = prompt("enter your sequence");
        if (input == "" || input == null) {
            alert("Please enter a sequence.");
        }
        else {
            form.classList.add("hidden");
            startButton.classList.add("hidden");
            sequence = input.split("");
            let gamefield = document.createElement("div");
            gamefield.classList.add("row");
            let body = document.querySelector("body");
            body.appendChild(gamefield);
            for (let i = 0; i < input.length; i++) {
                let random = Math.floor(Math.random() * sequence.length);
                let card = document.createElement("div");
                card.classList.add("column");
                card.id = sequence.splice(random, 1).join();
                let test = ("<div class='card'>" + card.id + "</div>");
                card.innerHTML = test;
                gamefield.appendChild(card);
            }
            let timer = document.createElement("TextField");
            timer.id = "timer";
            timer.innerHTML = "30 Sekunden";
            // Code for Countdown, maybe something like this
            // let timeleft = 10;
            // let timevalue = setInterval(function() {
            //    if(timeleft <= 0){
            //        clearInterval(timevalue);
            //    }
            //    document.getElementById("timer").value = 10 - timelft;
            //    timeleft -= 1;}, 1000);
            timer.classList.add("timer");
            body.appendChild(timer);
            window.setTimeout(startGame, 2000);
        }
    }
    function startGame() {
        // start the game here 
    }
})(L03_Sequenz || (L03_Sequenz = {}));
//# sourceMappingURL=seqmemory.js.map