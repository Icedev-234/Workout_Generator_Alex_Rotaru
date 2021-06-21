<?php


header("Access-Control-Allow-Origin: http://localhost/Workout_Generator_V2/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$greutate=$data->masa;
$varsta=$data->varsta;
$inaltime=$data->inaltime;
$gen=$data->gen;
$grMuschi=$data->grMuschi;
$durata=$data->durata;
$locatie=$data->locatie;


if($greutate && $varsta && $inaltime && $gen && $grMuschi && $durata && $locatie){
 
    if($greutate>40)
    {
        echo "<style>
        .Exercise {
width: 80%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
}

.example-photo {
border: 1px solid #ddd;
border-radius: 0.4px;
padding: 0.4px;
width: 20em;
}

.example-photo :hover {
box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.exercise-container {
background-color: #5cbc76;
color: #eeeef1;
padding: 1em;
border: none;
border-radius: 1.5em;
margin: 2em 0;
display: flex;
max-width: 50em;
}

.exercise-name {
padding: 0.5em 0;
font-size: 2em;
text-align: center;
}
.exercise-instructions {
list-style: disc;
margin: 1em 0;
}
.exercise-instructions li {
margin: 0.1em 1em;
font-size: 1.5em;
}
.exercise-photo-instructions {
margin: 1em 0;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
}
.photo-container {
padding: 1em;
}

@media screen and (max-width: 850px) {
.options {
flex-direction: column;
}
header {
display: flex;
flex-direction: column;
}
.login-btn-container {
width: 80%;
display: flex;
justify-content: flex-end;
}
.logo-container {
margin-top: 3em;
}
}
@media screen and (max-width: 460px) {
main {
margin: 0;
width: 100%;
}
.logo-container {
margin-bottom: 3em;
}
label {
margin: 1em 0;
}
.exercise-instructions li {
font-size: 1em;
}
.example-photo {
width: 10em;
}

label span {
text-align: center;
width: 50%;
font-size: 1.1em;
font-weight: 500;
color: white;
}
}
      </style>    
     
     <section id="exerciseDisplay">
<div class="exercise-container" id='ex1'>
        <div class="instructions">
            <h3 class="exercise-name">Podul cu extensie de picior</h3>
            <ul class="exercise-instructions">
                <li>stai intinsa pe spate cu genunchii flexati</li>
                <li>ridica-ti piciorul pe diagonala</li>
                <li>incordeaza-ti fesierii si ridica-ti trunchiul cat de sus poti;</li>
                <li>din aceasta pozitie, coboara-ti trunchiul foarte aproape de podea apoi reia;
                </li>
                <li>exercitiul se executa timp de 45 de secunde, pana la un minut;</li>
            </ul>
            <div class="exercise-photo-instructions">
                <div class="photo-container">
                    <a href="./images/podul-cu-extensie1.jpg" target="_blank">
                        <img src="./images/podul-cu-extensie1.jpg" alt="" class="example-photo">
                    </a>
                </div>
                <div class="photo-container">
                    <a href="./images/podul-cu-extensie1.jpg" target="_blank">
                        <img src="./images/podul-cu-extensie1.jpg" alt="" class="example-photo">
                    </a>
                </div>
                <div class="photo-container">
                    <a href="./images/podul-cu-extensie1.jpg" target="_blank">
                        <img src="./images/podul-cu-extensie1.jpg" alt="" class="example-photo">
                    </a>
                </div>
                
                
            </div>
        </div>
    </div>
</section> ";
    }
    
 
    // set response code
    http_response_code(200);
 
    // generate jwt
    echo json_encode(
            array(
                "message" => "Success.",
                
            )
        );
 
}
else{
 
    // set response code
    http_response_code(401);
 
    // tell the user login failed
    echo json_encode(array("message" => "Fail."));
}










?>