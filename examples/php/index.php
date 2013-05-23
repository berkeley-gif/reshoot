<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8"/>
    <title>
      Example for Berkeley Ecoinformatics Engine
    </title>
  </head>

  <body>
    <ul>

    <?php

    $url = 'http://ecoengine.berkeley.edu/api/photos/?format=json&page_size=30&collection_code=VTM';
    $json = file_get_contents($url);
    # use php notation if using json_decode
    # however the $json content can be parsed in different ways (it is a simple text on load)
    $obj = json_decode($json);

    foreach ($obj -> features as $feature) {
        $line = '<li><a href="'.$feature -> properties -> media_url.'">';
        $line .= $feature -> properties -> record.'</li>';
        echo $line;
    }

    ?>

    </ul>
</html>
