/*
setInterval(time,1000);
function time(){
var d = new Date();
  
  
  
  var text ="Continue betting with us";
var output = document.getElementById("welcome");
var i = 0;
function writeText(){
  
  output.innerHTML= text.slice(0,i);
  i++;
  if(i>text.length){
    i=0;
  }
  
}
setInterval(writeText,150);
  
  */
  
  var c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
//drawing a line
//ctx.moveTo(0,0);
//ctx.lineTo(500,500);
//ctx.stroke


/*drawing texts*/

ctx.font='18px myFont';
ctx.fillStyle = "white";
ctx.fillText(" Designed by Lauprof",10,50);
ctx.strokeText();