namespace OldMcDonald {
    let counter: number = 0;
    

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        farmDay();
        document.querySelector("#nextDay").addEventListener("click", farmDay);
    }


    export interface Stock {
        name: string;
        amount: number;
    }

    export let stockAmount: Stock[] = [{
        name: "hay",
        amount: 200
    },
    {
        name: "seed",
        amount: 30
    },
    {
        name: "grass",
        amount: 50
    },
    {
        name: "junk",
        amount: 300
    },
    {
        name: "forage",
        amount: 40
    }];


    function farmDay(): void {

        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#counter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
        console.log("Day: " + counter);


        let cow: Animal = new Animal("Benita", "Cow", "moo");
        setTimeout(function (): void {
            cow.eat(50, 0);
            cow.sing(50);
        },         200);

        let chicken: Animal = new Animal("Hannah", "Chicken", "cluck");
        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(0);
        },             2500);

        let horse: Animal = new Animal("Rowdy", "Horse", "neigh");
        setTimeout(function (): void {
            horse.eat(50, 2);
            horse.sing(0);
        },             5500);

        let pig: Animal = new Animal("Babe", "Pig", "oink");
        setTimeout(function (): void {
            pig.eat(20, 3);
            pig.sing(0);
        },             7500);

        let cat: Animal = new Animal("Lokum", "Cat", "meow");
        setTimeout(function (): void {
            cat.eat(3, 4);
            cat.sing(0);
        },             9500);
    }
}