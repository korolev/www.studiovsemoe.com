<?php
    $url="http://learn.knockoutjs.com";
    $req = $_SERVER['REQUEST_URI'];
    header('Content-Type: application/json');
    echo json_encode(file_get_contents($url.$req));
?>