#pragma strict
var speed : int = 20;
function Start () {

}

function Update () {
    if(Input.GetAxis("Horizontal")){
        var h : float = Input.GetAxis("Horizontal");
        transform.GetComponent.<Rigidbody>().AddForce(Vector3.right*h*speed);
    }
    if(Input.GetAxis("Vertical")){
        var v : float = Input.GetAxis("Vertical");
        transform.GetComponent.<Rigidbody>().AddForce(Vector3.forward*v*speed);
    }
}
