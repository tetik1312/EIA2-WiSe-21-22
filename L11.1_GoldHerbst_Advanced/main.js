/*
  Aufgabe: <L11.1_GoldenerHerbst: Advanced>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <13.01.2022>
  Quellen: <zusammengearbeitet mit Christina, Debbie und Lisa >
*/
var Advanced;
(function (Advanced) {
    Advanced.goldenCut = 0.62;
    var moveable = [];
    var imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        Advanced.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createLeafs(14);
        createSquirrels(4);
        createCloud();
        imageData = Advanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        var horizon = Advanced.crc2.canvas.height * Advanced.goldenCut;
        var posMountains = { x: 0, y: horizon };
        Advanced.drawBackground();
        Advanced.drawSun({ x: Advanced.crc2.canvas.width * .15, y: Advanced.crc2.canvas.height * .2 });
        Advanced.drawMountains(posMountains, 75, 200, "black", "white");
        Advanced.drawMountains(posMountains, 50, 150, "grey", "white");
        Advanced.drawPineTree(-30, -50, .6, .9);
        Advanced.drawPineTree(-70, -90, .5, .7);
    }
    function createLeafs(_nLeaf) {
        for (var index = 0; index < _nLeaf; index++) {
            var randomScaleY = 0.1 + Math.random() * (0.1 - 0.05);
            var randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            var randomVelocityX = (Math.random() - 0.5) * 3;
            var randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Advanced.Leaf({ x: Advanced.crc2.canvas.width, y: Advanced.crc2.canvas.height * -0.1 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    Advanced.createLeafs = createLeafs;
    function createNut(_event) {
        console.log(_event);
        var nut = new Advanced.Nut(new Vector(_event.clientX, _event.clientY));
        moveables.push(nut);
        var nutSpot = new Vector(_event.clientX, _event.clientY);
        nutPosition.push(nutSpot);
        console.log(nutPosition);
    }
    function createSquirrels(_nSquirrel) {
        for (var index = 0; index < _nSquirrel; index++) {
            var randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            var randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            var randomVelocityX = (Math.random() - 0.5) * 3;
            var randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Advanced.Squirrel({ x: Advanced.crc2.canvas.width / 2, y: Advanced.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .7, y: Advanced.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .10, y: Advanced.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .5, y: Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .2, y: Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Advanced.crc2.clearRect(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
        Advanced.crc2.putImageData(imageData, 0, 0);
        for (var index = 0; index < moveable.length; index++) {
            moveable[index].update();
            // moveable[index].draw();
        }
    }
})(Advanced || (Advanced = {}));
//# sourceMappingURL=main.js.map