namespace L03_Sequenz {
    
    let form: HTMLElement;
    let memoryField: HTMLElement;
    let startButton: HTMLElement;
    let sequence: string[] = [];
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
        
        // sequence = [];

        // for (let entry of formData) {
        //     sequence.push(String(entry[1]));
        //     console.log(entry);
        // }    
    }

    function createCard(_word: Event): void {
        form.classList.add("hidden");
        startButton.classList.add("hidden");


    }


}