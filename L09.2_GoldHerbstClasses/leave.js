var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L09_2_Classes;
(function (L09_2_Classes) {
    var Leaf = /** @class */ (function (_super) {
        __extends(Leaf, _super);
        function Leaf(_position, _velocity, _randomScale) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            _this.counter = 0;
            _this.randomScaleX = _randomScale.x;
            _this.randomScaleY = _randomScale.y;
            return _this;
        }
        Leaf.prototype.update = function () {
            if (this.posX > L09_2_Classes.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L09_2_Classes.crc2.canvas.height || this.posY < L09_2_Classes.crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.drawLeavesOrange();
            this.drawLeaves();
        };
        Leaf.prototype.drawLeavesOrange = function () {
            var nLeaves = 50;
            var r = 15;
            for (var drawn = 0; drawn < nLeaves; drawn++) {
                var leaves = new Path2D();
                var x = Math.random() * 1000;
                var y = Math.random() * 1200;
                leaves.arc(x, y, r, 199, 50 * Math.PI);
                L09_2_Classes.crc2.fillStyle = "#DC7726";
                L09_2_Classes.crc2.fill(leaves);
            }
        };
        Leaf.prototype.drawLeaves = function () {
            var nLeaves = 50;
            var r = 15;
            for (var drawn = 0; drawn < nLeaves; drawn++) {
                var leaves = new Path2D();
                var x = Math.random() * 1000;
                var y = Math.random() * 1200;
                leaves.ellipse(x, y, r, 4, 2, 10, 60);
                L09_2_Classes.crc2.fillStyle = "#C3AE2E";
                L09_2_Classes.crc2.fill(leaves);
            }
        };
        return Leaf;
    }(L09_2_Classes.Vector));
    L09_2_Classes.Leaf = Leaf;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=leave.js.map