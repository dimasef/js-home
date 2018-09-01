"use strict";

(function () {
	function Planet(planetName) {
        var populationMultiplyRate = Math.floor(Math.random() * 10) + 1;

        var randomPopulation = function(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        };

        this.planet = planetName;
        this.population = randomPopulation(0, 1e7);

        this.growPopulation = function() {
            var born = populationMultiplyRate * 100
            this.population += born;
            console.log(`за один цикл прибавилось столько населения на планете "${this.planet}": `, this.population);
        };

        this.Cataclysm = function() {
            var die = populationMultiplyRate * 10000;
            this.population -=  die;
            console.log(`от катаклизма погибло  ${die} человек на планете "${this.planet}" `, this.population);
        };

        this.rotatePlanet = function() {
            let randomNumber = Math.floor(Math.random() * 1000) + 1;
            if ( (randomNumber % 2) == 0) {
                this.growPopulation();
            } else {
                this.Cataclysm();
            }
        };
    }
    
    var ard1003Hg = new Planet('ard1003Hg');

    ard1003Hg.rotatePlanet();
})();