//wurde gemeinsam bearbeitet mit: Lisa, Debbie, Tini
namespace L03_Sequenz {

    let form: HTMLElement;
    let memoryField: HTMLElement;
    let startButton: HTMLElement;
    let sequence: string[] = [];
    let input: string;
    let timer: number;
    // let formData: FormData;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        form = <HTMLElement>document.querySelector("#settings");
        form.addEventListener("change", clickHandler);
        memoryField = <HTMLDivElement>document.querySelector("#field");
        startButton = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", createCard);
    }

    function clickHandler(_event: Event): void {

        let formData: FormData = new FormData(document.forms[0]);
    }

    function createCard(_sequence: Event): void {
        input = prompt("enter your sequence");
        if (input == "" || input == null) {
            alert("Please enter a sequence.");
        }
        else {
            form.classList.add("hidden");
            startButton.classList.add("hidden");
            sequence = input.split("");
            let gamefield: HTMLDivElement = document.createElement("div");
            gamefield.classList.add("row");
            let body: HTMLBodyElement = document.querySelector("body");
            body.appendChild(gamefield);
            for (let i: number = 0; i < input.length; i++) {
                let random: number = Math.floor(Math.random() * sequence.length);
                let card: HTMLDivElement = document.createElement("div");
                card.classList.add("column");
                card.id = sequence.splice(random, 1).join();
                let test: string = ("<div class='card'>" + card.id + "</div>"); 
                card.innerHTML = test;
                gamefield.appendChild(card);
            }
            let timer: HTMLElement = document.createElement("TextField");
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
}
