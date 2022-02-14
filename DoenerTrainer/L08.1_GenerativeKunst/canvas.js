"use strict";
/*
  Aufgabe: <L08.1 Generative Art>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <20.11.2021>
  Quellen: <zusammengearbeitet mit Christina Gabler, Deborah Reinbold und Lisa Fingerle>
  */
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let button;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        button = document.querySelector("#button");
        button.addEventListener("click", reloadButton);
        for (let i = 0; i < 40; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 400;
            drawTriangle(x, y);
            let a = Math.random() * 800;
            let b = Math.random() * 400;
            drawCircle(a, b);
            let c = Math.random() * 800;
            let d = Math.random() * 400;
            drawLines(c, d);
            let e = Math.random() * 800;
            let f = Math.random() * 400;
            drawLine(e, f);
            let g = Math.random() * 800;
            let h = Math.random() * 400;
            word(g, h);
        }
    }
    function reloadButton() {
        window.location.reload();
    }
    function generateColor() {
        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            +
                Math.floor(Math.random() * 255) + ")";
        return color;
    }
    function drawTriangle(_x, _y) {
        crc2.fillStyle = generateColor();
        crc2.strokeStyle = "#F7D358";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 35);
        crc2.lineTo(_x + 40, _y + 17);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawCircle(_a, _b) {
        crc2.fillStyle = generateColor();
        crc2.strokeStyle = "#FE642E";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.arc(_a, _b, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawLines(_c, _d) {
        crc2.strokeStyle = generateColor();
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_c, _d);
        crc2.lineTo(300, 150);
        crc2.stroke();
    }
    function drawLine(_e, _f) {
        crc2.strokeStyle = generateColor();
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_e, _f);
        crc2.lineTo(100, 350);
        crc2.stroke();
    }
    function word(_g, _h) {
        crc2.font = "30px Arial";
        crc2.strokeText("Party", _g, _h);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=canvas.js.map