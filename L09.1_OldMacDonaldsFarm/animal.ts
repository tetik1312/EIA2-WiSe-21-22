namespace OldMcDonald {

    let textDOMElement: HTMLElement;

    export class Animal {
        name: string;
        breed: string;
        sound: string;

        constructor(_name: string, _breed: string, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }


        eat(_foodAmount: number, _food: number): void {
            stockAmount[_food].amount = _foodAmount;
            textDOMElement = <HTMLElement>document.querySelector("#animal" + _food);
            textDOMElement.innerHTML = "The farmer has " + stockAmount[_food].amount + " " + "kg " + stockAmount[_food].name + " left.";

            let eating: HTMLElement = <HTMLElement>document.querySelector("#eating");
            eating.innerHTML = this.name + " eats" + _foodAmount + "kg" + stockAmount[_food].name + ".<br>";
        }

        sing(_foodAmount: number): void {
            let animalName: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let song: HTMLElement = <HTMLElement>document.querySelector("#song");

            animalName.innerHTML = this.breed + " " + this.name;
            song.innerHTML = "Old MacDonald had a farm" + " " + (this.sound + " ").repeat(5) + "," + "<br>" + "on his farm he had some " + this.breed + "'s " + " " + (this.sound + " ").repeat(5) + " ";
        }
    }
}