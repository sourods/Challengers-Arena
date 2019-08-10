import React, { Component } from 'react';
import { GameConsumer } from '../../Game';
import { Link } from 'react-router-dom';

//classes portraits
import WarriorPortrait from '../../portraits/classes/Warrior.png';
import RoguePortrait from '../../portraits/classes/Rogue.png';
import MagePortrait from '../../portraits/classes/Mage.png';
import HunterPortrait from '../../portraits/classes/Hunter.png';

export default class Selection extends Component {
    render() {
        return (
            <GameConsumer>
                {(Engine) => {
                    const selectClass = (selectedClass) => {
                        Engine.buildPlayer(selectedClass);
                    }
                    return (
                        <section className="interface">
                            <div className="class" onClick={e => selectClass('Warrior')}>
                                <img src={WarriorPortrait} className="class_portrait" alt="warrior" />
                                <div className="class_description">
                                    <h3>Warrior</h3>
                                    <p>
                                        For as long as war has raged, heroes from every race have aimed to master the art of battle.
                                        Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat.
                                </p>
                                </div>
                            </div>
                            <div className="class" onClick={e => selectClass('Rogue')}>
                                <img src={RoguePortrait} className="class_portrait" alt="rogue" />
                                <div className="class_description">
                                    <h3>Rogue</h3>
                                    <p>
                                        For rogues, the only code is the contract, and their honor is purchased in gold.
                                        Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics.
                                </p>
                                </div>
                            </div>
                            <div className="class" onClick={e => selectClass('Mage')}>
                                <img src={MagePortrait} className="class_portrait" alt="mage" />
                                <div className="class_description">
                                    <h3>Mage</h3>
                                    <p>
                                        Students gifted with a keen intellect and unwavering discipline may walk the path of the mage.
                                        The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners.
                                </p>
                                </div>
                            </div>
                            <div className="class" onClick={e => selectClass('Hunter')}>
                                <img src={HunterPortrait} className="class_portrait" alt="hunter" />
                                <div className="class_description">
                                    <h3>Hunter</h3>
                                    <p>
                                        From an early age, the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside.
                                        Those who endure become hunters.
                                </p>
                                </div>
                            </div>
                            <button>
                                <Link to="/arena/">Select Class</Link>
                            </button>
                        </section>
                    );
                }}
            </GameConsumer>
        );
    }
}