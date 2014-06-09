#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if (other.gameObject.tag == "Cowboy"){
		BulletPos.bullets += 10;
		Destroy(this.gameObject);	
	}
}