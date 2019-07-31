import Player from './entities/Player';
import {
    Warrior,
    Rogue,
    Mage,
    Hunter
} from './entities/Classes';

class Game {
    constructor() {
        this.Player = new Player();
    }

    buildPlayer(classType) {
        switch (classType) {
            case 'Warrior':
                this.Player = Warrior(this.Player);
                break;
            case 'Rogue':
                this.Player = Rogue(this.Player);
                break;
            case 'Mage':
                this.Player = Mage(this.Player);
                break;
            case 'Hunter':
                this.Player = Hunter(this.Player);
                break;
            default:
                throw new Error('choose a valid class !');
        }
    }
}

export default new Game();