"use strict";
var Polymorphie;
(function (Polymorphie) {
    function drawBackground() {
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, Polymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Polymorphie.golden, "orange");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fillRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
    }
    Polymorphie.drawBackground = drawBackground;
    function drawMountains(_position, _min, _max, _colorlow, _colorhigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_position.x, _position.y);
        Polymorphie.crc2.beginPath();
        Polymorphie.crc2.moveTo(0, 0);
        Polymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Polymorphie.crc2.lineTo(x, y);
        } while (x < Polymorphie.crc2.canvas.width);
        Polymorphie.crc2.lineTo(x, 0);
        Polymorphie.crc2.closePath();
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorlow);
        gradient.addColorStop(0.6, _colorhigh);
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fill();
        Polymorphie.crc2.restore();
    }
    Polymorphie.drawMountains = drawMountains;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = Polymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_position.x, _position.y);
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Polymorphie.crc2.fill();
        Polymorphie.crc2.restore();
    }
    Polymorphie.drawSun = drawSun;
    function drawPineTree(_min, _max) {
        let treesColors = ["#182E1A", "#224225", "#356E3C"];
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let horizon = Polymorphie.crc2.canvas.height * Polymorphie.golden;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(x, y + (horizon + 30));
            //Stamm
            Polymorphie.crc2.fillStyle = "#473306";
            Polymorphie.crc2.fillRect(0, 0, 30, -40);
            let y1 = -40;
            let y2 = -100;
            for (let x = 0; x < 3; x++) {
                //triangle
                Polymorphie.crc2.beginPath();
                Polymorphie.crc2.moveTo(-50, y1);
                Polymorphie.crc2.lineTo(80, y1);
                Polymorphie.crc2.lineTo(15, y2);
                Polymorphie.crc2.closePath();
                Polymorphie.crc2.fillStyle = treesColors[x];
                Polymorphie.crc2.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Polymorphie.crc2.restore();
        } while (x < Polymorphie.crc2.canvas.width);
    }
    Polymorphie.drawPineTree = drawPineTree;
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let position = Polymorphie.crc2.canvas.height * Polymorphie.golden;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(x, y + (position + 20));
            let nParticles = 60;
            let radiusParticle = 15;
            let particle = new Path2D();
            let gradient = Polymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(_position.x, _position.y);
            Polymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Polymorphie.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                Polymorphie.crc2.translate(x, y);
                Polymorphie.crc2.fill(particle);
                Polymorphie.crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Polymorphie.crc2.restore();
        } while (x < Polymorphie.crc2.canvas.width);
    }
    Polymorphie.drawBush = drawBush;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=background.js.map