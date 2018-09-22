"use strict";

let superPowers = [
    { name:'Invisibility', spell: function(){ return `${this.name} hide from you`} },
    { name:'superSpeed', spell: function(){ return `${this.name} running from you`} },
    { name:'superSight', spell: function(){ return `${this.name} see you`} },
    { name:'superFroze', spell: function(){ return `${this.name} will froze you`} },
    { name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} },
];

class SuperDude {
    constructor(name, superPover) {
        Object.defineProperty(this, name, { value: name, writable: false });
        superPover.map(pover => {
            Object.defineProperty(this, pover.name, { 
                value: pover.spell
            });
        });
        console.log(this);
    }
}

let Valera = new SuperDude('Valera',superPowers);
