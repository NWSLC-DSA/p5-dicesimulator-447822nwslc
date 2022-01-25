
function setup() {
  createCanvas(800, 800);
}

let button;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(changeBG);


 
function changeBG() {
  let val = random(255);
  background(val);
}

function draw() {
  background(220);
  diceValueOne(40, 20, 20);
}

function ChangeDiceNumber(){
  console.log(random())
  let val = random()
  for(let DiceNumber = 1; DiceNumber < 6; i++)
DiceNumber= random;
  if DiceNumber = 1 do function diceValueOne;
  Alert("ChangeDiceNumber called DiceNumber =" +DiceNumber);
  
   if DiceNumber = 2 do function diceValueTwo;
  Alert("ChangeDiceNumber called DiceNumber =" +DiceNumber);
  
   if DiceNumber = 3 do function diceValueThree;
  Alert("ChangeDiceNumber called DiceNumber =" +DiceNumber);
  
   if DiceNumber = 4 do function diceValueFour;
  Alert("ChangeDiceNumber called DiceNumber =" +DiceNumber);
  
   if DiceNumber = 2 do function diceValueFive;
  Alert("ChangeDiceNumber called DiceNumber =" +DiceNumber);
  
   if DiceNumber = 2 do function diceValueSix;
  Alert("ChangeDiceNumber called DiceNumber =" +DiceNumber);
  
  
  
  
   
}

//This is a user defined function for drawing a dice with the value one.
function diceValueOne(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function diceValueTwo(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueThree(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueFour(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueFive(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function diceValueSix(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.5) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.5) + yPoint);
}
