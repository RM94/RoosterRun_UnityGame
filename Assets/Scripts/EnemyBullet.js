#pragma strict

var speedOfBullet:int = 5;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Cowboy")
	{
		CowboyScript.life -= 25;
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function Start () {

}


function Update () {
	transform.Translate(Vector3.right * speedOfBullet * Time.deltaTime);
}