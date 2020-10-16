class paper {

constructor(x,y,radius,options){

var options ={
    isStatic : false,
    restitution: 0.3,
    density: 1.2,
    friction:0
}

this.body= Bodies.circle(x,y,(radius-20/2),options); //radius/2
this.radius= 50;
this.image= loadImage("paper.png")
 World.add(world,this.body);
}

display(){

    var pos= this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("pink");
    image(this.image,0,0,this.radius,this.radius);
    pop();
}


};