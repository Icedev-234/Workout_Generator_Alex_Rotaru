<?php
// required headers
header("Access-Control-Allow-Origin: http://localhost/Workout_Generator_V2/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once 'config/core.php';
require_once ('vendor/autoload.php');

use \Firebase\JWT\JWT;

$data = json_decode(file_get_contents("php://input"));
 
// get jwt
$jwt=isset($data->jwt) ? $data->jwt : "";

// if jwt is not empty
if($jwt){
 
    // if decode succeed, show user details
    try {
        // decode jwt
        $decoded = JWT::decode($jwt, $key, array('HS256'));
 
        // set response code
        http_response_code(200);
 
        // show user details
        echo json_encode(array(
            "message" => "Access granted.",
            "data" => $decoded->data
        ));
 
    }
 
    catch (Exception $e){
 
        // set response code
        http_response_code(401);
     
        // tell the user access denied  & show error message
        echo json_encode(array(
            "message" => "Access denied.",
            "error" => $e->getMessage()
        ));
    }
}
 
else{
 
    // set response code
    http_response_code(401);
 
    // tell the user access denied
    echo json_encode(array("message" => "Access denied."));
}
?>
