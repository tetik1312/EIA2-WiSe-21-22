var Polymorphie;
(function (Polymorphie) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        Moveable.prototype.draw = function () {
            //
        };
        Moveable.prototype.update = function () {
            //
        };
        return Moveable;
    }());
    Polymorphie.Moveable = Moveable;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=moveable.js.map