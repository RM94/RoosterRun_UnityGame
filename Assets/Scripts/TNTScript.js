#pragma strict

var health:int = 50;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "Cowboy"){
	  
	  	// make red material
			CowboyScript.life -= 50;	 		
	 		if (health <= 0){
	 		Destroy(this.gameObject);
	 	}
	 }
	 
	 //if the player hits the circle, we will do the following:
	 if(other.gameObject.tag == "Bullet"){
	  
	  	// make red material
	 	renderer.material.color = Color(255,0,0);
	 	health -= 25;
	 		
	 		if (health <= 0){
	 		Destroy(this.gameObject);
	 	}
	 }

}

function OnTriggerExit(other:Collider)
	{
	 if(other.gameObject.tag == "Bullet")
	 {
	 	// keep red material
	 	renderer.material.color = Color.red;

	 }
}