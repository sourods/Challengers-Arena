import React, { Component } from 'react';
import { GameConsumer } from '../../Game';
import { Redirect } from 'react-router-dom';

import { Goblin, Troll } from '../../core/Enemies';

export default class Arena extends Component {
    constructor() {
        super();
        this.state = {
            opponent: null
        };
    }
    render() {
        console.log('battle');
        return (
            <GameConsumer>
                {({ Player, searchForOpponent }) => {
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
                                <button onClick={e => this.setState({ opponent: searchForOpponent([Goblin, Troll]) })}>Challenge an Opponent !</button>
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