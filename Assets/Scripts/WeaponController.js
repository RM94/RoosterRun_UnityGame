#pragma strict

private var anim:Animator;
var weaponChange:int;
var weaponOn:boolean;

function Start (){

	//get the animator component associated with the player
	anim = GetComponent(Animator);
}

function Weapons(){
		if(weaponChange == 0)
		{
			anim.SetBool("NoWeapon",false);
			anim.SetBool("Weapon1",true);
			anim.SetBool("Weapon2",false);
			anim.SetBool("Weapon3",false);
			anim.SetBool("Weapon4",false);
			
			
		}
		
	if(weaponChange == 1)
		{
			anim.SetBool("NoWeapon",false);
			anim.SetBool("Weapon1",false);
			anim.SetBool("Weapon2",true);
			anim.SetBool("Weapon3",false);
			anim.SetBool("Weapon4",false);
			

		}
		
	if(weaponChange == 2)
		{
			anim.SetBool("NoWeapon",false);
			anim.SetBool("Weapon1",false);
			anim.SetBool("Weapon2",false);
			anim.SetBool("Weapon3",true);
			anim.SetBool("Weapon4",false);
			
	
		}
		
	if(weaponChange == 3)
		{
			anim.SetBool("NoWeapon",false);
			anim.SetBool("Weapon1",false);
			anim.SetBool("Weapon2",false);
			anim.SetBool("Weapon3",false);
			anim.SetBool("Weapon4",true);
			

		}
		
}


function Update (){

	anim.SetBool("Weapon1",true);

		if(Input.GetKeyDown(KeyCode.LeftAlt)){
			weaponChange += 1;
			}
			
			if(weaponChange >= 4){
					weaponChange = 0;
					//function wepRemember();
				}
			
		if (weaponOn === true){
			Weapons();
		}
		
		if (CowboyScript.IsGrounded === false){
			anim.SetBool("NoWeapon",true);
			weaponOn = false;
			anim.SetBool("Weapon1",false);
			anim.SetBool("Weapon2",false);
			anim.SetBool("Weapon3",false);
			anim.SetBool("Weapon4",false);
		}
		else{
			anim.SetBool("NoWeapon",false);
			weaponOn = true;
		}
		
				if (CowboyScript.IsHurt === true)
		{
			anim.SetBool("NoWeapon",true);
			weaponOn = false;
			anim.SetBool("Weapon1",false);
			anim.SetBool("Weapon2",false);
			anim.SetBool("Weapon3",false);
			anim.SetBool("Weapon4",false);
			
		}

		if (CowboyScript.timer >= 0)
		{
			anim.SetBool("NoWeapon",false);
			weaponOn = true;
		}
		
}