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
                    <h3 class="exercise-name">Abdomene</h3>
                    
                    <div class="exercise-photo-instructions">
                        
                        <div class="photo-container">
                             <video controls="controls" src="./videos/Exercitii pentru abdomen perfect_ Abdomene cu mâinile relaxate.mp4" width="640" height="480">
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