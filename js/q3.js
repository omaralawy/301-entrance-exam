
// constractour
var Aray = [];
function Done(activity) {
  this.activity = activity;
  // to push to the Array
  Aray.push(this);
}
//  localstoreg
function setthing() {
    var newthing = JSON.stringify(Array)
    localStorage.setItem('newthing' newthing)
}
function getthing() {
    var storedthing = localStorage.getItem('newThing');
    if (localstoreg.newthing) {
        
        
    }
}
getthing();
// render
// i am sory i do not have time to test things i will just do the things that i remamber
function render() {
    var container = document.getElementById('containInput')
    var ol = document.createElemen ('ol');
    container.appendChild('ol');
    for ( var m=0 ; Aray.length ; m++)
    var liel = document.createElement('li');
    liel.textContent= `${Aray[m]}`;
}
// call the function
render();