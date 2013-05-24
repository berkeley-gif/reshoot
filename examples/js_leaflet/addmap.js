mapexample = {
  'url': 'http://ecoengine.berkeley.edu/api/photos/?format=json',

  // create map object and attach to div with id="map"
  // map height needs to be defined see css
  'map': L.map('map', {
      center: [37, -120],
      zoom: 6
    }),

  'add_to_map': function(data){
      // add layer from JSON data
      L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          html = ['<div width="200px"><img class="small_image" src="', feature.properties.media_url, '" width="200px"/></div>'].join('')
          layer.bindPopup(html);
        }}
      ).addTo(mapexample.map)
    },

  'ld': function() {
    var data = {};
    $.ajax({
    dataType: "json",
    contentType: "application/json",
    url: mapexample.url,
    data: 'authors=Wieslander&page_size=30',
    success: function(d) {
        mapexample.add_to_map(d);
      }
    });
  },

  'init': function(){
    // create baselayer from cloudmade (this is my personal one, please create your own)
    baselayer = L.tileLayer('http://{s}.tile.cloudmade.com/181ccd8ac76848af9b25f8ee70964fe5/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    });
    // add base layer
    baselayer.addTo(mapexample.map);
    // run other functions in this example in order to add baselayer
    mapexample.ld()
  }
};

$(document).ready(
  function(){
    mapexample.init()
  }
)
