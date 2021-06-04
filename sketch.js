
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  var countDistanceX=0;
  var gap;
  for(i=0; i<6; i++)
  {
    platform1=new Platform(countDistanceX);
    gap=random([100,140,0,80,200]);
    countDistanceX=countDistanceX+platform1.rw+gap;
  }
  // platform2=new Platform(500);
  
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

