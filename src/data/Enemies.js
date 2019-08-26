import NagaPortrait from '../portraits/enemies/Naga.png';
import DragonPortrait from '../portraits/enemies/Dragon.png';
import DivineGuardianPortrait from '../portraits/enemies/DivineGuardian.png';
import FireLordPortrait from '../portraits/enemies/FireLord.png';
import GoblinPortrait from '../portraits/enemies/Goblin.png';
import OrcPortrait from '../portraits/enemies/Orc.png';

export const Naga = (enemy) => {
    enemy.maxHealth = 150;
    enemy.maxMana = 50;
    enemy.strength = 50;
    enemy.agility = 150;
    enemy.speed = 200;
    enemy.defense = 100;
    enemy.class = 'Naga';
    enemy.portrait = NagaPortrait
    return enemy;
}

export const Dragon = (enemy) => {
    enemy.maxHealth = 300;
    enemy.maxMana = 50;
    enemy.strength = 200;
    enemy.agility = 50;
    enemy.speed = 50;
    enemy.defense = 150;
    enemy.class = 'Dragon';
    enemy.portrait = DragonPortrait
    return enemy;
}

export const DivineGuardian = (enemy) => {
    enemy.maxHealth = 200;
    enemy.maxMana = 70;
    enemy.strength = 125;
    enemy.agility = 70
    enemy.speed = 60;
    enemy.defense = 175;
    enemy.race = 'Divine Guardian';
    enemy.portrait = DivineGuardianPortrait
    return enemy;
}

export const FireLord = (enemy) => {
    enemy.maxHealth = 110;
    enemy.maxMana = 210;
    enemy.strength = 60;
    enemy.agility = 140;
    enemy.speed = 110;
    enemy.defense = 70;
    enemy.class = 'Fire Lord';
    enemy.portrait = FireLordPortrait
    return enemy;
}

export const Goblin = (enemy) => { 
    enemy.maxHealth = 100;
    enemy.maxMana = 100;
    enemy.strength = 75;
    enemy.agility = 175;
    enemy.speed = 150;
    enemy.defense = 100;
    enemy.race = 'Goblin';
    enemy.portrait = GoblinPortrait;
    return enemy;
}

export const Orc = (enemy) => {
    enemy.maxHealth = 200;
    enemy.maxMana = 50;
    enemy.strength = 155;
    enemy.agility = 60
    enemy.speed = 60;
    enemy.defense = 175;
    enemy.race = 'Orc';
    enemy.portrait = OrcPortrait
    return enemy;
}