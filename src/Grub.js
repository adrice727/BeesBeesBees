var Grub = function() {

  this.age = 0;
  this.color = "pink";
  this.food  = "jelly";

};

Grub.prototype.eat = function(){
  var that = this;
  console.log("Eating " + that.food);
};

