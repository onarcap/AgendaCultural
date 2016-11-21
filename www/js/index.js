$(function () {

 $('.toggle-btn').click(function(){
	$('.wrap').toggleClass('open');

 });

 $('.toggle-overlay, .menu-list a').click(function(){
	$('.wrap').removeClass('open');

 });

 $('.all').click(function(){
	$('.header-All').toggleClass('down');

 });

});

function changeImgOrMap(name){

  if(document.getElementById(name).classList.contains('vis')){

    document.getElementById(name).classList.remove('vis');
    document.getElementById(name).classList.add('ocul');

    document.getElementById("map" + name).classList.remove('ocul');
    document.getElementById("map" + name).classList.add('mapa');
    document.getElementById("map" + name).classList.add('vis');

    urlCoordinate = "";
    updateMap(urlCoordinate, name);
  }else{
    document.getElementById(name).classList.remove('ocul');
    document.getElementById(name).classList.add('vis');

    document.getElementById("map" + name).classList.remove('mapa');
    document.getElementById("map" + name).classList.remove('vis');
    document.getElementById("map" + name).classList.add('ocul');
  }
}

function updateMap(urlCoordinate, name) {
  lat = 28.4578159;
  long = -16.3213541;
  setLocalization("map" + name, lat, long);

}

function setLocalization(map, lat, lng){
  var mapCanvas = document.getElementById(map);
  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(mapCanvas, mapOptions);

  var position = new google.maps.LatLng(lat, lng);

  marker = new google.maps.Marker({
    position:position,
  })

  marker.setMap(map);
}
