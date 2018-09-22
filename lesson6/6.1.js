"use strict";

class Human {
    constructor(name){
      this.name = name;
      this.currentTemperature = 0;
      this.minTemperature = -10;
      this.maxTemperature = 60;

      console.log(`new Human ${this.name} arrived!`, this);
    }
    changeTemperature(changeValue){
      console.log(
        'current', this.currentTemperature + changeValue,
        'min', this.minTemperature,
        'max', this.maxTemperature
      );

      let prevTemperature = this.currentTemperature;
      this.currentTemperature = this.currentTemperature + changeValue;
      
      if( this.currentTemperature < this.minTemperature || this.currentTemperature > this.maxTemperature) {
        console.error(`Temperature is too extremely abnormal: ${this.currentTemperature}. ${this.name} died :(`);
      } else {
        if( this.currentTemperature > prevTemperature  ) {
          console.log(`Temperature is growing. Seems someone go to Odessa or drink some hot tea?`);
        } else {
          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);
        }
      }
    }
  }

  let Debra = new Human('Debra');
      Debra.changeTemperature(-5);
      Debra.changeTemperature(6);

  class DressedHuman extends Human{
    constructor(name){
      super(name);
      this.clothes = [
        { name: 'jacket', temperatureResistance: 20},
        { name: 'hat', temperatureResistance: 5},
        { name: 'scarf', temperatureResistance: 10},
      ];
      this.minTemperature = this.minTemperature - this.clothes.reduce(
          (currentResistance, clothe ) => {
            console.log('currentResistance', currentResistance,  'clothe', clothe);
            return currentResistance + clothe.temperatureResistance;
          }, 0
        );
      console.log(`Dressed Human ${name}`, this);
    }
  }

  class СoolerHuman extends Human{
    constructor(name){
      super(name);
      this.coolers = [
        { name: 'icecream', temperatureCoolRate: -10},
        { name: 'whater', temperatureCoolRate: -5},
        { name: 'bucketWithIce', temperatureCoolRate: -25},
      ];
      this.maxTemperature = this.maxTemperature + this.coolers.reduce(
          (currentResistance, coolers ) => {
            console.log('currentResistance', currentResistance,  'coolers', coolers);
            return currentResistance - coolers.temperatureCoolRate;
          }, 0
        );
      console.log(`Сooler Human ${name}`, this);
    }
  }

  let David = new СoolerHuman('David');
    David.changeTemperature(30);
    David.changeTemperature(72);


