#pragma strict
var speed : int= 200;
var jumpHeight : int= 250;
private var health : float = 100;
private var stateNames = ["Wander","Attack"];
private var state : int;
private var idleTime : int;
var idleLength : int = 100;
var startScale : float = 2;
private var sizeChange : float;

function Start () {
    idleTime=0;
    state=0;
    if (idleLength<20){
        idleLength=20;
    }
    sizeChange=startScale/(4*idleLength);
}

function Update () {
    switch(state){
        case 0:
            if (idleTime==0){
                transform.localScale=Vector3(1,1,1)*startScale;
            }
            if (idleTime==idleLength-2){
                transform.GetComponent.<Rigidbody>().AddForce(Vector3.up*jumpHeight);
            }
            if(idleTime==idleLength-1){
                transform.GetComponent.<Rigidbody>().AddForce(Vector3(Random.Range(-1.0, 1.0), 0, Random.Range(-1.0, 1.0))*speed); // go random direction
            }
            break;
        case 1:
            // TODO: ATTACK
            break;
    }
    idleTime= (idleTime+1)%idleLength;
    transform.localScale-=Vector3(1,1,1)*sizeChange;
}
function OnMouseDown () {
    if(Input.GetAxis("Horizontal")){
        var h : float = Input.GetAxis("Horizontal");
        transform.GetComponent.<Rigidbody>().AddForce(Vector3.right*h*speed);
    }
    if(Input.GetAxis("Vertical")){
        var v : float = Input.GetAxis("Vertical");
        transform.GetComponent.<Rigidbody>().AddForce(Vector3.forward*v*speed);
    }
}