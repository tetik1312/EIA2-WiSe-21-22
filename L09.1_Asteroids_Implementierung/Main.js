var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    var asteroids = []; //neuer Asteroid
    function handleLoad(_event) {
        console.log("Asteroids starting");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black"; //schwarzer HIntergrund
        L09_Asteroids.crc2.strokeStyle = "white"; //weiße Linien
        L09_Asteroids.createPaths(); //in Paths.ts
        console.log("Asteroids paths: ", L09_Asteroids.asteroidPaths); //Pfade werden ausgegeben
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        var hotspot = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        var asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (var _i = 0, asteroids_1 = asteroids; _i < asteroids_1.length; _i++) {
            var asteroid = asteroids_1[_i];
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (var i = 0; i < 2; i++) {
                var fragment = new L09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        var index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (var i = 0; i < _nAsteroids; i++) {
            var asteroid = new L09_Asteroids.Asteroid(1.0); //kreiere einen neuen Asteroid
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        for (var _i = 0, asteroids_2 = asteroids; _i < asteroids_2.length; _i++) {
            var asteroid = asteroids_2[_i];
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map