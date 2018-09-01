"use strict";

(function () {
    
	class Animal {
        constructor(name, animalType, phrase, foodType) {
            this.name = name;
            this.animalType = animalType;
            this.phrase = phrase;
            this.foodType = foodType;
        }
    }

    class Mammals extends Animal {
        constructor(name, animalType, phrase, foodType, speed) {
            super(name, animalType, phrase, foodType);
            this.speed = speed;
            this.zone = 'mammals';
        }
        run() {
            console.log(`${this.animalType} ${this.name} run with speed ${this.speed} km/h`);
        }
    }

    class Birds extends Animal {
        constructor(name, animalType, phrase, foodType, speed) {
            super(name, animalType, phrase, foodType);
            this.speed = speed;
            this.zone = 'birds';
        }
        fly() {
            console.log(`${this.animalType} ${this.name} fly with speed ${this.speed} km/h`);
        }
    }

    class Fishes extends Animal {
        constructor(name, animalType, phrase, foodType, speed) {
            super(name, animalType, phrase, foodType);
            this.speed = speed;
            this.zone = 'fishes';
        }
        swim() {
            console.log(`${this.animalType} ${this.name} swim with speed ${this.speed} km/h`);
        }
    }

    class Reptile extends Animal {
        constructor(name, animalType, phrase, foodType, speed) {
            super(name, animalType, phrase, foodType);
            this.speed = speed;
            this.zone = 'reptile';
        }
        run() {
            console.log(`${this.animalType} ${this.name} run with speed ${this.speed} km/h`);
        }
    }

    class Zoo {
        constructor(name) {
            this.name = name;
            this.AnimalCount = 100;
            this.zones = {
                mammals: [],
                birds: [],
                fishes: [],
                reptile: [],
                others: []
            };
        }

        addAnimal(animalObj) {
            let zone = (animalObj.zone) ? animalObj.zone : 'others';
            this.zones[zone].push(Object.assign({}, animalObj)); 
            this.AnimalCount++;
            console.log(this.zones);
        }
        
        removeAnimal(animalName) {
            let index = 0;
            for(let key in this.zones) {
                this.zones[key].map(element => {
                    if(element.name === animalName) {
                        index = this.zones[key].indexOf(element);
                        this.zones[key].splice(index, 1);
                        this.AnimalCount--;
                        break;
                    } else console("there is no such animal");
                });
            }
            console.log(this.zones);
        }

        getAnimal(type, value) {
            if(type == 'name') {
                for(let key in this.zones) {
                    this.zones[key].map(element => {
                        if(element.name == value) {
                            console.log(element);
                        }
                    });
                }
            }
            else if(type == 'type') {
                for(let key in this.zones) {
                    this.zones[key].map(element => {
                        if(element.animalType == value) {
                            console.log(element);
                        }
                    });
                }
            }
        }

        countAnimals() {
            console.log(this.AnimalCount);
        }
    }

    let dizoo = new Zoo('Di-Zoo');
    
    let woolf = new Mammals('Rex', 'woolf', 'woof', 'herbivore', 15);
    let woolf1 = new Mammals('Noel', 'woolf', 'woof', 'herbivore', 13);
    dizoo.addAnimal(woolf);
    dizoo.addAnimal(woolf1);
    //dizoo.removeAnimal('Rex');
    dizoo.getAnimal('type', 'woolf');
    dizoo.countAnimals();
})();