import WarriorPortrait from '../resources/images/portraits/classes/Warrior.png';
import RoguePortrait from '../resources/images/portraits/classes/Rogue.png';
import MagePortrait from '../resources/images/portraits/classes/Mage.png';
import HunterPortrait from '../resources/images/portraits/classes/Hunter.png';

export const Warrior = (character) =>{ //defense skills
    character.maxHealth = 200;
    character.maxMana = 70;
    character.strength = 125;  
    character.agility = 70
    character.speed = 60;
    character.defense = 175;
    character.class = 'Warrior';
    character.portrait = WarriorPortrait;
}

export const Rogue = (character) => { //furtivity + blood stack
    character.maxHealth = 100;
    character.maxMana = 100;
    character.strength = 75;
    character.agility = 175;
    character.speed = 150;
    character.defense = 100;
    character.class = 'Rogue';
    character.portrait = RoguePortrait
}

export const Mage = (character) => { //elemental stack skills
    character.maxHealth = 110;
    character.maxMana = 210;
    character.strength = 60;
    character.agility = 140;
    character.speed = 110;
    character.defense = 70;
    character.class = 'Mage';
    character.portrait = MagePortrait
}

export const Hunter = (character) => { //trap skills
    character.maxHealth = 150;
    character.maxMana = 50;
    character.strength = 100;
    character.agility = 150;
    character.speed = 150;
    character.defense = 100;
    character.class = 'Hunter';
    character.portrait = HunterPortrait
}