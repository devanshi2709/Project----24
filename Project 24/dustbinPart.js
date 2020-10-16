class dustbinPart {

  constructor(x,y,width,height,options){
  
  var options ={
      isStatic : true
  }
  
  this.body= Bodies.rectangle(x,y,width,height,options);
  this.width= width;
  this.height=height;
   World.add(world,this.body);
  }
  
  display(){
  
      var pos= this.body.position;
      //var angle = this.body.angle;

      //rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(pos.x,pos.y,this.width,this.height);
  }
  
  
  };