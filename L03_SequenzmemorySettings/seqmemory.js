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
    function createCard(_word) {
        input = prompt("enter your sequence");
        if (input == "" || input == null) {
            alert("Please enter a sequence.");
        }
        else {
            form.classList.add("hidden");
            startButton.classList.add("hidden");
            //let gamefield = document.createElement("div")
            //gamefield.classList.add("card-content");
            //let body = document.querySelector("body")
            //let timer = document.createElement("span");
            //timer.id = "timer";
            //body.append(gamefield);
            //body.append(timer);
            sequence = input.split("");
            var gamefield = document.createElement("div");
            gamefield.classList.add("row");
            for (var i = 0; i < input.length; i++) {
                var random = Math.floor(Math.random() * sequence.length);
                var card = document.createElement("div");
                card.classList.add("column");
                card.id = sequence.splice(random, 1).join();
                var test = ("<div class='card'>" + card.id + "</div>");
                card.innerHTML = test;
                // newdiv.classList.add("");
                //newdiv.style.background = document.getElementById('backgroundcolor').innerHTML;
                var body = document.querySelector("body");
                body.appendChild(gamefield);
                gamefield.appendChild(card);
                //document.body.style.backgroundColor = document.getElementById('backgroundcolor').innerHTML;
            }
            //createGame();
        }
    }
    function createGame() {
        timer = 5;
    }
})(L03_Sequenz || (L03_Sequenz = {}));
//# sourceMappingURL=seqmemory.js.map