function initMap() {
  var e = {
      lat: 34.869497,
      lng: -111.760186
    },
    o = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      scrollwheel: !1,
      center: e,
      gestureHandling: "cooperative"
    });
  new google.maps.Marker({
    position: e,
    map: o,
    icon: "img/icon-map-marker.svg"
  })
}
