class Paper{
  constructor(x,y,radius){
  var options= {  
    restution:0.5,
    friction:0, 
    density:1.2, 
}
this.radius = radius
 this.body = Bodies.circle(x,y,(this.radius-20)/2,options);  
 this.image = loadImage("paper.png"); 
 World.add(world,this.body);    


  }
   display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius,this.radius); 
    pop();

   

 
       

   }
}





