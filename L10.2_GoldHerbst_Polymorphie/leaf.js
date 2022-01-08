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
var Polymorphie;
(function (Polymorphie) {
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
        Leaf.prototype.draw = function () {
            var nLeaves = 50;
            var r = 15;
            for (var drawn = 0; drawn < nLeaves; drawn++) {
                var leaves = new Path2D();
                var x = Math.random() * 1000;
                var y = Math.random() * 1200;
                leaves.ellipse(x, y, r, 4, 2, 10, 60);
                Polymorphie.crc2.fillStyle = "#C3AE2E";
                Polymorphie.crc2.fill(leaves);
            }
        };
        Leaf.prototype.update = function () {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height || this.posY < Polymorphie.crc2.canvas.height * 0.65) {
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
            this.draw();
        };
        return Leaf;
    }(Polymorphie.Moveable));
    Polymorphie.Leaf = Leaf;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=leaf.js.map