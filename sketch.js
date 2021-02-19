var background
var title
var gameState = 0
var playerCount;
var allPlayers;
var guy,instructions;
var database,down1;
var player1,player2;
var form, player, game, down, down2;
var guy_running,person_running;
var selection = 0
var Bob, Jeff
var character = 0
var hi = 0
var State = 0 
var val;
var player1,player2;
var position;
var time = 0,pressed = 0,key = 0;
var goblin;
var goblinGroup,goblinGroup1,goblinGroup2;
var k = 0

function preload(){
    guy_running = loadAnimation("run0.png","run1.png","run2.png","run3.png","run4.png","run5.png",)
    person_running = loadAnimation("hello.png","hello1.png","hello2.png","hello3.png","hello4.png","hello5.png","hello6.png","hello7.png",)
    goblinimg = loadAnimation("gob1.png","gob2.png","gob3.png","gob4.png","gob5.png","gob6.png","gob7.png","gob8.png")
person_attack = loadAnimation("adventurer-attack1-00.png","adventurer-attack1-01.png","adventurer-attack1-02.png","adventurer-attack1-03.png","adventurer-attack1-04.png")
person_idle = loadAnimation("adventurer-idle-2-01.png","adventurer-idle-2-02.png","adventurer-idle-2-03.png") 
guyhit = loadAnimation("archer.png","archer2.png","archer3.png","archer5.png","archer6.png","archer7.png","archer8.png","archer9.png","archer10.png",
"archer11.png","archer12.png","archer13.png","archer14.png","archer15.png","archer16.png","archer17.png","archer18.png","archer19.png","archer20.png",
"archer21.png","archer22.png","archer23.png","archer24.png","archer25.png","archer26.png","archer27.png","archer28.png","archer29.png")
}
function setup(){
createCanvas(1440,820)
database = firebase.database();
    backgroundimg = loadImage("background.png")
    lvl1bck = loadImage("lvl1bck.png")
    backgroundimg2 = loadImage("background2.png")
thing = loadImage("thing.png")

    person = createSprite(700,500,10,10)
    person.addAnimation("run",guy_running)
    person.scale = 5

    guy = createSprite(700,500,10,10)
    guy.addAnimation("hi",person_running)

    titleimg = loadImage("title.png")
    title1 = createSprite(700,200)
    title1.addImage(titleimg)

    instimg = loadImage("instructions.png")
    inst = createSprite(1200,550)
    inst.addImage(instimg)
    inst.scale = 0.4

    inst.visible = false;
    title1.visible = false;
  guy.visible = false;
  person.visible = false;
  
  player1 = createSprite(250,250,100,100);
  player1.shapeColor = "red";
  player1.addAnimation("hi",person_running)
player1.visible = false;
player1.scale = 0.7

player2 = createSprite(250,250,10,10);
player2.addAnimation("hi",guy_running)
  player2.shapeColor = "red";
  player2.visible = false;


  var player2Position = database.ref('player2/position');
  player2Position.on("value", readPosition1, showError1);

  var player1Position = database.ref('player1/position');
  player1Position.on("value", readPosition, showError);


  invisibleGround = createSprite(700,height-25,2000,10);
  invisibleGround.visible = false;
  
  invisibleGround1 = createSprite(520,height-220,175,10);
  invisibleGround1.visible = false;
  
  invisibleGround2 = createSprite(245,height-130,175,20);
  invisibleGround2.visible = false;

  invisibleGround3 = createSprite(770,height-290,180,10);
  invisibleGround3.visible = false;
  
  invisibleGround4 = createSprite(1070,height-220,185,20);
  invisibleGround4.visible = false;
  
  invisibleGround5 = createSprite(1350,height-290,185,20);
  invisibleGround5.visible = false;

  invisibleGround6 = createSprite(485,height-510,185,20)
  invisibleGround6.visible = false;
 
  invisibleGround7 = createSprite(810,height-510,180,10);
  invisibleGround7.visible = false;
  
  invisibleGround8 = createSprite(1160,height-565,185,20);
  invisibleGround8.visible = false;
  
  invisibleGround9 = createSprite(1350,height-665,150,20);
  invisibleGround9.visible = false;

  checker = createSprite(1350,height-330,195,100)
  checker.visible = false;;
  checker1 = createSprite(1350,height-665,195,100)
  checker1.visible = false;;


  invisibleGround10 = createSprite(700,height-25,2000,10);
  invisibleGround10.visible = false;
  
  invisibleGround11 = createSprite(520,height-220,175,10);
  invisibleGround11.visible = false;
  
  invisibleGround12 = createSprite(245,height-130,175,20);
  invisibleGround12.visible = false;

  invisibleGround13 = createSprite(770,height-290,180,10);
  invisibleGround13.visible = false;
  
  invisibleGround14 = createSprite(1070,height-220,185,20);
  invisibleGround14.visible = false;


  boximg = loadImage("boxes.png")
  box = createSprite(200,height - 360,195,10)
  box.addImage(boximg)
  box.visible = false;
  box.scale = 0.25

  
  
level3bck = loadImage("lvl3bck.png")
  level2bck = loadImage("level2bck.gif")

  

  game = new Game();
  game.getState();
  game.start();

  goblinGroup = createGroup()
  goblinGroup1 = createGroup()
  goblinGroup2 = createGroup()
    

    }

function draw(){
  background(backgroundimg)
    drawSprites()
    var ValRef  = database.ref('val');
    ValRef.on("value",function(data){
       val = data.val();
    })

    if(playerCount === 2){
      database.ref('/').update({
        gameState: 1
      });
        
      }
      if(gameState === 1){
        clear();
        game.play();
        intro()
      }
      if(gameState === 5){
        clear();
        game.play1();
      }
  if(gameState === 0){
            textSize(50)
            fill("white")
           // text("Welcome To World War 3",500,400)
           // text("Press Space To Start",500,700)
           title1.visible = true;
           inst.visible = true;
            //title1.scale = 40
           }
           
           if(mousePressedOver(inst)){
            State = instructions
            down1 = 1
           }
        if(State === instructions && down1 === 1){
            fill("white")
            textSize(35)
            text("There are 2 players, to move use the arrow keys, to attack click anywhere on the screen",50,350)
            text("There are going to be many obstacles, once both players are ready push the start button",50,450)
           textSize(50)
            text("Good Luck :)", 600,600)
            title1.visible = false;
            inst.visible = false;
        }
        
        
           if (keyDown("space")&& down1 === 1){
            State = 1
            down = 1
        }
        if(State === 1 && down === 1){
            background(backgroundimg2)
            textSize(30)
            fill("white")
            text("The year is 2077, and World War 3 has just started",50,400)
            text("Your town, Millstone has been captured by the enemy country Pangea",50,450)
            text("You, and your brother have been captured the by the pangean army and are stuck in a prision camp",50,500)
            text("Find a way out and try and stop the war",50,550)
            text("(Press space to continue)",100,600)
            title1.visible = false;
            inst.visible = false;
            drawSprites()
        title1.visible = false;
        person.visible = false;
        guy.visible = false;
            
        
            
        
        }
        
        
        
        if(player.index === 1){
        character = 1
        }
        
        
        if(player.index === 2){
        character = 2
        }
        
        if(keyDown("space")&& State === 1 && down === 1){
          down = 2
          down2 = 2
          State = 2
          gameState = 2
        
        }
        
        if(character === 1 && gameState === 2 && down === 2 && down2 ===2& selection === 0){
          textSize(35)
        guy.visible = true;
        
          fill("white")
          fill("black")
          text("Your Character",575,200)
          
          text("Jeff",700,400)
          fill("white")
          text("Tap to see your abilites",550,700)
          //text("Bob",500,400)
        person.scale = 5.5
        //guy.scale = 1.1
        
        if(mousePressedOver(guy)){
          selection = 2
          person.visible = false;
        }
        }
        if(character === 1 && State === 2 && down === 2 && down2 ===2& selection === 1){
          if(keyDown("Esc")){
            gameState = 2
             down = 2
             down2 =2
            selection = 2
          }
          guy.visible = false;
          person.visible = true;
          textSize(25)
          fill("white")
          text("Bob",700,400)
          fill("black")
          text("Your partner's character",575,200)
          fill("white")
          text("Hero Abiliites:",900,400)
          text("Weapon: Sword",900,450)
          text("Health: 100",900,500)
          text("Damage: 100",900,550)
          text("Press Space to continue",900,600)
          text("Press escape to see your character",900,650)
          if(keyDown("space")){
            database.ref('/').update({
              val: 1
            });
            hi = 1
        }
        
        }
        
        if(character === 1 &&State === 2 && down === 2 && down2 ===2 & selection === 2){
          person.visible = false;
          textSize(25)
          guy.visible = true;
          fill("white")
          text("Jeff",700,400)
          fill("black")
          textSize(35)
          text("Your character",600,200)
          fill("white")
          textSize(25)
          text("Hero Abiliites:",900,400)
          text("Weapon: Bow",900,450)
          text("Health: 125",900,500)
          text("Damage: 100",900,550)
          text("Press Space to continue",900,600)
          text("Press shift to to see your partner's abilites",900,650)
          if(keyDown("shift")){
            State = 2
             down = 2
             down2 =2
            selection = 1

            
          }
        
          if(keyDown("space")){
            database.ref('/').update({
              val: 1
            });
            hi = 1
        }
        
        }
        
        
        
        
        
        
        
        
        if(character === 2 && gameState === 2 && down === 2 && down2 ===2&& selection === 0){
          textSize(35)
        person.visible = true;
        
          fill("white")
          fill("black")
          text("Your Character",575,200)
          
          text("Bob",700,400)
          fill("white")
          text("Tap to see your abilites",550,700)
          //text("Bob",500,400)
        person.scale = 5.5
        //guy.scale = 1.1
        
        
        if(mousePressedOver(person)){
          selection = 1
          person.visible = true;
        }
        }
        if(character === 2 && State === 2 && down === 2 && down2 ===2& selection === 1){
          if(keyDown("Esc")){
            gameState = 2
             down = 2
             down2 =2
            selection = 2
          }
          guy.visible = false;
          person.visible = true;
          textSize(25)
          fill("white")
          //text("Jeff",700,400)
          fill("black")
          textSize(35)
          text("Your Character",600,200)
          fill("white")
          textSize(25)
          text("Bob",700,400)
          text("Hero Abiliites:",900,400)
          text("Weapon: Sword",900,450)
          text("Health: 100",900,500)
          text("Damage: 100",900,550)
          text("Press Space to continue",900,600)
          text("Press escape to see your partner's character",900,650)
          if(keyDown("space")){
            database.ref('/').update({
              val: 1
            });
            hi = 1
        }
        
        }
        
        if(character === 2 && State === 2 && down === 2 && down2 ===2 & selection === 2){
          person.visible = false;
          textSize(25)
          guy.visible = true;
          fill("white")
          text("Jeff",700,400)
          fill("black")
          textSize(35)
          text("Your Partner's character",600,200)
          fill("white")
          textSize(25)
          text("Hero Abiliites:",900,400)
          text("Weapon: Bow",900,450)
          text("Health: 125",900,500)
          text("Damage: 100",900,550)
          text("Press Space to continue",900,600)
          text("Press shift to to see your abilites",900,650)
          
          if(keyDown("shift")){
            character = 1
            State = 2
             down = 2
             down2 =2
            selection = 1
          }
          if(keyDown("space")){
            database.ref('/').update({
              val: 1
            });
            hi = 1

            guy.visible = false;
            person.visible = false;
            
        }
        }

if(val === 1|| val === 2){

  State = 3
  down = 3
  down2 = 3
  selection = 5
  clear()
background(lvl1bck)
person.visible = false;
drawSprites()
player1.visible = true
player2.visible = true;

if(key === 0){
player1.x = 51.19
player1.y = 736.9
player2.x = 51.19
player2.y = 736.9
}
guy.visible = false;
if(character === 1){


  if(player1.isTouching(checker)){
    fill("white")
    textSize(30)
    text("Press 'e' to press the button",500,400)
  }
  if(player1.isTouching(checker)&& keyDown("e")){
pressed = 1


  }

  if(pressed === 1){
    box.visible = true;
  }

if(keyDown(LEFT_ARROW)){
  key = key+1
  writePosition(-5,0);
}
else if(keyDown(RIGHT_ARROW)){
  key = key+1
  writePosition(5,0);
}


if(player1.collide(invisibleGround)|| player1.collide(invisibleGround1)|| player1.collide(invisibleGround2)|| player1.collide(invisibleGround3)|| player1.collide(invisibleGround4)|| player1.collide(invisibleGround5)|| player1.collide(box)|| player1.collide(invisibleGround6)|| player1.collide(invisibleGround7)|| player1.collide(invisibleGround8)|| player1.collide(invisibleGround9)){
if(keyDown(UP_ARROW)){
  key = key+1
  player1.velocityY = -15;
  writePosition(0,-15);
}
else if(keyDown(DOWN_ARROW)){
  key = key+1
  writePosition(0,+5);
}


}

}
guy.visible = false;
person.visible = false;


player2.visible = true;
player2.scale = 3.85

if(character === 2){
  //player2.debug = true;
  player2.setCollider("rectangle",0,0,20,35)
  if(player2.isTouching(checker)){
    fill("white")
    textSize(30)
    text("Press 'e' to press the button",500,400)
  }
  if(player2.isTouching(checker)&& keyDown("e")){
pressed = 1


  }

  if(pressed === 1){
    box.visible = true;
  }

if(keyDown(LEFT_ARROW)){
  key = key+1
  writePosition1(-5,0);
}
else if(keyDown(RIGHT_ARROW)){
  key = key+1
  writePosition1(5,0);
}


if(player2.collide(invisibleGround)|| player2.collide(invisibleGround1)|| player2.collide(invisibleGround2)|| player2.collide(invisibleGround3)|| player2.collide(invisibleGround4)|| player2.collide(invisibleGround5)|| player2.collide(box)|| player2.collide(invisibleGround6)|| player2.collide(invisibleGround7)|| player2.collide(invisibleGround8)|| player2.collide(invisibleGround9)){
if(keyDown(UP_ARROW)){
  key = key+1
  player2.velocityY = -15;
  writePosition1(0,-15);
}
else if(keyDown(DOWN_ARROW)){
  key = key+1
  writePosition1(0,+5);
}


}
}
player1.velocityY = player1.velocityY + 0.8
player2.velocityY = player2.velocityY + 0.8
player1.collide(invisibleGround)
player2.collide(invisibleGround)
player1.collide(invisibleGround1)
player2.collide(invisibleGround1)
player1.collide(invisibleGround2)
player2.collide(invisibleGround2)
player1.collide(invisibleGround3)
player2.collide(invisibleGround3)
player1.collide(invisibleGround4)
player2.collide(invisibleGround4)
player1.collide(invisibleGround6)
player2.collide(invisibleGround6)
player1.collide(invisibleGround5)
player2.collide(invisibleGround5)
player1.collide(invisibleGround7)
player2.collide(invisibleGround7)
player1.collide(invisibleGround8)
player2.collide(invisibleGround8)
player1.collide(invisibleGround9)
player2.collide(invisibleGround9)
player1.collide(box)
player2.collide(box)




if(player1.isTouching(checker1)&& val === 1){
  player1.visible = false;
  database.ref('/').update({
    val: 2
  });

}
if(val === 2 && player2.isTouching(checker1)){
  player2.visible = false;
  database.ref('/').update({
    val: 3
  });
}

}

if(val === 2){
  player1.visible = false;
}

if(val === 3 ||val === 4||val === 5||val === 6||val === 7||val === 8||val === 9||val === 10||val === 11||val === 12||val === 13||val === 14||val === 15||val === 16||val === 17||val === 18||val === 19||val === 20){
  SpawnGob()
  lvl2()
  drawSprites()
  
}
if(val === 21){
  clear()
  background(backgroundimg2)
  fill("white")
  textSize(30)
  text("YOU HAVE ESCAPED !!",600,200)
  text("Now your goal is to find the evil Inferno and stop the war.",400,300)
  text("(press shift to continue)",600,400)
}
if(keyDown("shift")&&val === 21){
  database.ref('/').update({
    val: 22
  });
}

if(val === 22){
  lvl3()
}


}


function writePosition(x,y){
  database.ref('player1/position').set({
    x: player1.x + x ,
    y: player1.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  player1.x = position.x;
  player1.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition1(x,y){
  database.ref('player2/position').set({
    x: player2.x + x ,
    y: player2.y + y
  })
}

function readPosition1(data){
  position = data.val();
  console.log(position.x);
  player2.x = position.x;
  player2.y = position.y;
}

function showError1(){
  console.log("Error in writing to the database");
}





function SpawnGob(){

  if(frameCount%200 === 0){
   
  goblin = createSprite(1200,height-130,20,20)
  goblin.addAnimation("hi",goblinimg)
  goblin.scale = 4
  goblin.velocityX = -4
  goblin.visible = true;
  goblinGroup.add(goblin)



  goblin1 = createSprite(1000,height-130,20,20)
  goblin1.addAnimation("hi",goblinimg)
  goblin1.velocityX = -4
  goblin1.scale = 4  
  goblin1.visible = true;
  goblinGroup1.add(goblin1)

  goblin2 = createSprite(800,height-130,20,20)
  goblin2.addAnimation("hi",goblinimg)
  goblin2.velocityX = -4
  goblin2.scale = 4
  goblin2.visible = true;
  goblinGroup2.add(goblin2)
  }
}


function lvl3(){
background(level3bck)
player1.visible = true
person.visible = false;
player1.addAnimation("hi",guy_running)
guy.visible = false;
player2.visible = true;
player2.scale = 4.5
player1.x = 51.19
player1.y = 736.9
player2.x = 51.19

player1.velocityY = player1.velocityY + 0.8
player2.velocityY = player2.velocityY + 0.8
player1.collide(invisibleGround10)
player2.collide(invisibleGround10)
player1.collide(invisibleGround11)
player2.collide(invisibleGround11)
player1.collide(invisibleGround12)
player2.collide(invisibleGround12)
player1.collide(invisibleGround13)
player2.collide(invisibleGround13)
player1.collide(invisibleGround14)
player2.collide(invisibleGround14)



player2.y = 736.9
drawSprites()
}