class Hexagon extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/hexx.jpg");
  }

  display() {
  //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
