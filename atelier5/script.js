 $(function(){ 
sessionStorage.getItem('username'); 
alert(username);


var comptloc=localStorage.getItem('visites');
var comptses=sessionStorage.getItem('visites');
if(localStorage.comptloc==null  && sessionStorage.comptses==null)
     {
localStorage.comptloc=0; // même chose que localStorage.setItem('comptloc ', 0)
sessionStorage.comptses=0;
}
else{
 localStorage.comptloc++; 
  // en cas où la valeur est texte ça peut ne pas fonctionner utiliser la conversion en nombre comme suit:
 var compt=Number(sessionStorage.comptses);
 compt++;
 sessionStorage.comptses=compt;
}
alert(compt);

if (navigator.geolocation) { 
 navigator.geolocation.getCurrentPosition(successFunction, errorFunction); 
} else { alert('No Geolocation.'); 
} 
function successFunction(position) { 
var map = new google.maps.Map(document.getElementById('google_canvas'), 
{ zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP }); 
var geolocate = new google.maps.LatLng(position.coords.latitude, 
position.coords.longitude); 
var infowindow = new google.maps.InfoWindow({ map: map, position: geolocate, 
content: '' }); 
map.setCenter(geolocate);}
 }); 