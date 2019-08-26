import React, { Component } from 'react';
import { GameConsumer } from '../../Game';
import { Redirect } from 'react-router-dom';
import { arrayRandomItem, random } from '../../core/Utils';
import { MountainFortress, FireTemple, RiverCave} from '../../data/Arenas';
 
export default class Arena extends Component {
    constructor() {
        super();
        this.state = {
            opponent: null,
            selectedArena: this.chooseRandomArena()
        };
    }
    chooseRandomArena(){
        return arrayRandomItem([MountainFortress, FireTemple, RiverCave]);
    }
    render() {

        return (
            <GameConsumer>
                {({ Player, Enemy }) => {
                    const searchForOpponent = (enemies) => {
                        if (enemies.length) {
                            let enemy = enemies[random(0, enemies.length)](new Enemy());
                            enemy.revive();
                            return enemy;
                        } else {
                            throw new Error('error finding an opponent')
                        }
                    }
                    if (Player.class) {
                        Player.revive();
                        return (
                            <div>
                                <img src={Player.portrait} className='class_portrait' alt="Player portrait" />
                                <h3>{Player.class}</h3>
                                <p>{Player.currentHealth}</p>
                                <p>{Player.currentMana}</p>
                                <p>{Player.speed}</p>
                                <p>{Player.strength}</p>
                                <p>{Player.defense}</p>
                                <p>{Player.agility}</p>
                                <hr />
                                <h2>Arena: {this.state.selectedArena.name}</h2>
                                <hr />
                                { this.state.opponent !== null ?
                                    <span>
                                        <img src={this.state.opponent.portrait} className='class_portrait' alt="Opponent portrait" />
                                        <h3>{this.state.opponent.race}</h3>
                                        <p>{this.state.opponent.currentHealth}</p>
                                        <p>{this.state.opponent.currentMana}</p>
                                        <p>{this.state.opponent.speed}</p>
                                        <p>{this.state.opponent.strength}</p>
                                        <p>{this.state.opponent.defense}</p>
                                        <p>{this.state.opponent.agility}</p>
                                    </span>
                                    : ''}
                                <button onClick={e => this.setState({ opponent: searchForOpponent(this.state.selectedArena.enemies) })}>Challenge an Opponent !</button>
                            </div>
                        )
                    } else {
                        return <Redirect to='/' />
                    }
                }}
            </GameConsumer>
        );
    }
}