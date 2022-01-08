/*
  Aufgabe: <L10.2_GoldenerHerbst: Polymorphie>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <08.01.2022>
  Quellen: <zusammengearbeitet mit Christina, Debbie und Lisa >
*/
var Polymorphie;
(function (Polymorphie) {
    Polymorphie.golden = 0.62;
    var moveable = [];
    var horizon = Polymorphie.crc2.canvas.height * Polymorphie.golden;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        Polymorphie.crc2 = canvas.getContext("2d");
        // let horizon: number = crc2.canvas.height * golden;
        createBackground();
        createLeaves(20);
        createSquirrel(6);
        createCloud();
        animate();
        //     for (let index: number = 0; index < 3; index++) {
        //         drawSquirrel({ x: Math.random() * 1000, y: 250 + Math.random() * 100 });
        //    }
    }
    function createBackground() {
        Polymorphie.drawBackground();
        Polymorphie.drawSun({ x: 100, y: 75 });
        Polymorphie.drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        Polymorphie.drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        Polymorphie.drawPineTree(-10, -100);
        Polymorphie.drawBush({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 300);
    }
    function createLeaves(_nleaf) {
        for (var i = 0; i < _nleaf; i++) {
            var randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            var randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            var randomVelocityX = (Math.random() - 0.5) * 3;
            var randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Polymorphie.Leaf({ x: Polymorphie.crc2.canvas.width / 2, y: Polymorphie.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createSquirrel(_nSquirrel) {
        for (var index = 0; index < _nSquirrel; index++) {
            var randomScaleY = 0.90 + Math.random() * (0.30 - 0.10);
            var randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            var randomVelocityX = (Math.random() - 0.5) * 2;
            var randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Polymorphie.Squirrel({ x: Polymorphie.crc2.canvas.width / 2, y: Polymorphie.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .7, y: Polymorphie.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .10, y: Polymorphie.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .5, y: Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .2, y: Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Polymorphie.crc2.clearRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
        for (var i = 0; i < moveable.length; i++) {
            moveable[i].draw();
            moveable[i].update();
        }
    }
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=main.js.map