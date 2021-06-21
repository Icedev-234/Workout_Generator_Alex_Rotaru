<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Workout Generator</title>
</head>
<body>
      
    

    <div class="container" id="text">
        <h1>
            <span>Start Training</span>
        </h1>
      </div>
    <main>
        <section id="exerciseDisplay">
    <div class="exercise-container">
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
</section>
        
    </main>
    <div class="login-btn-container">
            
            <button id="loginBtn" onclick="goBack()" name='logout'>Retry</button>
        </div> 
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script>
          function goBack() {
   window.history.back();
}
        </script>
</body>
</html>