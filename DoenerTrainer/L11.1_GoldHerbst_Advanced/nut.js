"use strict";
var Advanced;
(function (Advanced) {
    class Nut extends Advanced.Moveable {
        constructor(_position) {
            super(_position);
        }
        drawNuts() {
            Advanced.crc2.save();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "brown";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
    }
    Advanced.Nut = Nut;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=nut.js.map