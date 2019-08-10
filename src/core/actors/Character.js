export default class Character{
    constructor(){
        this.maxHealth = 0;
        this.currentHealth = 0;
        this.maxMana = 0;
        this.currentMana = 0;
        this.speed = 0;
        this.isDead = true;
        this.strength = 0;
        this.defense = 0;
        this.agility = 0;
    }
    takeDamage(damage){
        this.currentHealth -= damage * (100 / (100 + this.defense));
        // this.currentHealth -= damage;
        if(this.currentHealth <= 0){
            this.isDead = true;
            this.currentHealth = 0;
        }
    }
    revive(){
        this.currentHealth = this.maxHealth;
        this.currentMana = this.maxMana;
        this.isDead = false;
    }
    attack(){return this.strength}
}