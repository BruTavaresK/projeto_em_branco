var bola = {
  xa:200,y:100,r:20, velX:2, velY:4,
  cor:["Blue","White","Red"],
} ;
var quadrado1;
function setup(){
  createCanvas(windowWidht, windowHeight);
  quadrado1 = new quadrado();
}
function draw(){
background(0);
fill (bola.cor[0]);
circle(bola.xa,bola.y,bola.r);
bola.xa=bola.xa
quadrado1.exibir();
}