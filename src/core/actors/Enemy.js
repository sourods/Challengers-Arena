import Character from './Character';

export default class Enemy extends Character {
	constructor(props) {
		super();
		this.state = props;
	}
}
