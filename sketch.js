var fixedrect , movingrect

function setup() {

  createCanvas(800,400);

  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

  movingrect = createSprite(400,100,40,40);
  movingrect.shapeColor = "black";
  movingrect.debug = true;
 }

 function draw() {

  background(0, 255, 229);  

  movingrect.x = mouseX
  movingrect.y = mouseY

  drawSprites();

 console.log(movingrect.x - fixedrect.x);
 console.log(fixedrect.width/2 + movingrect.width/2)

 if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
   movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 && 
  fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) { 
  fixedrect.shapeColor = "yellow";
  movingrect.shapeColor = "green";
 } else {
  fixedrect.shapeColor = "blue";
  movingrect.shapeColor = "black";
 }
}
