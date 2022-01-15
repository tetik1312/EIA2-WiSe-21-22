var Advanced;
(function (Advanced) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        Moveable.prototype.update = function () {
            //
        };
        Moveable.prototype.draw = function () {
            //
        };
        return Moveable;
    }());
    Advanced.Moveable = Moveable;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=moveable.js.map