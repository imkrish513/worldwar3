function lvl2(){
    background(level2bck)
  
    if(character === 1){
      guy.visible = false;
    player1.visible = true;
    player1.x  = 100
    player1.y = height-130
    if(keyWentDown("space")){
      player1.scale = 3
      player1.addAnimation("hi",guyhit)
      player1.scale = 3
      if(goblinGroup.displace(player1)){
        goblinGroup.destroyEach(0)
        database.ref('/').update({
          val: val +1
        });
  
      }
      if(goblinGroup1.displace(player1)){
        goblinGroup1.destroyEach(0)
        database.ref('/').update({
          val: val +1
        });
      }
      if(goblinGroup2.displace(player1)){
        goblinGroup2.destroyEach(0)
        database.ref('/').update({
          val: val +1
        });
      }
      
    } 
    if(keyWentUp("space")){
      player1.scale = 0.8
      player1.addAnimation("hi",person_running)
     
    }
    } 
    
  
  
  
    if(character === 2){
      //player2.debug = true;
      player2.setCollider("rectangle",10,0,40,35)
    player2.scale = 5
    player2.visible= true;
    player2.x = 100
    player2.y = height-130
  
    if(keyWentDown("space")){
      player2.addAnimation("hi",person_attack)
      if(goblinGroup.displace(player2)){
        goblinGroup.destroyEach(0)
        database.ref('/').update({
          val: val +1
        });
  
      }
      if(goblinGroup1.displace(player2)){
        goblinGroup1.destroyEach(0)
        database.ref('/').update({
          val: val +1
        });
      }
      if(goblinGroup2.displace(player2)){
        goblinGroup2.destroyEach(0)
        database.ref('/').update({
          val: val +1
        });
      }
      
    } 
    if(keyWentUp("space")){
      player2.addAnimation("hi",person_idle)
    }
    }
  }
  