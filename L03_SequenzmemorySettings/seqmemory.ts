namespace L03_Sequenz {
    
    let card: HTMLDivElement;
    let prepTime: number;
    let gameTime: number;
    let word: string;
    let sequence: string[];
    let timer: HTMLSpanElement;
    let gameField: HTMLDivElement;
    let formData: FormData;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("pointerup", createSequenz);
    }

    function createSequenz(_event: Event): void {

        formData = new FormData(document.forms[0]);
        console.log(formData);
        
        
        // prepTime = formData.get("prepTime");
        // word = formData.get("word");
        //gameTime = formData.get("gameTime");

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.innerHTML = " ";

    }

    function createCard(_word: Event): void {
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("card");
        card.classList.add("hidden");
        card.addEventListener("click", clickHandler);

    }

    function clickHandler(_event: Event): void {
        
    }

}