import GoblinPortrait from '../portraits/enemies/Goblin.png';
import TrollPortrait from '../portraits/enemies/Troll.png';

export const Goblin = (enemy) => { 
    enemy.maxMana = 100;
    enemy.strength = 100;
    enemy.agility = 200;
    enemy.speed = 150;
    enemy.defense = 100;
    enemy.race = 'Goblin';
    enemy.portrait = GoblinPortrait;
    return enemy;
}

export const Troll = (enemy) => { 
    enemy.maxHealth = 200;
    enemy.maxMana = 70;
    enemy.strength = 100;
    enemy.agility = 70
    enemy.speed = 50;
    enemy.defense = 150;
    enemy.race = 'Troll';
    enemy.portrait = TrollPortrait
    return enemy;
}