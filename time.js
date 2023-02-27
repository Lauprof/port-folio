setInterval(time,1000);
function time(){
var d = new Date();
document.getElementById("time").innerHTML = d.toDateString() + " " + d.toLocaleTimeString();
}
var x = document.getElementById("demo");
/*

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.value = "Latitude: " + position.coords.latitude + 
  " Longitude: " + position.coords.longitude;
}
window.onload = getLocation();
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.value = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.value = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.value = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.value = "An unknown error occurred."
      break;
  }
}

//setTimeout(sendPostRequest,1000);
//function color(){
 // document.getElementById("p").style.color = "blue";
  
  //document.getElementById("p").style.color = "green";
  
//}
window.onload = sendPostRequest();
      var httpRequest = new XMLHttpRequest();
      
      function sendPostRequest() {
         httpRequest.onreadystatechange = writeContent;
      var n = document.getElementById('demo').value;
         httpRequest.open("GET", "https://diploid-rifles.000webhostapp.com/location.php");
         //httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       var n = document.getElementById('demo').value;
        alert(n);
         httpRequest.send();
      }
      
      
      function writeContent() {
         if(httpRequest.readyState === 4) {
            if(httpRequest.status == 200) {
               document.getElementById("dem").innerHTML =
               httpRequest.responseText;
            } else {
               alert('There was a problem with the request.');
               alert(httpRequest.status);
            }
         }
      }
*/

let element = document.getElementById("navigation");

element.addEventListener("click",function(){
    let ul = document.querySelector("ul");
  if(ul.style.display == "none"){
    
    ul.style.display = "block";
  }else{
    ul.style.display = "none";
    
  }

  



});


/*
      let text = "Lawrence Mburia!";
      let i = 0;

      function typeWriter() {
        if (i < text.length) {
          document.getElementById("demo").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }else{
          document.getElementById("demo").innerHTML = '';
          i = 0;
          setTimeout(typeWriter,1);
          
        }
      }

      typeWriter();
*/
  
