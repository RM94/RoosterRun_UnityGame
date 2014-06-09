#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider)
	{
		 if(other.gameObject.tag == "Cowboy")
		 { 
			Application.LoadLevel ("Level2");
		 }
	}