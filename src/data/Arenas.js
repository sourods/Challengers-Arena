import { Naga, Dragon, DivineGuardian, FireLord, Goblin, Orc} from './Enemies';

import MountainFortressBG from '../backgrounds/MountainFortress.png';
import FireTempleBG from '../backgrounds/FireTemple.png';
import RiverCaveBG from '../backgrounds/RiverCave.png';

export const MountainFortress = {
    name: 'Mountain Fortress',
    enemies: [Naga, Dragon],
    background: MountainFortressBG
}
export const FireTemple = {
    name: 'Fire Temple',
    enemies: [DivineGuardian, FireLord],
    background: FireTempleBG
}
export const RiverCave = {
    name: 'River Cave',
    enemies: [Goblin, Orc],
    background: RiverCaveBG
}