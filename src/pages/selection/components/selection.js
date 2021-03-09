import React, { Component } from 'react';
import { PlayerConsumer } from '../../../core/actors/Player';
import { Redirect } from 'react-router-dom';

//classes portraits
import WarriorPortrait from '../../../resources/images/portraits/classes/Warrior.png';
import RoguePortrait from '../../../resources/images/portraits/classes/Rogue.png';
import MagePortrait from '../../../resources/images/portraits/classes/Mage.png';
import HunterPortrait from '../../../resources/images/portraits/classes/Hunter.png';

function ClassInfo({ portrait, name, description }){
    return (<div className="class">
        <img src={portrait} className="class_portrait" alt={name.toLowerCase()} />
        <div className="class_description">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    </div>)
}
export default class Selection extends Component {
    constructor() {
        super();
        this.state = {
            classIsSelected: false
        };
    }
    render() {
        if (this.state.classIsSelected) {
            return <Redirect to='/arena' />
        }
        return (
            <PlayerConsumer>
                {(Player) => {
                    const selectClass = (selectedClass) => {
                        console.log('player', Player)
                        Player.build(selectedClass);
                        this.setState({
                            'classIsSelected': true
                        })
                    }

                    return (
                        <section className="interface">
                            <div onClick={e => selectClass('Warrior')}>
                            <ClassInfo name="Warrior" portrait={WarriorPortrait} description="For as long as war has raged, heroes from every race have aimed to master the art of battle.
                            Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat." />
                            </div>
                            <div onClick={e => selectClass('Rogue')}>
                            <ClassInfo name="Rogue" portrait={RoguePortrait} description="For rogues, the only code is the contract, and their honor is purchased in gold.
                            Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics." />
                            </div>
                            <div onClick={e => selectClass('Mage')}>
                            <ClassInfo name="Mage" portrait={MagePortrait} description="Students gifted with a keen intellect and unwavering discipline may walk the path of the mage.
                            The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners." />
                            </div>
                            <div onClick={e => selectClass('Hunter')}>
                            <ClassInfo name="Hunter" portrait={HunterPortrait} description="From an early age, the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside.
                            Those who endure become hunters." />
                            </div>
                        </section>
                    );
                }}
            </PlayerConsumer>
        );
    }
}