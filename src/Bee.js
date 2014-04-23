var Bee = function() {

  Grub.call(this);

  this.color = yellow;
  this.job;


};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

