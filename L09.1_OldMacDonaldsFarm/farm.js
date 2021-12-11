/*
  Aufgabe: <L09.1_OldMacDonaldsFarm>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <04.12.2021>
  Quellen: <zusammengearbeitet mit Christina, Debbie und Lisa >
*/
var OldMcDonald;
(function (OldMcDonald) {
    var counter = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        farmDay();
        document.querySelector("#nextDay").addEventListener("click", farmDay);
    }
    OldMcDonald.stock = [{
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
    function farmDay() {
        var dayCounter = document.querySelector("#counter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
        console.log("Day: " + counter);
        var cow = new OldMcDonald.Animal("Benita", "Cow", "moo");
        setTimeout(function () {
            cow.eat(50, 0);
            cow.sing(0);
        }, 200);
        var chicken = new OldMcDonald.Animal("Hannah", "Chicken", "cluck");
        setTimeout(function () {
            chicken.eat(2, 1);
            chicken.sing(1);
        }, 2500);
        var horse = new OldMcDonald.Animal("Rowdy", "Horse", "neigh");
        setTimeout(function () {
            horse.eat(50, 2);
            horse.sing(2);
        }, 5500);
        var pig = new OldMcDonald.Animal("Babe", "Pig", "oink");
        setTimeout(function () {
            pig.eat(20, 3);
            pig.sing(3);
        }, 7500);
        var cat = new OldMcDonald.Animal("Lokum", "Cat", "meow");
        setTimeout(function () {
            cat.eat(3, 4);
            cat.sing(4);
        }, 9500);
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=farm.js.map