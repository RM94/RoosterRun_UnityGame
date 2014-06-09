#pragma strict

var enemyBullet:Rigidbody;
var timer : float = 1.5;
var countdown = 1.5;




function Start () {




}
function Update () {
	
		
		timer -= Time.deltaTime; // Start Countdown
	
	
	
	if (FieldOfView.detected === true && (timer <= 0))
	{
		timer = countdown;
		Instantiate(enemyBullet,transform.position,transform.rotation);		
	}


}