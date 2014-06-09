#pragma strict

static var detected : boolean = false;

	function OnTriggerEnter(other : Collider)
	{
		 if(other.gameObject.tag == "Cowboy")
		 { 
		  detected = true;
		 }
	}

	function OnTriggerExit(other : Collider)
	{
	 if(other.gameObject.tag == "Cowboy")
		 {
		  detected = false;
		 }
}

