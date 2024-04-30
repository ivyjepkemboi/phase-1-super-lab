// Define the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    // Static method to provide a general definition for all trees
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class extending from Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method to provide a specific definition for Deciduous trees
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Define the Evergreen class extending from Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method to provide a specific definition for Evergreen trees
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  