#pragma strict
var speed : int = 1;
function Update () {
    transform.Rotate(Vector3.right * Time.deltaTime * speed);
}