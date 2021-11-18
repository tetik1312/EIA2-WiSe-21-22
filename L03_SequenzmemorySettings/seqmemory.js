//wurde gemeinsam bearbeitet mit: Lisa, Debbie, Tini
var L03_Sequenz;
(function (L03_Sequenz) {
    var form;
    var memoryField;
    var startButton;
    var sequence = [];
    var input;
    var timer;
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
        var formData = new FormData(document.forms[0]);
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
            var gamefield = document.createElement("div");
            gamefield.classList.add("row");
            var body = document.querySelector("body");
            body.appendChild(gamefield);
            for (var i = 0; i < input.length; i++) {
                var random = Math.floor(Math.random() * sequence.length);
                var card = document.createElement("div");
                card.classList.add("column");
                card.id = sequence.splice(random, 1).join();
                var test = ("<div class='card'>" + card.id + "</div>");
                card.innerHTML = test;
                gamefield.appendChild(card);
            }
            var timer_1 = document.createElement("TextField");
            timer_1.id = "timer";
            timer_1.innerHTML = "30 Sekunden";
            // Code for Countdown, maybe something like this
            // let timeleft = 10;
            // let timevalue = setInterval(function() {
            //    if(timeleft <= 0){
            //        clearInterval(timevalue);
            //    }
            //    document.getElementById("timer").value = 10 - timelft;
            //    timeleft -= 1;}, 1000);
            timer_1.classList.add("timer");
            body.appendChild(timer_1);
            window.setTimeout(startGame, 2000);
        }
    }
    function startGame() {
        // start the game here 
    }
})(L03_Sequenz || (L03_Sequenz = {}));
//# sourceMappingURL=seqmemory.js.map