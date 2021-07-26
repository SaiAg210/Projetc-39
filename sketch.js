var player,playerImage,pcar,pcarImage,tank,tankImage,pbike,pbikeImage,scooter,scooterImage,ptruck,ptruckImage;
var coin,coinImage;
var road,roadImage;
var footpath,footpath2,footpathImage;
var limo,limoImage,van,vanImage,sports,sportsImage,pol,polImage,bike,blackcar,bus,bus2,greenbike,motorcycle,motorcycle2,truck,truck2,bikeImage,blackcarImage,busImage,greenbikeImage,truckImage,truck2Image,motorcycleImage,motorcycle2Image,bus2Image;
var coinGroup,vehicleGroup;
var coinCollected=0;
var score=100;

var PLAY=1;
var END=2;
var START=0;
var gameState=START;
var endScreen;
var gameOverImg;
var start,startImg;
var bg1;


var cycle1Sound,bikeSound,busSound,truckSound,carhitSound,coinSound,vanSound,policeSound,tankSound,ckSound;
var inv1,inv2;


function preload(){
playerImage=loadImage("player.png");
coinImage=loadImage("coin.png");
roadImage=loadImage("roadnew.png");
motorcycleImage=loadImage("motorcycle.png");
motorcycle2Image=loadImage("motorcycle2.png");
busImage=loadImage("bus.png");
bus2Image=loadImage("bus2.png");
greenbikeImage=loadImage("greenbike.png");
blackcarImage=loadImage("blackcar.png");
truckImage=loadImage("truck.png");
truck2Image=loadImage("truck2.png");
bikeImage=loadImage("bike.png");
footpathImage=loadImage("footpath.png");
polImage=loadImage("pol.png");
vanImage=loadImage("van.png");
sportsImage=loadImage("sports.png");
limoImage=loadImage("limo.png");
pcarImage=loadImage("pcar.png");
ptruckImage=loadImage("ptruck.png");
scooterImage=loadImage("scooter.png");
pbikeImage=loadImage("pbike.png");
tankImage=loadImage("tank.png");
gameOverImg=loadImage("gameOverImg.png");
startImg=loadImage("carimage.png");


cycle1Sound=loadSound("cycle1.mp3");
policeSound=loadSound("police.mp3");
truckSound=loadSound("truck.wav");
vanSound=loadSound("van.wav");
bikeSound=loadSound("bike.wav");
carSound=loadSound("car.wav");
carhitSound=loadSound("carhit.wav");
coinSound=loadSound("coin.wav");
busSound=loadSound("bus.wav");
ckSound=loadSound("ck.wav");
}

function setup(){
createCanvas(500,720)




road=createSprite(250,360,100,100);
road.addImage(roadImage);
road.scale=0.55;
road.velocityY=3;



footpath=createSprite(0,360,50,50);
footpath.addImage(footpathImage);
footpath.velocityY=3;
footpath.scale=0.5;

footpath2=createSprite(500,360,50,500);
footpath2.addImage(footpathImage);
footpath2.velocityY=3;
footpath2.scale=0.5;


player=createSprite(250,630,50,50);
player.addImage(playerImage);
player.scale=0.5;


coinGroup=createGroup ();
vehicleGroup=createGroup();



bg1=createSprite(250,360,500,720);
        bg1.shapeColor="black";

        start=createSprite(250,360,500,720);
        start.addImage(startImg);
        start.scale=0.3;


       

inv1=createSprite(250,715,500,3);
inv2=createSprite(250,5,500,3);

}

function draw(){
background("grey");
player.velocityX=0;
player.velocityY=0;

clear();
  let display = touches.length + ' touches';
  text(display, 5, 10);

    


     

player.collide(footpath2);
player.collide(footpath);


//player.debug=true


player.setCollider("rectangle",0,0,80,190);




if(road.y>720){
    road.y=360;
}

if (footpath.y>450){
    footpath.y=360;
}

if (footpath2.y>450){
    footpath2.y=360;
}


if (coinGroup.isTouching(player)){
    coinGroup.destroyEach();
coinCollected=coinCollected+1;
coinSound.play();
}

if (coinCollected>=15){
    player.addImage(scooterImage);
    player.scale=0.35;
}

if(coinCollected>=35){
    player.addImage(pbikeImage);
    player.scale=0.3;
}

if (coinCollected>=60){
    player.addImage(pcarImage);
    player.scale=0.4;
}

if (coinCollected>=90){
    player.addImage(ptruckImage);
    player.scale=0.5;
}

if (coinCollected>=125){
    player.addImage(tankImage);
    player.scale=0.4;
}

state();

player.collide(inv1);
player.collide(inv2);


console.log(road.velocityY);




drawSprites();
stroke(0);
fill("white");
textSize(20)
text("Coins Collected:"+coinCollected,300,20);

stroke(0)
fill("white");
textSize(20)
text("SCORE:"+score,100,20);

 

}





function spawnVehicle(){
    if (frameCount%70===0){
        
        var rand=Math.round(random(1,13));
        var rand2=random(135,350);
        var vehicle=createSprite(rand2,-50,50,50);
        switch (rand){
        case 1:
            vehicle.addImage(bikeImage);
            vehicle.scale=0.3;
            vehicle.velocityY=7;
            vehicle.lifetime = 150;
            bikeSound.play();
            //vehicle.debug=true
            vehicle.setCollider("rectangle",0,0,150,320)
            break;
            case 2:
                vehicle.addImage(blackcarImage);
                vehicle.scale=0.4;
                vehicle.velocityY=7;
                vehicle.lifetime = 150;
                carSound.play();
               // vehicle.debug=true
                vehicle.setCollider("rectangle",0,0,120,300);
                break ;
             case 3:
                vehicle.addImage(busImage);
                vehicle.scale=0.5;  
                vehicle.velocityY=6;
                vehicle.lifetime = 150;
                busSound.play();
                //vehicle.debug=true
                vehicle.setCollider("rectangle",0,0,150,370)
                 break; 
                 case 4:
                    vehicle.addImage(bus2Image);
                    vehicle.scale=0.5;
                    vehicle.velocityY=6;
                   vehicle.lifetime = 150;
                   // vehicle.debug=true
                    busSound.play();
                    vehicle.setCollider("rectangle",0,0,150,350)
                     break;
                     case 5:
                        vehicle.addImage(greenbikeImage);
                        vehicle.scale=0.3;
                        vehicle.velocityY=7;
                        vehicle.lifetime = 150;
                        bikeSound.play();
                       // vehicle.debug=true
                        vehicle.setCollider("rectangle",0,0,150,350)
                         break;
                         case 6:
                            vehicle.addImage(motorcycleImage);
                            vehicle.scale=0.3;
                            vehicle.velocityY=7;
                            vehicle.lifetime = 150;
                            bikeSound.play();
                            //vehicle.debug=true
                            vehicle.setCollider("rectangle",0,0,200,380)
                             break;
                             case 7:
                                
                                vehicle.addImage(motorcycle2Image);
                                vehicle.scale=0.6;
                                vehicle.velocityY=7;
                                vehicle.lifetime = 150;
                                bikeSound.play;
                                //vehicle.debug=true
                                vehicle.setCollider("rectangle",0,0,100,200)
                             break;
                             case 8:
                                vehicle.addImage(truckImage);
                                vehicle.scale=0.5;
                                vehicle.velocityY=6;
                                vehicle.lifetime = 150;
                                truckSound.play();
                                //vehicle.debug=true
                                vehicle.setCollider("rectangle",0,0,150,450)
                                 break;
                                 case 9:
                                    vehicle.addImage(truck2Image);
                                    vehicle.scale=0.5;
                                    vehicle.velocityY=6;
                                    vehicle.lifetime = 150;
                                    truckSound.play();
                                    //vehicle.debug=true
                                    vehicle.setCollider("rectangle",0,0,210,400)
                                     break;
                                     case 10:
                                        vehicle.addImage(limoImage);
                                        vehicle.scale=0.6;
                                        vehicle.velocityY=7;
                                        vehicle.lifetime = 150;
                                        carSound.play();
                                        //vehicle.debug=true
                                        vehicle.setCollider("rectangle",0,0,120,400)
                                         break;
                                         case 11:
                                            vehicle.addImage(polImage);
                                            vehicle.scale=0.3;
                                            vehicle.velocityY=7;
                                            vehicle.lifetime = 150;
                                            policeSound.play();
                                            //vehicle.debug=true
                                            vehicle.setCollider("rectangle",0,0,180,450)
                                             break;
                                            case 12:
                                                vehicle.addImage(vanImage);
                                                vehicle.scale=0.4;
                                                vehicle.velocityY=6.5;
                                                vehicle.lifetime = 150;
                                                vanSound.play();
                                               // vehicle.debug=true
                                                vehicle.setCollider("rectangle",0,0,200,400)
                                                 break;
                                                 case 13:
                                                    vehicle.addImage(sportsImage);
                                                    vehicle.scale=0.3;
                                                    vehicle.velocityY=7;
                                                    vehicle.lifetime = 150;
                                                    carSound.play();
                                                    //vehicle.debug=true
                                                    vehicle.setCollider("rectangle",0,0,180,450)

                                     default:  break;
        }
        vehicleGroup.add(vehicle);
        
      
    }
}


function spawnCoin(){
    if (frameCount%200===0){
        var rand3=random(135,350)
        coin=createSprite(rand3,-10,5,5);
        coin.addImage(coinImage);
        coin.scale=0.2;
        coin.velocityY=3;
        coinGroup.add(coin);

    }
}



function state(){
    if (gameState===START){

        inv1.visible=false
        inv2.visible=false



        road.velocityY=0;
        footpath.velocityY=0;
        footpath2.velocityY=0;
        player.setVelocity(0,0);
        vehicleGroup.velocityY=0;
        coinGroup.velocityY=0;


        
        if (keyDown("space") && gameState===START){
        gameState=PLAY;
        }

    }
        
    
    
    if (gameState===PLAY){

        //inv1.visible=false
        //inv2.visible=false

        cycle1Sound.loop();

        start.visible=false
        bg1.visible=false



        if (keyDown("up_arrow")){
            player.velocityY=-5;
        }

        if (keyDown("down_arrow")){
            player.velocityY=5;
        }
    
        if(keyDown("left_arrow")){
            player.velocityX=-5;
        }
        if(keyDown("right_arrow")){
            player.velocityX=5;
        }


        
        
        road.velocityY=3;
        footpath2.velocityY=3;
        footpath.velocityY=3;
    
        
    
        score=score+Math.round(frameCount%10===0);
        road.velocityY=(2*2*score/1000);

        if (score>100 && score%100===0){
            ckSound.play();
        }
    
        if(player.isTouching(vehicleGroup)){
            gameState=END;
            carhitSound.play();
        }
        
        
    

        spawnCoin();
    spawnVehicle();

    camera.position.x=displayWidth/2;
    camera.position.y=player.y;
            
    
    }
    
    
    
        if (gameState===END){

            inv1.visible=false
        inv2.visible=false
    
     

            var bg=createSprite(250,360,500,720);
            bg.shapeColor="black";

        endScreen=createSprite(250,360,500,720);
        endScreen.addImage(gameOverImg);
        endScreen.scale=0.5;

        
            
     
        road.velocityY=0;
        footpath.velocityY=0;
        footpath2.velocityY=0;
        player.setVelocity(0,0);
        vehicleGroup.velocityY=0;
        coinGroup.velocityY=0;
    
    
  
        
       
    
        }
    
}
