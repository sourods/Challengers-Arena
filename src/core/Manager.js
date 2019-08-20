import {
    Warrior,
    Rogue,
    Mage,
    Hunter
} from './Classes';
import { random } from './Utils';
import Enemy from './actors/Enemy';

export default class Manager {
    buildPlayer(classType) {
        switch (classType) {
            case 'Warrior':
                Warrior(this.Player);
                break;
            case 'Rogue':
                Rogue(this.Player);
                break;
            case 'Mage':
                Mage(this.Player);
                break;
            case 'Hunter':
                Hunter(this.Player);
                break;
            default:
                throw new Error('choose a valid class !');
        }
    }
    searchForOpponent(enemies) {
        if (enemies.length) {
            return enemies[random(0, enemies.length)](new Enemy());
        } else {
            throw new Error('error finding an opponent')
        }
    }
}

