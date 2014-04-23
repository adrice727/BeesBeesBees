var ForagerBee = function() {

  Bee.call(this);
  this.age =10;
  this.job = "find pollen";
  this.color = "yellow";
  this.food = Grub.food; //not sure
  this.eat = Grub.prototype.eat;  // not sure
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = Bee;

ForagerBee.prototype.forage(treasure){
  this.treasureChest.push(treasure);
};






// ForagerBee

//  Create a ForagerBee class, in pseudoclassical style, with:

//  call the Bee superclass

//  set the prototype

//  set the constructor

//  an age property that is set to 10

//  a job property that is set to find pollen

//  a color property inhereted from bee that is set to yellow

//  a food property that is inhereted from grub

//  an eat method that is inhereted from grub

//  a canFly property that is set true

//  a treasureChest property that is set to an empty array []

//  a forrage method that allows the bee to add a treasure to the treasureChest

