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

    function createCard(_word: Event): void {
        input = prompt("enter your sequenz");
        if (input == "" || input == null) {
            alert("your funny bro, enter a sequenz");
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
            let gamefield: HTMLDivElement = document.createElement("div");
            gamefield.classList.add("row");
            for (let i: number = 0; i < input.length; i++) {
                let random: number = Math.floor(Math.random() * sequence.length);
                let card: HTMLDivElement = document.createElement("div");
                card.classList.add("column");
                card.id = sequence.splice(random, 1).join();
                let test: string = ("<div class='card'>" + card.id + "</div>");
                card.innerHTML = test;
                // newdiv.classList.add("");
                //newdiv.style.background = document.getElementById('backgroundcolor').innerHTML;
                let body: HTMLBodyElement = document.querySelector("body");
                body.appendChild(gamefield);
                gamefield.appendChild(card);
                //document.body.style.backgroundColor = document.getElementById('backgroundcolor').innerHTML;
            }
            //createGame();
        }
    }

    function createGame(): void {
        timer = 5;
    }
}