"use strict";
var Aufgabe01;
(function (Aufgabe01) {
    let subjekte = ["Spongebob", "Patrick", "Sandy", "Mr.Krabs", "Thaddäus", "Plankton"];
    let prädikate = ["brät", "schläft", "baut", "zählt", "übt", "klaut"];
    let objekte = ["Krabbenburger", "unter dem Stein", "eine Rakete", "sein Geld", "die Klarinette", "die Formel"];
    // console.log(subjekte);
    // console.log(prädikate);
    // console.log(objekte);
    for (let i = subjekte.length; i > 0; i--) {
        let poem = getVerse(subjekte, prädikate, objekte);
        console.log(poem);
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        let vers = "";
        let randomSubjekte = Math.floor(Math.random() * _subjekte.length);
        let randomPrädikate = Math.floor(Math.random() * _prädikate.length);
        let randomObjekte = Math.floor(Math.random() * _objekte.length);
        vers += _subjekte.splice(randomSubjekte, 1) + " ";
        vers += _prädikate.splice(randomPrädikate, 1) + " ";
        vers += _objekte.splice(randomObjekte, 1) + " ";
        return vers;
    }
})(Aufgabe01 || (Aufgabe01 = {}));
//# sourceMappingURL=poem.js.map