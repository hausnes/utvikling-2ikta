"use strict";
let warrior = {
    name: 'Warrior',
    health: 100,
    weapon: 'Sword',
    attack: () => console.log('Attacking with sword')
};
let mage = {
    name: 'Mage',
    health: 80,
    spell: 'Fireball',
    attack: () => console.log('Casting fireball')
};
warrior.attack();
mage.attack();
