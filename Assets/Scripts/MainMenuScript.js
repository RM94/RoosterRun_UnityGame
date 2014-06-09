#pragma strict

    var initialColor : Color;
    var hit: RaycastHit;
	
    function Start() {
    
    initialColor = renderer.material.color;
    
}
     
function OnMouseOver()
    {
    renderer.material.color = Color.green;
    }
     
    function OnMouseExit()
    {
    renderer.material.color = initialColor;
    }



    function Update() {
    
    var ray = Camera.main.ScreenPointToRay(Input.mousePosition);

    
    if (Input.GetMouseButtonDown(0)) {
						
			if (Physics.Raycast(ray, hit)) {
				if(hit.rigidbody.tag == "PlayGame") {
				
				Application.LoadLevel ("Level1");

			}
		
    

				if(hit.rigidbody.tag == "Controls") {
				
				Application.LoadLevel ("HowToPlay");

			}
		
    
	
						
				if(hit.rigidbody.tag == "Exit") {
				
				Application.Quit();

			}
		
		

				if(hit.rigidbody.tag == "Back") {
				
				Application.LoadLevel ("MainMenu");

			}
		}
    
	}
}