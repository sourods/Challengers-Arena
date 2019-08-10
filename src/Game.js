import React, { Component, createContext } from 'react';
import Engine from './core/Engine';

const GameContext = createContext();

class Game extends Component {
    render() {
        return (
            <GameContext.Provider value={Engine}>
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

const GameConsumer = GameContext.Consumer;

export { Game, GameConsumer }