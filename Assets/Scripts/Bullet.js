#pragma strict

static var score:int;


function Start () {

		score = 0;

}

function Update () {

		

	if(CowboyScript.turnedLeft === false) {
		transform.Translate(BulletPos.bulletSpeed*Time.deltaTime,0,0);
	}
	
	if(CowboyScript.turnedLeft === true) {
		transform.Translate(-BulletPos.bulletSpeed*Time.deltaTime,0,0);
	}

}

	function OnTriggerEnter(other:Collider)
	{
		if(other.gameObject.tag=="Rooster")
		{
			score += 20;
			//destroy the bullet
			Destroy(this.gameObject);
			//destroy the rooster
			Destroy(other.gameObject);
			FieldOfView.detected = false;
		}
	}
	
	function OnBecameInvisible(){
		Destroy(gameObject);
	}

