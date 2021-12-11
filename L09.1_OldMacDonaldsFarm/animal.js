var OldMcDonald;
(function (OldMcDonald) {
    var textDOMElement;
    var Animal = /** @class */ (function () {
        function Animal(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        //code funktioniert nicht wenn methode eat auskommentiert ist (liedtext erscheint dadurch nicht)       
        Animal.prototype.eat = function (_amount, _foodPosition) {
            // stock[_foodPosition].amount = _amount;
            // textDOMElement = <HTMLElement>document.querySelector("#animal" + _foodPosition);
            // textDOMElement.innerHTML = "The farmer has " + stock[_foodPosition].amount + "kg " + stock[_foodPosition].name + " left.";
            // let eating: HTMLElement = <HTMLElement>document.querySelector("#eating");
            // eating.innerHTML = this.name + " eats" + stock[_foodPosition].name + ".<br>";
        };
        //es erscheint ein error für repeat, aber es funktioniert?
        Animal.prototype.sing = function (_food) {
            var animalName = document.querySelector("#animalName");
            var song = document.querySelector("#song");
            animalName.innerHTML = this.breed + " " + this.name;
            // song.innerHTML = "Old MacDonald had a farm" + " " + (this.sound + " ").repeat(5) + "," + "<br>" + "on his farm he had some " + this.breed + "'s " + " " + (this.sound + " ").repeat(5) + " ";
        };
        return Animal;
    }());
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map