import Player from './actors/Player';
import Enemy from './actors/Enemy';
import ManagerEntity from './entities/Manager';

const Manager = new ManagerEntity();

export default {
    Player: new Player(),
    Enemy: Enemy,
    buildPlayer: Manager.buildPlayer,
}
