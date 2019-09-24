var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x000ff});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var sprite = new PIXI.Sprite.from("background.png");
var head = new PIXI.Sprite.from("head.png");
var body = new PIXI.Sprite.from("body.png");
var rightArm = new PIXI.Sprite.from("rarm.png");
var leftArm = new PIXI.Sprite.from("larm.png");
var rightLeg = new PIXI.Sprite.from("rleg.png");
var leftLeg = new PIXI.Sprite.from("lleg.png");


sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;
rightLeg.anchor.x = 0.5;
rightLeg.anchor.y = 0.5;
leftLeg.anchor.x = 0.5;
leftLeg.anchor.y = 0.5;
head.anchor.x = 0.5;
head.anchor.y = 0.5;
body.anchor.x = 0.5;
body.anchor.y = 0.5;
rightArm.anchor.x = 0.5;
rightArm.anchor.y = 0.5;
leftArm.anchor.x = 0.5;
rightArm.anchor.y = 0.5;

rightLeg.position.x = 100;
rightLeg.position.y = 300;
leftLeg.position.x = 110;
leftLeg.position.y = 300;
head.position.x = 106;
head.position.y = 260;
leftArm.position.x = 115;
leftArm.position.y = 264;
rightArm.position.x = 96;
rightArm.position.y = 280;
body.position.x = 106;
body.position.y = 280;
sprite.position.x = 200;
sprite.position.y = 200;


stage.addChild(sprite);
stage.addChild(rightLeg);
stage.addChild(leftLeg);
stage.addChild(head);
stage.addChild(leftArm);
stage.addChild(rightArm);
stage.addChild(body);



function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}

animate();
