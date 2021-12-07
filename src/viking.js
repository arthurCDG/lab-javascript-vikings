// Soldier
class Soldier   {
  
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  } 

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }

}

// War
class War {
  
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {

    let randomVikingIndex = Math.floor(Math.random() * (this.vikingArmy.length));
    let randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length));

    let selectedViking = this.vikingArmy[randomVikingIndex];
    let selectedSaxon = this.saxonArmy[randomSaxonIndex];

    let result = selectedSaxon.receiveDamage(selectedViking.strength);
    
    if (selectedSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    } 

    return result;

  }
  
  saxonAttack() {

    let randomVikingIndex = Math.floor(Math.random() * (this.vikingArmy.length));
    let randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length));

    let selectedViking = this.vikingArmy[randomVikingIndex];
    let selectedSaxon = this.saxonArmy[randomSaxonIndex];

    let result = selectedViking.receiveDamage(selectedSaxon.strength);
    
    if (selectedViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    } 

    return result;

  }
  
  showStatus() {

    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }

  }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

