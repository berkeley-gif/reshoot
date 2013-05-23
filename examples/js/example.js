var bee_example = {

  'init': function(){
    //var url = 'http://localhost:8000/api/photos/?format=json';
    var url = 'http://ecoengine.berkeley.edu/api/photos/?format=json';

    $.ajax({
      dataType: "json",
      contentType: "application/json",
      url: url,
      data: 'authors=Wieslander&page_size=30',
      success: function(data){
        $.each(data.features, function(i, f) {
          line = ''.concat('<li><a href="http:///', f.properties.media_url, '">', f.properties.record, '</a></li>')
          $('ul').append(line)
        });
      }
    });

  }
}


$(document).ready(
  function(){
    bee_example.init();
  }
)
