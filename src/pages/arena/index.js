import React, { Component } from 'react';
import { GameConsumer } from '../../contexts/Game';
import { PlayerConsumer } from '../../contexts/actors/Player';
// import { Redirect } from 'react-router-dom';
import { arrayRandomItem, random } from '../../core/utils';
import { MountainFortress, FireTemple, RiverCave } from '../../data/Arenas';
import Enemy from '../../core/actors/Enemy';

import CharacterInfo from './components/character-info';

class Arena extends Component {
	constructor() {
		super();
		this.state = {
			opponent: null,
			selectedArena: this.chooseRandomArena()
		};
	}

	chooseRandomArena() {
		return arrayRandomItem([ MountainFortress, FireTemple, RiverCave ]);
	}
	render() {
		return (
			<PlayerConsumer>
				{(Player) => {
					console.log('Player', Player);
					const { gameState, setGameState, audio } = this.props;
					const startBattle = (enemies) => {
						if (enemies.length) {
							let enemy = enemies[random(0, enemies.length)];
							if (audio.playStatus !== 'PLAYING') {
								audio.setTrack(this.state.selectedArena.bgSound, 'PLAYING');
							}
							setGameState('battle');
							this.setState({
								opponent: enemy
							});
							Player.revive();
						} else {
							throw new Error('error finding an opponent');
						}
					};
					const basicAttack = () => {
						console.log('Enemy', Enemy);
						battle.basicAttack(this.state.opponent, Player);
						battle.basicAttack(Player, this.state.opponent);
					};
					return (
						<React.Fragment>
							<h2>Arena: {this.state.selectedArena.name} </h2>
							<CharacterInfo
								info={{
									maxHealth: Player.maxHealth,
									currentHealth: Player.currentHealth,
									maxMana: Player.maxMana,
									currentMana: Player.currentMana,
									speed: Player.speed,
									isDead: Player.isDead,
									strength: Player.strength,
									defense: Player.defense,
									agility: Player.agility,
									portrait: Player.portrait,
									class: Player.class
								}}
							/>
							<hr />
							{gameState === 'battle' ? (
								<button onClick={(e) => basicAttack()}>Basic Attack !</button>
							) : (
								<button onClick={(e) => startBattle(this.state.selectedArena.enemies)}>
									Challenge an Opponent !
								</button>
							)}
							{this.state.opponent !== null ? (
								<Enemy build={this.state.opponent} render={(info) => <CharacterInfo info={info} />} />
							) : (
								''
							)}
						</React.Fragment>
					);
				}}
			</PlayerConsumer>
		);
	}
}

const Arena = () => {
	const Player = useContext(PlayerContext);
	const { audio } = useContext(GameContext);
	const { name, enemies, bgSound } = arrayRandomItem([ MountainFortress, FireTemple, RiverCave ]);
	const [ enemy ] = useState(enemies[random(0, enemies.length)]);
	const opponent = new Enemy(enemy);
	if (audio.playStatus !== 'PLAYING') {
		audio.setTrack(bgSound, 'PLAYING');
	}
	const basicAttack = () => {
		Player.basicAttack(enemy);
		enemy.basicAttack(Player);
	};
	return (
		<React.Fragment>
			<h2>Arena: {name} </h2>
			<CharacterInfo
				info={{
					maxHealth: Player.maxHealth,
					currentHealth: Player.currentHealth,
					maxMana: Player.maxMana,
					currentMana: Player.currentMana,
					speed: Player.speed,
					isDead: Player.isDead,
					strength: Player.strength,
					defense: Player.defense,
					agility: Player.agility,
					portrait: Player.portrait,
					class: Player.class
				}}
			/>
			<hr />
			<button onClick={(e) => basicAttack()}>Basic Attack !</button>
			<CharacterInfo
				info={{
					maxHealth: opponent.maxHealth,
					currentHealth: opponent.currentHealth,
					maxMana: opponent.maxMana,
					currentMana: opponent.currentMana,
					speed: opponent.speed,
					isDead: opponent.isDead,
					strength: opponent.strength,
					defense: opponent.defense,
					agility: opponent.agility,
					portrait: opponent.portrait,
					class: opponent.class
				}}
			/>
		</React.Fragment>
	);
};
