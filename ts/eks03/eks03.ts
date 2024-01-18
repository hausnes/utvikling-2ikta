interface Character {
    name: string;
    health: number;
    attack: () => void;
}

interface Warrior extends Character {
    weapon: string;
}

interface Mage extends Character {
    spell: string;
}

let warrior: Warrior = {
    name: 'Warrior',
    health: 100,
    weapon: 'Sword',
    attack: () => console.log('Attacking with sword')
};

let mage: Mage = {
    name: 'Mage',
    health: 80,
    spell: 'Fireball',
    attack: () => console.log('Casting fireball')
};

warrior.attack();
mage.attack();