import React, { Component } from 'react';
import { GameConsumer } from '../../Game';
import { Redirect } from 'react-router-dom';


export default class Battle extends Component {
    render() {
        console.log('battle');
        return (
            <GameConsumer>
                {({ Player, Enemy }) => {
                    const attack = () =>{
                        const enemy = new Enemy();
                        {/* Player.takeDamage(Enemy.attack()); */}
                        {/* enemy.takeDamage(Player.attack()); */}
                    }
                    if (Player.class) {
                        Player.revive();
                        return (
                            <div>
                                <img src={Player.portrait} className='class_portrait' alt="Player portrait" />
                                {Player.currentHealth}
                                <button onClick={e => attack() }>
                                    Attack !
                                </button>
                            </div>
                        )
                    } else {
                        return <Redirect to='/'/>
                    }
                }}
            </GameConsumer>
        );
    }
}