#pragma strict

private var anim:Animator;
static var IsHurt:boolean;
static var turnedLeft:boolean;
static var life:int = 100; //100 health points
var lives:int = 5; //5 lives
static var timer: float = 0; // timer for hurt collisions
var countdown = 0.5;
 
var fallingSpeed:float;


static var IsGrounded:boolean;


function Start () {


		//get the animator component associated with the player
		anim = GetComponent(Animator);
}

		function OnCollisionEnter(other:Collision) 
		{
			if(other.gameObject.tag == "Boundary"){
			lives -= 1;
			life = 100;

				if (lives <= 0) {
					Application.LoadLevel ("GameOver");
				}
				else if (Application.loadedLevelName == "Level1"){ 
				gameObject.transform.position = Vector3(-2.53,-13.21741,0);
				}
				else if (Application.loadedLevelName == "Level2"){ 
				gameObject.transform.position = Vector3(-2.463563,27.60191,0);
				}
				else if (Application.loadedLevelName == "Level3"){ 
				gameObject.transform.position = Vector3(-2.343427,-9.545573,0);
				}
			}
			
			if((other.gameObject.tag=="Rooster") &&(turnedLeft === true)){
				anim.SetBool("Hurt",true);
				IsHurt = true;
				timer -= Time.deltaTime; // Start Countdown

			}
			
			if((other.gameObject.tag=="Rooster") &&(turnedLeft === false)){
				anim.SetBool("Hurt",true);
				IsHurt = true;
			}
			
		}

		function OnCollisionExit(other:Collision) 
		{
			if(other.gameObject.tag=="Rooster"){
				anim.SetBool("Hurt",false);
				Destroy(other.gameObject);
				life -= 25;
				FieldOfView.detected = false;
			}
		
		}

function FixedUpdate () {


		if (life <= 0){
			life = 100;
			lives -= 1;
			gameObject.transform.position = Vector3(-2.53,0,0);

		}
					
			if (lives <= 0){
				Application.LoadLevel ("GameOver");
				}
			
		
		timer -= Time.deltaTime; // Start Countdown


		if (IsHurt === true){
		timer = countdown; // Timer is now 0.5 seconds 
		
			
		}
		if (timer >= 0){
				IsHurt = false;
				transform.Translate(Vector3.left * 4.5 * Time.deltaTime);
			}
			
		var hit : RaycastHit;
			if (Physics.Raycast (transform.position, Vector3.down, hit, 4.0)) {
			var distanceToGround = hit.distance;
				if (distanceToGround <=	1.4){
					IsGrounded = true;
				}else{
				IsGrounded = false;
				}
		}

		if(Input.GetKey(KeyCode.LeftArrow) && (timer <= 0))
		{
			anim.SetBool("Idle",false);
			transform.Translate(Vector3.left * 4.5 * Time.deltaTime);
			if (turnedLeft === false){
				transform.localScale += Vector3(-2,0,0);
				turnedLeft = true;
			}
			anim.SetBool("Run",true);
		}
		//animation facing right
		else if(Input.GetKey(KeyCode.RightArrow) && (timer <= 0))
		{
			anim.SetBool("Idle",false);
			transform.Translate(Vector3.right * 4.5 * Time.deltaTime);
			if (turnedLeft === true){
				transform.localScale += Vector3(2,0,0);
				turnedLeft = false;
			}
			anim.SetBool("Run",true);
		}
		else{
		anim.SetBool("Run",false);
		anim.SetBool("Idle",true);
		}
		
		anim.SetFloat("fallingspeed",rigidbody.velocity.y);

		if (Input.GetKeyDown(KeyCode.UpArrow) && IsGrounded)
		{
			rigidbody.AddForce(Vector3(0,7,0),ForceMode.Impulse);
		}

}


	//varibale for the GUISkin
		
  	function OnGUI()
	{
	
	GUI.color = Color.red;
	 //parameters: x, y, width, height
	 GUI.Label(Rect(10,5,90,50),"Score: "+Bullet.score);
	 GUI.Label(Rect(160,5,90,50),"Lives: "+lives);
	 GUI.Label(Rect(330,5,90,50),"Health: "+life);
	 GUI.Label(Rect(700,5,90,50),"Bullets: "+BulletPos.bullets);
	} 





