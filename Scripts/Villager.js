#pragma strict
var god : GameObject;
var speed : int= 20;
private var health : float = 100;
private var stateNames = ["Wander","Follow","Attack","Flee","Dead"];
var isScared : boolean = false;
var state : int = 0;

function Start () {
    if (god==null) god=GameObject.Find("God");
}

function Update () {
    // villagers can be in one of several states, starting with lost. TODO: click on villager to make them worship you
    switch(state){
        case 0:
            transform.GetComponent.<Rigidbody>().AddForce(Vector3(Random.Range(-1.0, 1.0), 0, Random.Range(-1.0, 1.0))*speed*100); // go random direction
            break;
        case 1:
            if ((Mathf.Abs(god.transform.position.x-transform.position.x) > 4) || (Mathf.Abs(god.transform.position.z-transform.position.z) > 3)){
                transform.GetComponent.<Rigidbody>().AddForce((god.transform.position - transform.position)*speed); // go towards god
            }
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            transform.GetComponent.<Rigidbody>().AddForce(Vector3(0,10,0)*speed);
            break;
    }
}
function OnMouseDown () {
    switch (state){
        case 0:
            state=1;
            break;
        case 1:
            state=0;
            break;
    }
}