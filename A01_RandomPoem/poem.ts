namespace Aufgabe01 {

    let subjekte: string[] = ["Spongebob", "Patrick", "Sandy", "Mr.Krabs", "Thaddäus", "Plankton"];
    let prädikate: string[] = ["brät", "schläft", "baut", "zählt", "übt", "klaut"];
    let objekte: string[] = ["Krabbenburger", "unter dem Stein", "eine Rakete", "sein Geld", "die Klarinette", "die Formel"];

    // console.log(subjekte);
    // console.log(prädikate);
    // console.log(objekte);

    for (let i: number = subjekte.length; i > 0; i--) {
        let poem: string = getVerse(subjekte, prädikate, objekte);
        console.log(poem);
    }

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        let vers: string = "";

        let randomSubjekte: number = Math.floor(Math.random() * subjekte.length);
        let randomPrädikate: number = Math.floor(Math.random() * prädikate.length);
        let randomObjekte: number = Math.floor(Math.random() * objekte.length);
       
        vers += _subjekte.splice(randomSubjekte, 1) + " ";
        vers += _prädikate.splice(randomPrädikate, 1) + " ";
        vers += _objekte.splice(randomObjekte, 1) + " ";


        return vers;
    }

}