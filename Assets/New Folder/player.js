#pragma strict

var isJumping : boolean = false;
var speed : float = 5.0f;
var jumpForce : float = 300.0f;


function Update () {
	rigidbody2D.velocity = new Vector2(speed, rigidbody2D.velocity.y);
	
	if(Input.GetButtonDown("Jump") && isJumping==false){
		rigidbody2D.AddForce(new Vector2(0, jumpForce));
	}
}
function OnTriggerEnter2D (other : Collider2D ){
	if (other.tag == "ground")
		isJumping = false;
}

function OnTriggerExit2D (other : Collider2D ){
	if (other.tag == "ground")
		isJumping = true;

}

