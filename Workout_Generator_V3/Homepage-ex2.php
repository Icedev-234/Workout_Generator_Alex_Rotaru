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
      


    
    <main>
      <section id="exerciseDisplay">
      <div class="exercise-container">
                <div class="instructions">
                    <h3 class="exercise-name">Flotari</h3>
                    <ul class="exercise-instructions">
                        <li>asigura-te ca varful picioarelor nu va derapa de pe suprafata de actiune unde executi flotarile;</li>
                        <li>de indata ce flexezi bratele si inclini corpul,ai grija ca posteriorul se nu fie la un nivel diferit fata de celelalte parti ale corpului;</li>
                        <li>Asigura-te ca executi miscarea uniform fara sa pierzi controlul bratelor;</li>
                        <li>Incepe cu un numar de repetari pe care le poti sustine uaor si apoi adauga pe masura ce avansezi;
                        </li>
                        <li>Durata acestui exercitiu depinde de cat poati sa faci;</li>
                    </ul>
                    <div class="exercise-photo-instructions">
                        
                        <div class="photo-container">
                             <video controls="controls" src="./videos/Slabeste cu Serban - Cum sa executi corect o flotare_.mp4" width="640" height="480">
                            </video>
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