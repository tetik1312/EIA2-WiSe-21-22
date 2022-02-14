"use strict";
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
    let moveable = [];
    let imageData;
    let horizon = Polymorphie.crc2.canvas.height * Polymorphie.golden;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Polymorphie.crc2 = canvas.getContext("2d");
        // let horizon: number = crc2.canvas.height * golden;
        createBackground();
        createLeaves(20);
        createSquirrel(6);
        createCloud();
        imageData = Polymorphie.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
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
        for (let i = 0; i < _nleaf; i++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Polymorphie.Leaf({ x: Polymorphie.crc2.canvas.width / 2, y: Polymorphie.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    Polymorphie.createLeaves = createLeaves;
    function createSquirrel(_nSquirrel) {
        for (let index = 0; index < _nSquirrel; index++) {
            let randomScaleY = 0.90 + Math.random() * (0.30 - 0.10);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 2;
            let randomVelocityY = (Math.random() - 0.5) * 3;
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
        Polymorphie.crc2.putImageData(imageData, 0, 0);
        for (let i = 0; i < moveable.length; i++) {
            moveable[i].draw();
            moveable[i].update();
        }
    }
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=main.js.map