"use strict";
/*
  Aufgabe: <L09.2_GoldenerHerbst: Classes>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <11.12.2021>
  Quellen: <zusammengearbeitet mit Christina, Debbie und Lisa >
*/
var L09_2_Classes;
(function (L09_2_Classes) {
    window.addEventListener("load", handleLoad);
    L09_2_Classes.golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_2_Classes.crc2 = canvas.getContext("2d");
        let horizon = L09_2_Classes.crc2.canvas.height * L09_2_Classes.golden;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawLeavesOrange();
        drawLeaves();
        drawPineTree(-10, -100);
        drawBush({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 3; index++) {
            drawSquirrel({ x: Math.random() * 1000, y: 250 + Math.random() * 100 });
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 0, L09_2_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_2_Classes.golden, "orange");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.fillRect(0, 0, L09_2_Classes.crc2.canvas.width, L09_2_Classes.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 60;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_2_Classes.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            L09_2_Classes.crc2.translate(x, y);
            L09_2_Classes.crc2.fill(particle);
            L09_2_Classes.crc2.restore();
        }
        L09_2_Classes.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorlow, _colorhigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.moveTo(0, 0);
        L09_2_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_2_Classes.crc2.lineTo(x, y);
        } while (x < L09_2_Classes.crc2.canvas.width);
        L09_2_Classes.crc2.lineTo(x, 0);
        L09_2_Classes.crc2.closePath();
        let gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorlow);
        gradient.addColorStop(0.6, _colorhigh);
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
    function drawPineTree(_min, _max) {
        let treesColors = ["#182E1A", "#224225", "#356E3C"];
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let horizon = L09_2_Classes.crc2.canvas.height * L09_2_Classes.golden;
        do {
            let y = -_min - Math.random() * (_max - _min);
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(x, y + (horizon + 30));
            //Stamm
            L09_2_Classes.crc2.fillStyle = "#473306";
            L09_2_Classes.crc2.fillRect(0, 0, 30, -40);
            let y1 = -40;
            let y2 = -100;
            for (let x = 0; x < 3; x++) {
                //triangle
                L09_2_Classes.crc2.beginPath();
                L09_2_Classes.crc2.moveTo(-50, y1);
                L09_2_Classes.crc2.lineTo(80, y1);
                L09_2_Classes.crc2.lineTo(15, y2);
                L09_2_Classes.crc2.closePath();
                L09_2_Classes.crc2.fillStyle = treesColors[x];
                L09_2_Classes.crc2.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            L09_2_Classes.crc2.restore();
        } while (x < L09_2_Classes.crc2.canvas.width);
    }
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let position = L09_2_Classes.crc2.canvas.height * L09_2_Classes.golden;
        do {
            let y = -_min - Math.random() * (_max - _min);
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(x, y + (position + 20));
            let nParticles = 60;
            let radiusParticle = 15;
            let particle = new Path2D();
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_position.x, _position.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L09_2_Classes.crc2.translate(x, y);
                L09_2_Classes.crc2.fill(particle);
                L09_2_Classes.crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            L09_2_Classes.crc2.restore();
        } while (x < L09_2_Classes.crc2.canvas.width);
    }
    function drawSquirrel(_position) {
        L09_2_Classes.crc2.resetTransform();
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.fillStyle = "brown";
        //tail
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.rotate(-0.3);
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.moveTo(-5, -5);
        L09_2_Classes.crc2.lineTo(-10, -15);
        L09_2_Classes.crc2.lineTo(-20, -20);
        L09_2_Classes.crc2.lineTo(-16, -25);
        L09_2_Classes.crc2.lineTo(-24, -30);
        L09_2_Classes.crc2.lineTo(-20, -35);
        L09_2_Classes.crc2.lineTo(-28, -40);
        L09_2_Classes.crc2.lineTo(-24, -45);
        L09_2_Classes.crc2.lineTo(-20, -50);
        L09_2_Classes.crc2.lineTo(0, -50);
        L09_2_Classes.crc2.lineTo(-5, -45);
        L09_2_Classes.crc2.lineTo(3, -40);
        L09_2_Classes.crc2.lineTo(0, -35);
        L09_2_Classes.crc2.lineTo(5, -30);
        L09_2_Classes.crc2.lineTo(10, -25);
        L09_2_Classes.crc2.lineTo(5, -20);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.stroke();
        L09_2_Classes.crc2.restore();
        //body
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.ellipse(5, -20, 10, 25, 10, 20, 40);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.stroke();
        //arm
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.ellipse(20, -20, 3, 6, 2, 10, 20);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.stroke();
        //leg
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.ellipse(-1, 5, 3, 10, 2, 20, 40);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.stroke();
        //head
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.ellipse(17, -40, 8, 10, 2, 20, 40);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.stroke();
        //eye
        let rEye = 2;
        L09_2_Classes.crc2.fillStyle = "#000000"; //ohr wird auch schwarz
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.arc(20, -40, rEye, 0, 2 * Math.PI);
        L09_2_Classes.crc2.lineWidth = 1;
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        //ear
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.moveTo(10, -45);
        L09_2_Classes.crc2.lineTo(15, -60);
        L09_2_Classes.crc2.lineTo(13, -40);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.stroke();
    }
    function drawLeavesOrange() {
        let nLeaves = 50;
        let r = 15;
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            let leaves = new Path2D();
            let x = Math.random() * 1000;
            let y = Math.random() * 1200;
            leaves.arc(x, y, r, 199, 50 * Math.PI);
            L09_2_Classes.crc2.fillStyle = "#DC7726";
            L09_2_Classes.crc2.fill(leaves);
        }
    }
    function drawLeaves() {
        let nLeaves = 50;
        let r = 15;
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            let leaves = new Path2D();
            let x = Math.random() * 1000;
            let y = Math.random() * 1200;
            leaves.ellipse(x, y, r, 4, 2, 10, 60);
            L09_2_Classes.crc2.fillStyle = "#C3AE2E";
            L09_2_Classes.crc2.fill(leaves);
        }
    }
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=main.js.map