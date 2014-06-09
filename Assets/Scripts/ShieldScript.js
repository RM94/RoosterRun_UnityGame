#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if (other.gameObject.tag == "Cowboy"){
		Bullet.score += 2000;
		Destroy(this.gameObject);	
	}
}