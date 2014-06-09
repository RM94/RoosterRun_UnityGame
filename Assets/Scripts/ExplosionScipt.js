#pragma strict

var Explosion:Rigidbody;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){

		if(other.gameObject.tag=="Bullet")
		{
	   		Instantiate(Explosion,transform.position,transform.rotation);
	   	}
	   	
}