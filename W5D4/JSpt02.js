function titleize(name, callback) {
  let titleized = name.map(name => `Mx. ${name} JingleHeimer Schmidt`);
  callback(titleized);
};

// titleize(["Bert", "Jlau", "berto"], (name) => {
//   name.forEach(name => console.log(name));
// });

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes moo`)
}

Elephant.prototype.grow = function(height) {
  this.height = this.height + height
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick)
}

Elephant.prototype.play = function() {
  trickList = Math.floor(Math.random() * this.tricks.length)
  console.log(`${this.name} is ${this.tricks[trickList]}!`);
}

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!~`); 
}


function dinerBreakfast() {
  let order = "I'd like to order some burgers please";
  console.log(order);
  
  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
