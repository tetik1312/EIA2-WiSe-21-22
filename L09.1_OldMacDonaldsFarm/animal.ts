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

        //code funktioniert nicht wenn methode eat auskommentiert ist (liedtext erscheint dadurch nicht)       
        eat(_amount: number, _foodPosition: number): void {
            // stock[_foodPosition].amount = _amount;
            // textDOMElement = <HTMLElement>document.querySelector("#animal" + _foodPosition);
            // textDOMElement.innerHTML = "The farmer has " + stock[_foodPosition].amount + "kg " + stock[_foodPosition].name + " left.";

            // let eating: HTMLElement = <HTMLElement>document.querySelector("#eating");
            // eating.innerHTML = this.name + " eats" + stock[_foodPosition].name + ".<br>";
        }


        //es erscheint ein error für repeat, aber es funktioniert?
        sing(_food: number): void {
            let animalName: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let song: HTMLElement = <HTMLElement>document.querySelector("#song");

            animalName.innerHTML = this.breed + " " + this.name;
            // song.innerHTML = "Old MacDonald had a farm" + " " + (this.sound + " ").repeat(5) + "," + "<br>" + "on his farm he had some " + this.breed + "'s " + " " + (this.sound + " ").repeat(5) + " ";
        }
    }
}