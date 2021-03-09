import { Naga, Dragon, DivineGuardian, FireLord, Goblin, Orc} from './Enemies';

import MountainFortressBG from '../resources/images/backgrounds/MountainFortress.png';
import FireTempleBG from '../resources/images/backgrounds/FireTemple.png';
import RiverCaveBG from '../resources/images/backgrounds/RiverCave.png';

import MountainFortressMusic from '../resources/sounds/bgm/Another_Volcano.mp3';
import FireTempleMusic from '../resources/sounds/bgm/Theme_of_ComMecha.mp3';
import RiverCaveMusic from '../resources/sounds/bgm/Chee_Zee_Cave.mp3';



export const MountainFortress = {
    name: 'Mountain Fortress',
    enemies: [Naga, Dragon],
    background: MountainFortressBG,
    bgSound: {
        title: 'Another Volcano',
        audio: MountainFortressMusic
    }
}
export const FireTemple = {
    name: 'Fire Temple',
    enemies: [DivineGuardian, FireLord],
    background: FireTempleBG,
    bgSound: {
        title: 'Theme of ComMecha',
        audio: FireTempleMusic
    }
}
export const RiverCave = {
    name: 'River Cave',
    enemies: [Goblin, Orc],
    background: RiverCaveBG,
    bgSound: {
        title: 'TChee Zee Cave',
        audio: RiverCaveMusic
    }
}