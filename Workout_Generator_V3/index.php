<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
 
        <title>Workout Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="./style-V2.css">
 
    </head>
<body>
    <div class="spinner">
    <section>
     <div class='loader'>
         <span style="--i:1;"></span>
         <span style="--i:2;"></span>
         <span style="--i:3;"></span>
         <span style="--i:4;"></span>
         <span style="--i:5;"></span>
         <span style="--i:6;"></span>
         <span style="--i:7;"></span>
         <span style="--i:1;"></span>
         <span style="--i:9;"></span>
         <span style="--i:10;"></span>
         <span style="--i:11;"></span>
         <span style="--i:12;"></span>
         <span style="--i:13;"></span>
         <span style="--i:14;"></span>
         <span style="--i:15;"></span>
         <span style="--i:16;"></span>
         <span style="--i:17;"></span>
         <span style="--i:18;"></span>
         <span style="--i:19;"></span>
         <span style="--i:20;"></span>
         <span style="--i:21;"></span>
     </div>

    </section> 
    </div>
    <nav>
        <div class="topnav">
          <a href="#" id='home'">Home</a>
          <a href="#" id='logout'> Log Out</a>
          <a href="#" id='login'>Login</a>
          <a href="#" id='sign_up'>Register</a>
          <a href="#" id='update_account'>Update</a>
          <a href="#" id='user_list'>List</a>
          <div class="other_op">
        <a href="#" class="fa fa-rss" id="feed"></a>
        <a href="#"class="fa fa-question-circle" id='about'></a>
        </div>
        </div>

           
         
    </nav>

  <main role="main" >
 
    <div class="row">
        <h3>
            <span>W</span>
            <span>o</span>
            <span>r</span>
            <span>k</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>_</span>
            <span>G</span>
            <span>e</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
        </h3>
        <div class="col">
 
            <!-- where prompt / messages will appear -->
            <div id="response"></div>
 
            <!-- where main content will appear -->
            <div id="content">
                
            </div>
            <div id="Listing">
            <style>
            table, th, td {
  border: 1px solid black;
}

table {
  width: 100%;
}

th,td{
  font-size:2em;
  color:#111;
}

h2{
  color:#111;
}
            </style>
            <?php include('userlist.php') ?>
            
            </div>
            <div id="exercise">
                
             <?php
             $greutate="";
             $varsta="";
             $inaltime="";
             $Gen="";
             $Grmuschi="";
             $durata="";
             $locatie=""; 
      if(isset($_POST['Calcultate']))
      {
          $greutate=$_POST['G'];
          $varsta=$_POST['V'];
          $inaltime=$_POST['H'];
          $Gen=$_POST['gen'];
          $Grmuschi=$_POST['grmuschi'];
          $durata=$_POST['durata'];
          $locatie=$_POST['locatie']; 
          
      }         
      
    
     if(($Grmuschi=="cvadriceps_femural")&&(($greutate>=40)&&($greutate<=50)))
     {
        header('location:./Homepage-ex1.php');

     }
     else
    if((($greutate>=50) && ($greutate<=60))&&(($varsta>=15) && ($varsta<=30))&&(($Grmuschi=="deltoid")||($Grmuschi=="triceps"))&&($locatie=="acasa"))
    {
      header('location:./Homepage-ex2.php');
      
    }
      else
    
     if((($greutate>=35)&&($greutate<=45))&&($inaltime>=160))
     {
      header('location:./Homepage-ex3.php');
     }
    
     else
     
      if(($greutate>=35)&&($greutate<=45))
         {
           header('location:./Homepage-ex4.php');
         }
         else
         if($locatie=="aer_liber")
         {
             header('location:./Homepage-ex5.php');
         } 
     ?>
            </div>
            
            
                

        </div>
    </div>
 
  </main>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="./script.js">
  
</script>
 
</body>
</html>