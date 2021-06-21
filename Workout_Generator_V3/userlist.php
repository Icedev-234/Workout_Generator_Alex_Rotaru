<?php
require_once __DIR__ . '/vendor/autoload.php';

 
$db=mysqli_connect('localhost','root','','user') or die("Could not connect to datebase...");

if(isset($_POST['List']))
  {   

    
      $username=mysqli_real_escape_string($db,$_POST['username']);
      $Pass=mysqli_real_escape_string($db,$_POST['password']);
      $Email=mysqli_real_escape_string($db,$_POST['email']);
      $user_check_querry="SELECT * FROM users WHERE  email='$Email'";
      $results=mysqli_query($db,$user_check_querry);
      $date = date('m/d/Y h:i:s a', time());
      if(mysqli_num_rows($results)>0)
      {
          $logged_user_check="SELECT * FROM logged_user WHERE  email='$Email'";
          $results=mysqli_query($db,$logged_user_check);
          if(mysqli_num_rows($results)==0)
          {
            $sql="INSERT INTO logged_user (username, email,activity) VALUES ('$username','$Email',now())";
            mysqli_query($db,$sql);
          }
          else
          {
            $sql="UPDATE logged_user
            SET activity=now()
            WHERE email='$Email'";
            mysqli_query($db,$sql);
          }
      }
      
      $sql="SELECT * FROM logged_user ORDER BY activity DESC";
      $result=mysqli_query($db,$sql);
      $top=1;
      echo "<table border='1'>
      <tr>
      <th>Nr.</th>
      <th>Id</th>
      <th>Username</th>
      <th>Email</th>
      <th>Activity</th>
      </tr>";
      $jsonData = array();
      while($row = mysqli_fetch_array($result))
      {
      echo "<tr>";
      echo "<td>" . $top . "</td>";
      echo "<td>" . $row['ID'] . "</td>";
      echo "<td>" . $row['username'] . "</td>";
      echo "<td>" . $row['email'] . "</td>";
      echo "<td>" . $row['activity'] . "</td>";
      echo "</tr>";

      $id=$row['ID'];
      $user=$row['username'];
      $mail=$row['email'];
      $jsonData[] = array('ID'=>$id,'username'=>$user,'email'=>$mail);
      $top++;

      }
      echo "</table>";

      echo "<br>";
      print "<h2>".json_encode($jsonData)."<h2>"; 

      mysqli_close($db);
      }
    
    

?>