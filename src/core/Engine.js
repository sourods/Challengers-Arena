import Player from './actors/Player';
import ManagerEntity from './Manager';

const Manager = new ManagerEntity();

export default {
    Player: new Player(),
    buildPlayer: Manager.buildPlayer,
    searchForOpponent: Manager.searchForOpponent
}
