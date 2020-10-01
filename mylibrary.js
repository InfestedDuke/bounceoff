function bounceoff(object,object2){
    if   (object.x - object2.x < object2.width/2 +   object.width/2
      && object2.x -   object.x < object2.width/2 +   object.width/2) {
    object.velocityX =   object.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (  object.y - object2.y < object2.height/2 +   object.height/2
    && object2.y -   object.y < object2.height/2 +   object.height/2){
      object.velocityY =   object.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
  }