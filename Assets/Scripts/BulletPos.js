#pragma strict

static var bulletSpeed:float;
var bulletWait:float;
var BulletClone:Rigidbody;
var nextFire:float;
static var bullets:int;


function Start (){

	bulletSpeed = 15;
	bulletWait = 0.4;
	nextFire = -1.0;
	bullets = 10;
	
}

function Update (){

  	

	   if((CowboyScript.turnedLeft === false) && (Input.GetKeyDown(KeyCode.Space) && Time.time > nextFire) && (bullets >=1)){
	   bullets -= 1;
	   nextFire = Time.time + bulletWait;
	   Instantiate(BulletClone,transform.position,transform.rotation);
	   	   		if(!audio.isPlaying){
	   			audio.Play();
	   		}
	   }
	   
	   if((CowboyScript.turnedLeft === true) && (Input.GetKeyDown(KeyCode.Space) && Time.time > nextFire) && (bullets >=1)){
	   bullets -= 1;
	   nextFire = Time.time + bulletWait;
	   Instantiate(BulletClone,transform.position,transform.rotation);
	   	   		if(!audio.isPlaying){
	   			audio.Play();
	   		}
	   }
	   
	   
}

