var OldMcDonald;
(function (OldMcDonald) {
    var textDOMElement;
    var Animal = /** @class */ (function () {
        function Animal(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        Animal.prototype.eat = function (_foodAmount, _food) {
            OldMcDonald.stockAmount[_food].amount = _foodAmount;
            textDOMElement = document.querySelector("#animal" + _food);
            textDOMElement.innerHTML = "The farmer has " + OldMcDonald.stockAmount[_food].amount + " " + "kg " + OldMcDonald.stockAmount[_food].name + " left.";
            var eating = document.querySelector("#eating");
            eating.innerHTML = this.name + " eats" + _foodAmount + "kg" + OldMcDonald.stockAmount[_food].name + ".<br>";
        };
        Animal.prototype.sing = function (_foodAmount) {
            var animalName = document.querySelector("#animalName");
            var song = document.querySelector("#song");
            animalName.innerHTML = this.breed + " " + this.name;
            song.innerHTML = "Old MacDonald had a farm" + " " + (this.sound + " ").repeat(5) + "," + "<br>" + "on his farm he had some " + this.breed + "'s " + " " + (this.sound + " ").repeat(5) + " ";
        };
        return Animal;
    }());
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=animal.js.map