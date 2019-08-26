import {
    Warrior,
    Rogue,
    Mage,
    Hunter
} from '../data/Classes';

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
}

