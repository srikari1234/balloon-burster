var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","60058543-07ae-4fd1-ad4e-36c10f0761e4"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"caMIqBFLUJEAsqIH4P7t2wpUyfX14g7c","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"NtBn62turoTm.zSfEWTZ68__eTd1nRx3","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"oZdz_KwF7cSORuDvpYmaPk1zwmOdSQTv","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"mg7qomG1iJOo7sIDmnPEW2PHb06WbPnj","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"725x5rGu5a66ghEqBpt.egt9FxOfmzGm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"arro","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"hePLsXhWX2tQdzAxxDzZTJOh.rS1yugU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"60058543-07ae-4fd1-ad4e-36c10f0761e4":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

     var redB = createGroup();
var greenB = createGroup();
var yellowB = createGroup();
var blueB = createGroup();
var arrowGroup  = createGroup();



//creating a background
var scene = createSprite(200, 200,400,400);
scene.setAnimation("sunshine_showers_1");
scene.scale=1;

//creating a bow
var bow = createSprite(350, 200);
bow.setAnimation("arro");


//generate some randome number here
var rand=randomNumber(1, 100);
console.log(rand);


var count = 0;


function draw() {
  createEdgeSprites();
  background("white");
 
  bow.y= World.mouseY; 
  
if (keyDown("space")) {
    spawnArrow(); 
    playSound( "assets/category_whoosh/arrow_whoosh_2.mp3");      
  }
    
   
 
  
  //creating select balloon
var select_balloon = Math.round(random(1,4));
console.log(select_balloon);

if (World.frameCount%80==0) {
  if (select_balloon==1) {
    redballoon();
  }else if (select_balloon==2){ 
    greenballoon();
  }else if (select_balloon==3){ 
    blueballoon();
  }else {
    yellowballoon();
}
}

if (arrowGroup.isTouching(yellowB)) {
  yellowB.destroyEach();
  arrowGroup.destroyEach();
  count = count+1;
  
}
if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  count = count+2;
  
}
if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
  count = count+3;
  
}
if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  count = count+4;
  
}



drawSprites();
text("score"+count,270,30);
  
} 

function blueballoon(){
 //creating blue balloon
var blue = createSprite(10,randomNumber(20, 400),20,20);
blue.setAnimation("blue");
blue.velocityX=5;
blue.lifetime=150;
blueB.add(blue);
}

function yellowballoon(){
// creating yellow balloon
var yellow = createSprite(10,randomNumber(20, 400),20,20);
yellow.setAnimation("yellow");
yellow.velocityX = 3;
yellow.lifetime=150;
yellowB.add(yellow);
}                  

function redballoon(){
//creating red balloon
var red = createSprite(10,randomNumber(20, 400),20,20);
red.setAnimation("red");
red.velocityX=3;
red.lifetime=150;
redB.add(red);
}

function greenballoon(){
//creating green balloon
var green = createSprite(10,randomNumber(20, 400),20,20);
green.setAnimation("green");
green.velocityX=3;
green.lifetime=150;
greenB.add(green);
}
function spawnArrow(){
var arrow = createSprite(100,100,60,10);
arrow.setAnimation("arrow");
arrow.x = 360;
arrow.y = bow.y;
arrow.velocityX = -4;
arrow.lifetime = 100;
arrowGroup.add(arrow);    
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
