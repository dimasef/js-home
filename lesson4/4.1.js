"use strict";

let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look']
    }
  };
  
//Object.freeze(universe);
//niverse.evil.status = "bad";


//console.log(universe);
const DeepFreeze = obj => {
    Object.freeze(obj);
    let items = Object.getOwnPropertyNames(obj);
    items.map(item => {
        if(typeof item == 'object' && item !== null)
            return DeepFreeze(item);
    });
    return obj;
};

let FarGalaxy = DeepFreeze(universe);
      FarGalaxy.good.push('javascript'); // true
      FarGalaxy.something = 'Wow!'; // false
      FarGalaxy.evil.humans = [];   // false
