import { Component } from 'react';

export default class Character extends Component {
    constructor() {
        super()
        this.state = {
            maxHealth: 0,
            currentHealth: 0,
            maxMana: 0,
            currentMana: 0,
            speed: 0,
            isDead: true,
            strength: 0,
            defense: 0,
            agility: 0
        }
    }
    takeDamage(damage) {
        damage = Math.round(damage * (100 / (100 + this.state.defense)));
        this.setState(state => ({ currentHealth: state.currentHealth - damage }));
        if (this.state.currentHealth <= 0) {
            this.isDead = true;
            this.currentHealth = 0;
            this.setState({
                isDead: true,
                currentHealth: 0
            });
        }
        console.log(`dano tomado  ${this.state.class ? this.state.class : 'inimigo'}: ${damage}`);
    }
    revive(e) {
        this.setState(state => ({ currentHealth: state.maxHealth, currentMana: state.maxMana, isDead: false }));
    }
    basickAttack(enemy) {
        let luckDamage = random(0, 21);
        let luckFator = random(1, 9);
        let damage = this.state.strength;
        console.log(`fator sorte ${this.state.class ? this.state.class : 'inimigo'}: ${luckFator}`);
        console.log(`dano sorte ${this.state.class ? this.state.class : 'inimigo'}: ${luckDamage}`)
        if ([1, 2].includes(luckFator)) {
            damage += (luckDamage / 2)
        }
        if ([3, 4].includes(luckFator)) {
            damage -= (luckDamage / 2)
        }
        if (luckFator === 7) {
            damage += luckDamage;
        }
        if (luckFator === 8) {
            damage -= luckDamage;
        }
        console.log(`dano ${this.state.class ? this.state.class : 'inimigo'}: ${damage}`);
        if (this.state.class === 'Mage') {
            this.setState(state => ({ currentMana: state.currentMana - 5 }))
            console.log('mana: ', this.state.currentMana);
            if (this.state.currentMana <= 0) {
                this.setState({ currentMana: 0 })
            }
        }
        enemy.takeDamage(damage);
    }
    render() {
        if (this.props.render && typeof this.props.render === 'function') return this.props.render(this.state);
        else return null;
    }
}
