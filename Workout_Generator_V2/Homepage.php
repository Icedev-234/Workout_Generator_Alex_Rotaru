<?php include('Homepage-options.php') ?>
<?php include('Server.php'); ?>
<?php 
if(!isset($_SESSION['username']))
{
  $_SESSION['msg']="You need to register/login to see this page.";
  header('location:index.php');
  exit();
}
else
{
    $id = $_SESSION['username'];
		$query = "select * from users where user_id = '$id' limit 1";

		$result = mysqli_query($con,$query);
		if($result && mysqli_num_rows($result) > 0)
		{

			$user_data = mysqli_fetch_assoc($result);
			return $user_data;
		}
}

if(isset($_GET['logout']))
{
  session_destroy();
  unset($_SESSION['username']);
  header('location:index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#submit-btn").click(fucntion(){
               $("#exerciseDisplay").load("Homepage-options.php");
            });
        })
    </script>
    <title>Workout Generator</title>
</head>
<body>

    <nav>
        <div class="topnav">
          <a class="active" href="./Homepage.php">Home</a>
          <a href="./contact.php">Contact</a>
          <a href="./about.php">About</a>
          <div class="login-btn-container">
            
           <a href="index.php?logout='1'"> <button id="loginBtn" value="out" name='logout'>Log Out</button></a>
        </div>
        </div>
         
      </nav>
    

    <div class="container" id="text">
        <h1>
            <span>Start Training</span>
        </h1>
      </div>
    <main>
        
            <form action="./Homepage.php" method="POST" id ="main-form">
            <?php include('errors.php') ?>
                <div class="options">
                    <div class="no-login">
                        <label for="inputMasa">
                            <span>Greutate</span>
                            <input type="number" name='masa' id="inputMasa">
                        </label>
                        <label for="inputVarsta">
                            <span>Varsta</span>
                            <input type="number" name='varsta' id="inputVarsta">
                        </label>
                        <label for="inputInaltime">
                            <span>Inaltime ( in cm )</span>
                            <input type="number" name='inaltime' id="inputInaltime">
                        </label>
                        <label for="inputGen">
                            <span>Gen</span>
                            <select type="text" name='gen' id="inputGen">
                                <option value="">Alege genul</option>
                                <option value="Male">Masculin</option>
                                <option value="Female">Feminin</option>
                            </select>    
                        </label>
                    </div>
                    <div class="with-login">

                                    
                        <label for="inputGrMuschi">
                            <span>Grupa de muschi dorita</span>
                            <select name='grMuschi' id="inputGrMuschi">
                                <option value="">Alege grupa de muschi</option>
                                <option value="deltoid">Deltoid</option>
                                <option value="biceps">Biceps</option>
                                <option value="triceps">Triceps</option>
                                <option value="cvadriceps_femural">Cvadriceps femural</option>
                                <option value="fesier">Fesieri</option>
                                <option value="biceps_femural">Biceps femural</option>
                                <option value="pectoral">Pectoral</option>
                                <option value="drept_abdominal">Drept abdominal</option>
                                <option value="oblic_extern">Oblic extern</option>
                                <option value="trapez">Trapez</option>
                                <option value="marele_dorsal">Marele dorsal</option>
                            </select>
                        </label>
                        <label for="inputDurata">
                            <span>Durata ( in minute )</span>
                            <input type="number" name='durata' id="inputDurata">
                        </label>
                        <label for="inputLocatie">
                            <span>Locatie</span> 
                            <select name='locatie' id="inputLocatie">
                                <option value="">Alegeti locatia</option>
                                <option value="acasa">Acasa</option>
                                <option value="aer_liber">Afara</option>
                            </select>
                        </label>
                        
                    </div>
                </div>
                
                <input type="submit" name='Calculate' value="Calculeaza" id="submit-btn">
            </form>
       
        <section id="exerciseDisplay">
           
        </section>
    </main>
    
</body>
</html>