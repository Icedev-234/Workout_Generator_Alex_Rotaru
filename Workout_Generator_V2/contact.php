
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style-contact.css" />
    <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
    <title>Workout Generator</title>
  </head>
  <body>
  <?php include('contact-details.php')?>

    <nav>
      <div class="topnav">
        <a  href="./index.php">Home</a>
        <a class="active" href="./contact.php">Contact</a>
        <a  href="./about.php">About</a>
      </div>
    </nav>
  
    <h4 class="sent-notification"></h4>

<form id="myForm" class="wrapper" action="#" method="POST">
  
  <h1>Contact Us</h1>
  <div class="Input">
  <label>Name</label>
  <input id="name" type="text" name='name' class="input" placeholder="Enter Name">
  <br><br>
</div>

<div class="Input">
  <label>Email</label>
  <input id="email" type="text" name='email' class="input" placeholder="Enter Email">
  <br><br>
</div>

  <div class="Input">
  <label>Subject</label>
  <input id="subject" type="text" name='subject' class="input" placeholder=" Enter Subject">
  <br><br>
</div>

  <div class="Input">
  <p>Message</p>
  <textarea id="body" name='body' rows="5" class="input" name='body' placeholder="Type Message"></textarea><!--textarea tag should be closed (In this coding UI textarea close tag cannot be used)-->
  <br><br>
</div>
<div class="Input">
  <button type="button" onclick="sendEmail()" class="btn" name='send' value="Send An Email">Submit</button>
</div>
</form>
        
   
        
     <div class="team-members">
       <h1>Our Team</h1>
       <div class="ps">
         <h3>Rotaru Vasile Alexandru</h3>
         <h3>Craciun Dragos</h3>
         <h3>Loghin Gabriela Alina</h3>
       </div>
     </div>

     
	<script type="text/javascript">
        function sendEmail() {
            var name = $("#name");
            var email = $("#email");
            var subject = $("#subject");
            var body = $("#body");

            if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)) {
                $.ajax({
                   url: 'sendEmail.php',
                   method: 'POST',
                   dataType: 'json',
                   data: {
                       name: name.val(),
                       email: email.val(),
                       subject: subject.val(),
                       body: body.val()
                   }, success: function (response) {
                        $('#myForm')[0].reset();
                        $('.sent-notification').text("Message Sent Successfully.");
                   }
                });
            }
        }

        function isNotEmpty(caller) {
            if (caller.val() == "") {
                caller.css('border', '1px solid red');
                return false;
            } else
                caller.css('border', '');

            return true;
        }
    </script>

  </body>
</html>