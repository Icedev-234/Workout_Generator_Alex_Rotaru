<?php
// show error reporting
error_reporting(E_ALL);
 
// set your default time-zone
date_default_timezone_set('Europe/Bucharest');
 
// variables used for jwt
$key = "lotwithcheese234%";
$issued_at = time();
$expiration_time = $issued_at + (60 * 60); // valid for 1 hour
$issuer = "http://localhost/Workout_Generator_V2/";
?>