<?php 

include('errors.php');
$errors=array();

$Greutate="";
$Varsta="";
$Inaltime="";
$Gen="";
$G_Muschi="";
$Durata="";
$Locatie="";



if(isset($_POST['Calculate']))
{
    $Greutate=$_POST['masa'];
    $Varsta=$_POST['varsta'];
    $Inaltime=$_POST['inaltime'];
    $Gen=$_POST['inputGen'];
    $G_Muschi=$_POST['inputGrMuschi'];
    $Durata=$_POST['inputDurata'];
    $Locatie=$_POST['inputLocatie'];

    if(empty($G_Muschi))
    {
        array_push($errors,"Trebuie sa specifici tipul de muschi...");
    }
    if(empty($Varsta))
    {
        array_push($errors,"Sper ca n-ai uitat cati ani ai...");
    }
    if(empty($Inaltime))
    {
        array_push($errors,"Specifica inaltimea ta.");
    }
    if(empty($Gen))
    {
        array_push($errors,"Alegeti genul");
    }
    if(empty($Greutate))
    {
        array_push($errors,"Specificati greutatea");
    }
    if(empty($Durata))
    {
        array_push($errors,"Specifica cat vrei sa tina antrenamentul");
    }
    if(empty($Locatie))
    {
        array_push($errors,"Specifica unde vrei sa faci antrenamentul");
    }
    if(count($errors)==0)
    {
        if((($Greutate>=50) && ($Greutate<=60))&&(($Varsta>=15) && ($Varsta<=30))&&(($G_Muschi=="deltoid")||($G_Muschi=="triceps"))&&($Locatie=="acasa"))
        {
            header('location:./Homepage-ex2.php');
        }
        else
        if($G_Muschi=="drept_abdominal")
        {
            header('location:./Homepage-ex4.php');
        }
        else
        if(($G_Muschi=="cvadriceps_femural")&&(($Greutate>=40)&&($Greutate<=50)))
        {
            header('location:./Homepage-ex1.php');
        }
        else
        if(($G_Muschi=="")&&(($Greutate>=35)&&($Greutate<=45)))
        {
            header('location:./Homepage-ex3.php');
        }
        else
        {
            array_push($errors,"Nu avem exercitiu pentru specificatiile tale...");
        }
    }

}



?>