import React, { createContext } from 'react';
import Character from './Character';
import { Warrior, Rogue, Mage, Hunter } from '../../data/Classes';

export const PlayerContext = createContext();

class Player extends Character {
    constructor() {
        super();
    }
    build = () =>{
        this.setState(state => this.setClass(classType, state));
    }
    setClass(classType, state) {
        switch (classType) {
            case 'Warrior':
                Warrior(state);
                break;
            case 'Rogue':
                Rogue(state);
                break;
            case 'Mage':
                Mage(state);
                break;
            case 'Hunter':
                Hunter(state);
                break;
            default:
                throw new Error('choose a valid class !');
        }
    }
    render() {
        return (
            <PlayerContext.Provider value={{...this.state, build: this.build, takeDamage: this.takeDamage, attack: this.attack}}>
                {this.props.children}
            </PlayerContext.Provider>
        );
    }
}
export default Player;