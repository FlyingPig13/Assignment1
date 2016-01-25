/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }

  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }

  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/

function setup() {
  createCanvas(500, 500)
  background(255, 255, 255)
 
}

function draw() {
  
  fill("blue")
  strokeWeight(3)
  //gridRect is a function that takes in 
   var gridRect = function(x, y, i){
     
     
   }
   
   //gridBreak determines if the screen has been filled with squares
   //it takes in two numbers:
   //x (the x position of the square) and
   //y (the y position of the squares)
   
   var gridBreak = function(x, y){
     (x >= width && y>= height)
     
   };
   //gridDraw takes in three numbers and outputs a grid of squares
  //that fit the current canvas
  //x is the width of the square, y is the height of the square, and i 
  //is an integer used to determine if the grid is completed
  
  var gridDraw = function(x, y){
    while (!gridBreak(x, y)
    while (x <= width){
      rect(width/20, height/20, x, y)
      gridDraw(x+width/20, y)
      gridDraw(0, y+height/20)
    }
    }
  }
  
   
 
 
  
  
  
  
  

}
