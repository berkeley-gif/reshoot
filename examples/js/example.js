var bee_example = {

  'init': function(){
    var url = 'http://ecoengine.berkeley.edu/api/photos/?format=json';

    $.ajax({
      dataType: "json",
      contentType: "application/json",
      url: url,
      data: 'authors=Wieslander&page_size=30',
      success: function(data){
        $.each(data.features, function(i, f) {
          line = ['<li><a href="', f.properties.media_url, '">', f.properties.record, '</a></li>'].join('')
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
