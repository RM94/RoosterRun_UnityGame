#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if (other.gameObject.tag == "Cowboy"){
		CowboyScript.life = 100;
		Destroy(this.gameObject);	
	}
}