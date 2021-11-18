//zusammengearbeitet mit: debbie, tini, lisa
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    var crc2;
    var button;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        button = document.querySelector("#button");
        button.addEventListener("click", reloadButton);
        for (var i = 0; i < 40; i++) {
            var x = Math.random() * 800;
            var y = Math.random() * 400;
            drawTriangle(x, y);
            var a = Math.random() * 800;
            var b = Math.random() * 400;
            drawCircle(a, b);
            var c = Math.random() * 800;
            var d = Math.random() * 400;
            drawLines(c, d);
            var e = Math.random() * 800;
            var f = Math.random() * 400;
            drawLine(e, f);
            var g = Math.random() * 800;
            var h = Math.random() * 400;
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