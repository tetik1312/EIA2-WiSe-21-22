"use strict";
var Advanced;
(function (Advanced) {
    function drawBackground() {
        let gradient = Advanced.crc2.createLinearGradient(0, 0, 0, Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Advanced.goldenCut, "orange");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        Advanced.crc2.fillStyle = gradient;
        Advanced.crc2.fillRect(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
    }
    Advanced.drawBackground = drawBackground;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Advanced.crc2.save();
        Advanced.crc2.translate(_position.x, _position.y);
        Advanced.crc2.beginPath();
        Advanced.crc2.moveTo(0, 0);
        Advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Advanced.crc2.lineTo(x, y);
        } while (x < Advanced.crc2.canvas.width);
        Advanced.crc2.lineTo(x, 0);
        Advanced.crc2.closePath();
        let gradient = Advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Advanced.crc2.fillStyle = gradient;
        Advanced.crc2.fill();
        Advanced.crc2.restore();
    }
    Advanced.drawMountains = drawMountains;
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 70;
        let gradient = Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#fdffd1");
        gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
        Advanced.crc2.save();
        Advanced.crc2.translate(_position.x, _position.y);
        Advanced.crc2.fillStyle = gradient;
        Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Advanced.crc2.fill();
        Advanced.crc2.restore();
    }
    Advanced.drawSun = drawSun;
    function drawPineTree(_min, _max, _minSize, _maxSize) {
        let stepMin = 30;
        let stepMax = 70;
        let x = 0;
        let horizon = Advanced.crc2.canvas.height * Advanced.goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Advanced.crc2.save();
            Advanced.crc2.translate(x, y + (horizon + 15));
            let yTree1 = -40;
            let yTree2 = -120;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            Advanced.crc2.scale(treeSize, treeSize);
            Advanced.crc2.fillStyle = "#544026";
            Advanced.crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                Advanced.crc2.beginPath();
                Advanced.crc2.moveTo(-50, yTree1);
                Advanced.crc2.lineTo(72, yTree1);
                Advanced.crc2.lineTo(11, yTree2);
                Advanced.crc2.closePath();
                Advanced.crc2.fillStyle = treeColor[z];
                Advanced.crc2.fill();
                yTree1 += -40;
                yTree2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Advanced.crc2.restore();
        } while (x < Advanced.crc2.canvas.width);
    }
    Advanced.drawPineTree = drawPineTree;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=background.js.map