<?php
    $url="http://learn.knockoutjs.com";
    $req = $_SERVER['REQUEST_URI'];
    
    echo file_get_contents($url + $req);
?>