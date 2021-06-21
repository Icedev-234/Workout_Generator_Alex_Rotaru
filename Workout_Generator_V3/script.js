$(document).ready(function(){
     
    $(document).on('click','#feed',function(){
         
        NewTab();
                 
       clearResponse();

           $('#content').html(html);
    });

    function NewTab() { 
        window.open( 
          "http://localhost/rssread/index.php", "_blank");
}

     $(document).on('click','#about',function(){

     var html=`
     
     <style>
     
     .wrapper{
  max-width: 750px;
    width:550px;
    text-align: center;
    background:rgba(41, 20, 20, 0.6);
    
    color:white;
    margin:20px auto;
    padding:30px;
    box-shadow:1px 1px 2px rgba(0,0,0,0.125);

}

h1{
  margin:0;
  padding:0 20px;
  font-family: 'Quicksand',sans-serif;
  font-size: 3em;
  color:#fff;
  text-shadow: 0 0 20px #2f00ff;

}
h1::after{
  content:attr(data-text);
  padding:0 20px;
  top:0;
  left:0;
  z-index:-1;
  position: absolute;
  color:#2f00ff;
  filter:blur(15px);

}
h1::before{
  content:'';
  position: absoulte;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background:#2f00ff;
  z-index:-2;
  opacity: 0.5;
  filter:blur(40px);
}
p{
  margin:0;
  position:relative;
  top:20%;
  padding:0 20px;
  font-family: 'Quicksand',sans-serif;
  font-size: 2em;
}

     </style>
     
     
     <div class="wrapper">

      <h1>In ce consta acest site</h1>
      <p>Pe baza preferintei utilizatorului,acesta poate sa faca un anumit exercitiu fizic</p>
      
     </div>
     
     
     `;

     clearResponse();
        $('#content').html(html);


     });


    
//userlist

$(document).on('click', '#user_list', function(){
    $('#Listing').show();
    var html = `

    <style>
    .wrapper{
max-width: 500px;
width:450px;
text-align: center;
background:rgba(66, 24, 24, 0.6);

color:white;
margin:20px auto;
padding:30px;
box-shadow:1px 1px 2px rgba(0,0,0,0.125);

}

.wrapper h1{
position:relative;
text-align: center;
align-items: center;
font-size:3em;
color:#333;
font-family:sans-serif;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 3px;
display: inline-block;
}
a{
font-size: 2em;
color:#fec107;
font-family:sans-serif;
}

h1 span{
animation:light 1.8s linear infinite;
text-align: center;
}

h1 span:nth-child(1){
animation-delay: 0s;
}
h1 span:nth-child(2){
animation-delay: 0.2s;
}
h1 span:nth-child(3){
animation-delay: 0.4s;
}
h1 span:nth-child(4){
animation-delay: 0.6s;
}
h1 span:nth-child(5){
animation-delay: 0.8s;
}
h1 span:nth-child(6){
animation-delay: 1.0s;
}
h1 span:nth-child(7){
animation-delay: 1.20s;
}
h1 span:nth-child(8){
animation-delay: 1.40s;
}

@keyframes light{
0%,80%{
    color:#333;
    text-shadow:none;
}
100%{
    color:white;
    text-shadow: 0 0 10px white,
                 0 0 20px white,
                 0 0 40px white,
                 0 0 80px white,
                 0 0 120px white,
                 0 0 160px white;
}

}

.wrapper .Form{
width:100%;

}
.wrapper .Form .Input{
margin-bottom: 15px;
display:inline-block;
align-items: center;

}

.wrapper .Form .Input{
width:200px;
color:#ffffff;
margin-right: 10px;
font-size:14px;
}

.wrapper .Form .Input .input{
width:100%;
outline:none;
border:1px solid #d5dbd9;
font-size: 15px;
padding:8px 10px;
border-radius:3px;
transition:all 0.3s ease;

}

.wrapper .Form .Input .Gender_select{
position:relative;
width:100%;
height:37px;
}

.wrapper .Form .Input .Gender_select select{
-webkit-appearance: none;
appearance: none;
border:1px solid #d5dbd9;
width:100%;
height:100%;
padding:8px 10px;
border-radius: 3px;
}

.wrapper .Form .Input .Gender_select:before{
content:"";
position:absolute;
top:10px;
right:12px;
border:8px solid;
border-color:#d5dbd9 transparent transparent transparent;
pointer-events: none;
}

.wrapper .Form .Input .input:focus,
.wrapper .Form .Input .input select:focus{
border:1px solid #fec107;
}

.wrapper .Form .Input p{
font-size:14px;
color:#757575;
}

.wrapper .Form .Input .check{
width:15px;
height:15px;
position:relative;
display:block;
cursor:pointer;


}

.wrapper .Form .Input .check input[type="checkbox"]{
position:absoulte;
top:0;
left:0;
opacity: 0;


}

.wrapper .Form .Input .check .checkmark{
width:15px;
height:15px;
border:1px solid #fec107;
display:block;
position: relative;
background:#fec107;


}

.wrapper .Form .Input .check .checkmark:before{
content:"";
position: absolute;
top:0;
left:0;
width:5px;
height: 5px;
border: 2px solid
border-color #fff #fff #fff #fff;
transform: rotate(-45deg);


}

.wrapper .Form .Input .btn{
width:100%;
padding:8px 10px;
font-size:15px;
border:0;
background:crimson;
color:white;
cursor:pointer;
border-radius:3px;


}

.wrapper .Form .Input .btn:hover{
background-color: rgb(73, 48, 90);
transition:0.5s ease;
}


    </style>
    <div class="wrapper">

<h1 id="text">
<span>U</span>
<span>S</span>
<span>E</span>
<span>R</span>
<span>_</span>
<span>L</span>
<span>I</span>
<span>S</span>
<span>
</h1>
<form action="./index.php" method="POST" id="last">
<div class="Form">
<div class="Input">
  <label>Username</label>
  <input type="text" class="input" name="username" id="username" required>
</div>
  <div class="Input">
    <label>Password</label>
    <input type="password" class="input" name="password" id="password" required>
  </div>
  <div class="Input">
    <label>Email Address</label>
    <input type="email" class="input" name="email" id="email" required>
  </div>
  <div class="Input">
    <input type="submit" onclick="showLoggedInMenu()" class="btn" name='List'>
  </div>
</div> 
</form>

</div>
        `;

    clearResponse();
    $('#content').html(html);
});

$(document).on('submit','last',function(){

    showLoggedInMenu();
});

    // show sign up / registration form
    $(document).on('click', '#sign_up', function(){
        $('#Listing').hide();
        var html = `

        <style>
        .wrapper{
    max-width: 500px;
    width:450px;
    text-align: center;
    background:rgba(66, 24, 24, 0.6);
    
    color:white;
    margin:20px auto;
    padding:30px;
    box-shadow:1px 1px 2px rgba(0,0,0,0.125);

}

.wrapper h1{
    position:relative;
    text-align: center;
    align-items: center;
    font-size:3em;
    color:#333;
    font-family:sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: inline-block;
}
a{
    font-size: 2em;
    color:#fec107;
    font-family:sans-serif;
}

h1 span{
    animation:light 1.8s linear infinite;
    text-align: center;
}

h1 span:nth-child(1){
    animation-delay: 0s;
}
h1 span:nth-child(2){
    animation-delay: 0.2s;
}
h1 span:nth-child(3){
    animation-delay: 0.4s;
}
h1 span:nth-child(4){
    animation-delay: 0.6s;
}
h1 span:nth-child(5){
    animation-delay: 0.8s;
}
h1 span:nth-child(6){
    animation-delay: 1.0s;
}
h1 span:nth-child(7){
    animation-delay: 1.20s;
}
h1 span:nth-child(8){
    animation-delay: 1.40s;
}

@keyframes light{
    0%,80%{
        color:#333;
        text-shadow:none;
    }
    100%{
        color:white;
        text-shadow: 0 0 10px white,
                     0 0 20px white,
                     0 0 40px white,
                     0 0 80px white,
                     0 0 120px white,
                     0 0 160px white;
    }

}

.wrapper .Form{
    width:100%;
    
}
.wrapper .Form .Input{
    margin-bottom: 15px;
    display:inline-block;
    align-items: center;

}

.wrapper .Form .Input{
    width:200px;
    color:#ffffff;
    margin-right: 10px;
    font-size:14px;
}

.wrapper .Form .Input .input{
    width:100%;
    outline:none;
    border:1px solid #d5dbd9;
    font-size: 15px;
    padding:8px 10px;
    border-radius:3px;
    transition:all 0.3s ease;

}

.wrapper .Form .Input .Gender_select{
    position:relative;
    width:100%;
    height:37px;
}

.wrapper .Form .Input .Gender_select select{
    -webkit-appearance: none;
    appearance: none;
    border:1px solid #d5dbd9;
    width:100%;
    height:100%;
    padding:8px 10px;
    border-radius: 3px;
}

.wrapper .Form .Input .Gender_select:before{
    content:"";
    position:absolute;
    top:10px;
    right:12px;
    border:8px solid;
    border-color:#d5dbd9 transparent transparent transparent;
    pointer-events: none;
}

.wrapper .Form .Input .input:focus,
.wrapper .Form .Input .input select:focus{
    border:1px solid #fec107;
}

.wrapper .Form .Input p{
    font-size:14px;
    color:#757575;
}

.wrapper .Form .Input .check{
    width:15px;
    height:15px;
    position:relative;
    display:block;
    cursor:pointer;


}

.wrapper .Form .Input .check input[type="checkbox"]{
    position:absoulte;
    top:0;
    left:0;
    opacity: 0;


}

.wrapper .Form .Input .check .checkmark{
    width:15px;
    height:15px;
    border:1px solid #fec107;
    display:block;
    position: relative;
    background:#fec107;


}

.wrapper .Form .Input .check .checkmark:before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:5px;
    height: 5px;
    border: 2px solid
    border-color #fff #fff #fff #fff;
    transform: rotate(-45deg);


}

.wrapper .Form .Input .btn{
    width:100%;
    padding:8px 10px;
    font-size:15px;
    border:0;
    background:crimson;
    color:white;
    cursor:pointer;
    border-radius:3px;


}

.wrapper .Form .Input .btn:hover{
    background-color: rgb(73, 48, 90);
    transition:0.5s ease;
}


        </style>
        <div class="wrapper">

<h1 id="text">
    <span>R</span>
    <span>E</span>
    <span>G</span>
    <span>I</span>
    <span>S</span>
    <span>T</span>
    <span>E</span>
    <span>R</span>
</h1>
<form action="#" method="POST" id="sign_up_form">
 <div class="Form">
 <div class="Input">
      <label>Username</label>
      <input type="text" class="input" name="username" id="username" required>
    </div>
      <div class="Input">
        <label>Password</label>
        <input type="password" class="input" name="password" id="password" required>
      </div>
      <div class="Input">
        <label>Email Address</label>
        <input type="email" class="input" name="email" id="email" required>
      </div>
      <div class="Input">
        <input type="submit"  class="btn" name='register'>
      </div>
 </div> 
</form>

</div>
            `;
 
        clearResponse();
        $('#content').html(html);
    });
 
    // trigger when registration form is submitted
    $(document).on('submit', '#sign_up_form', function(){
 
    // get form data
   var sign_up_form=$(this);
     var form_data=JSON.stringify(sign_up_form.serializeObject());

 // submit form data to api
    $.ajax({
     url: "http://localhost/Workout_Generator_V3/api/create_user.php",
     type : "POST",
     contentType : 'application/json',
     data : form_data,
     success : function(result) {
         // if response is a success, tell the user it was a successful sign up & empty the input boxes
         $('#response').html("<div class='alert alert-success'>Successful sign up. Please login.</div>");
         sign_up_form.find('input').val('');
         setCookie("jwt", result.jwt, 1);
 
        // show home page & tell the user it was a successful login
        showHomePage();
        $('#response').html("<div class='alert alert-success'>Sign up succesfull.</div>");
         
     },
     error: function(xhr, resp, text){
         // on error, tell the user sign up failed
         $('#response').html("<div class='alert alert-danger'>Unable to sign up. Please contact admin.</div>");
     }
 });

 return false;
});
 
    // show login form
$(document).on('click', '#login', function(){
    $('#Listing').hide();
    showLoginPage();
});
 
// show login page
function showLoginPage(){
 
 // remove jwt
 setCookie("jwt","", 1);

 // login page html
 var html = `
    
 <style>
        .wrapper{
    max-width: 500px;
    width:450px;
    text-align: center;
    background:rgba(121, 98, 35, 0.6);
    
    color:white;
    margin:20px auto;
    padding:30px;
    box-shadow:1px 1px 2px rgba(0,0,0,0.125);

}

.wrapper h1{
    position:relative;
    text-align: center;
    align-items: center;
    font-size:3em;
    color:#333;
    font-family:sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: inline-block;
}
a{
    font-size: 2em;
    color:#fec107;
    font-family:sans-serif;
}

h1 span{
    animation:light 1.1s linear infinite;
    text-align: center;
}

h1 span:nth-child(1){
    animation-delay: 0s;
}
h1 span:nth-child(2){
    animation-delay: 0.2s;
}
h1 span:nth-child(3){
    animation-delay: 0.4s;
}
h1 span:nth-child(4){
    animation-delay: 0.6s;
}
h1 span:nth-child(5){
    animation-delay: 0.8s;
}
h1 span:nth-child(6){
    animation-delay: 1.0s;
}

@keyframes light{
    0%,80%{
        color:#333;
        text-shadow:none;
    }
    100%{
        color:white;
        text-shadow: 0 0 10px white,
                     0 0 20px white,
                     0 0 40px white,
                     0 0 80px white,
                     0 0 120px white,
                     0 0 160px white;
    }

}

.wrapper .Form{
    width:100%;
    
}
.wrapper .Form .Input{
    margin-bottom: 15px;
    display:inline-block;
    align-items: center;

}

.wrapper .Form .Input{
    width:200px;
    color:#ffffff;
    margin-right: 10px;
    font-size:14px;
}

.wrapper .Form .Input .input{
    width:100%;
    outline:none;
    border:1px solid #d5dbd9;
    font-size: 15px;
    padding:8px 10px;
    border-radius:3px;
    transition:all 0.3s ease;

}

.wrapper .Form .Input .Gender_select{
    position:relative;
    width:100%;
    height:37px;
}

.wrapper .Form .Input .Gender_select select{
    -webkit-appearance: none;
    appearance: none;
    border:1px solid #d5dbd9;
    width:100%;
    height:100%;
    padding:8px 10px;
    border-radius: 3px;
}

.wrapper .Form .Input .Gender_select:before{
    content:"";
    position:absolute;
    top:10px;
    right:12px;
    border:8px solid;
    border-color:#d5dbd9 transparent transparent transparent;
    pointer-events: none;
}

.wrapper .Form .Input .input:focus,
.wrapper .Form .Input .input select:focus{
    border:1px solid #fec107;
}

.wrapper .Form .Input p{
    font-size:14px;
    color:#757575;
}

.wrapper .Form .Input .check{
    width:15px;
    height:15px;
    position:relative;
    display:block;
    cursor:pointer;


}

.wrapper .Form .Input .check input[type="checkbox"]{
    position:absoulte;
    top:0;
    left:0;
    opacity: 0;


}

.wrapper .Form .Input .check .checkmark{
    width:15px;
    height:15px;
    border:1px solid #fec107;
    display:block;
    position: relative;
    background:#fec107;


}

.wrapper .Form .Input .check .checkmark:before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:5px;
    height: 5px;
    border: 2px solid
    border-color #fff #fff #fff #fff;
    transform: rotate(-45deg);


}

.wrapper .Form .Input .btn{
    width:100%;
    padding:8px 10px;
    font-size:15px;
    border:0;
    background:crimson;
    color:white;
    cursor:pointer;
    border-radius:3px;


}

.wrapper .Form .Input .btn:hover{
    background-color: rgb(73, 48, 90);
    transition:0.5s ease;
}


        </style>
        <div class="wrapper">

<h1 id="text">
    <span>L</span>
    <span>O</span>
    <span>G</span>
    <span>_</span>
    <span>I</span>
    <span>N</span>
</h1>
<form action="#" method="POST" id="login_form">
 <div class="Form">
 <div class="Input">
        <label>Email Address</label>
        <input type="email" class="input" name="email" id="email" required >
      </div>
      <div class="Input">
        <label>Password</label>
        <input type="password" class="input" name="password" id="password" required>
      </div>
      <div class="Input">
        <input type="submit"  class="btn" name='register'>
      </div>
 </div> 
</form>

</div>
     `;

 $('#content').html(html);
 clearResponse();
 showLoggedOutMenu();
}

// trigger when login form is submitted
$(document).on('submit', '#login_form', function(){
 
 // get form data
 var login_form=$(this);
 var form_data=JSON.stringify(login_form.serializeObject());

   // submit form data to api
$.ajax({
    url: "http://localhost/Workout_Generator_V3/Login.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result){
 
        // store jwt to cookie
        setCookie("jwt", result.jwt, 1);
 
        // show home page & tell the user it was a successful login
        showHomePage();
        $('#response').html("<div class='alert alert-success'>Successful login.</div>");
 
    },
    error: function(xhr, resp, text){
    // on error, tell the user login has failed & empty the input boxes
    $('#response').html("<div class='alert alert-danger'>Login failed. Email or password is incorrect.</div>");
    login_form.find('input').val('');
}
});

 return false;
});

// show home page
$(document).on('click', '#home', function(){
    $('#Listing').hide();
    showHomePage();
    clearResponse();
});
 
// show update account form
$(document).on('click', '#update_account', function(){
    showUpdateAccountForm();
});
 
// trigger when 'update account' form is submitted
$(document).on('submit', '#update_account_form', function(){
 
 // handle for update_account_form
 var update_account_form=$(this);

 // validate jwt to verify access
 var jwt = getCookie('jwt');

 // get form data
var update_account_form_obj = update_account_form.serializeObject()
 
 // add jwt on the object
 update_account_form_obj.jwt = jwt;
  
 // convert object to json string
 var form_data=JSON.stringify(update_account_form_obj);
  
 // submit form data to api
$.ajax({
    url: "http://localhost/Workout_Generator_V2/api/update_user.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
 
        // tell the user account was updated
        $('#response').html("<div class='alert alert-success'>Account was updated.</div>");
 
        // store new jwt to coookie
        setCookie("jwt", result.jwt, 1);
    },
 
    error: function(xhr, resp, text){
    if(xhr.responseJSON.message=="Unable to update user."){
        $('#response').html("<div class='alert alert-danger'>Unable to update account.</div>");
    }
 
    else if(xhr.responseJSON.message=="Access denied."){
        showLoginPage();
        $('#response').html("<div class='alert alert-success'>Access denied. Please login</div>");
    }
}
});

 return false;
});

// logout the user
$(document).on('click', '#logout', function(){
    showLoginPage();
    $('#response').html("<div class='alert alert-info'>You are logged out.</div>");
});
 
    // remove any prompt messages
function clearResponse(){
    $('#response').html('');
}
 

// function to set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

// if the user is logged out
function showLoggedOutMenu(){
    // show login and sign up from navbar & hide logout,home and user_list button
    $("#login, #sign_up").show();
    $("#logout,#home,#update_account,#user_list").hide();
}
 
// show home page
function showHomePage(){
    $('#Listing').hide();
 // validate jwt to verify access
 var jwt = getCookie('jwt');
 $.post("http://localhost/Workout_Generator_V3/api/validate_token.php", JSON.stringify({ jwt:jwt })).done(function(result) {

      // if valid, show homepage
var html = `
<style>
        .wrapper{
    max-width: 500px;
    width:450px;
    text-align: center;
    background:rgb(43, 35, 121,0.6);
    
    color:white;
    margin:20px auto;
    padding:30px;
    box-shadow:1px 1px 2px rgba(0,0,0,0.125);

}

.wrapper h1{
    position:relative;
    text-align: center;
    align-items: center;
    font-size:3em;
    color:#333;
    font-family:sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: inline-block;
}
a{
    font-size: 2em;
    color:#fec107;
    font-family:sans-serif;
}

h1 span{
    animation:light 1.1s linear infinite;
    text-align: center;
}

h1 span:nth-child(1){
    animation-delay: 0s;
}
h1 span:nth-child(2){
    animation-delay: 0.2s;
}
h1 span:nth-child(3){
    animation-delay: 0.4s;
}
h1 span:nth-child(4){
    animation-delay: 0.6s;
}
h1 span:nth-child(5){
    animation-delay: 0.8s;
}
h1 span:nth-child(6){
    animation-delay: 1.0s;
}

@keyframes light{
    0%,80%{
        color:#333;
        text-shadow:none;
    }
    100%{
        color:white;
        text-shadow: 0 0 10px white,
                     0 0 20px white,
                     0 0 40px white,
                     0 0 80px white,
                     0 0 120px white,
                     0 0 160px white;
    }

}

.wrapper .Form{
    width:100%;
    
}
.wrapper .Form .Input{
    margin-bottom: 15px;
    display:inline-block;
    align-items: center;

}

.wrapper .Form .Input{
    width:200px;
    color:#ffffff;
    margin-right: 10px;
    font-size:14px;
}

.wrapper .Form .Input .input{
    width:100%;
    outline:none;
    border:1px solid #d5dbd9;
    font-size: 15px;
    padding:8px 10px;
    border-radius:3px;
    transition:all 0.3s ease;

}

.wrapper .Form .Input .Gender_select{
    position:relative;
    width:100%;
    height:37px;
}

.wrapper .Form .Input .Gender_select select{
    -webkit-appearance: none;
    appearance: none;
    border:1px solid #d5dbd9;
    width:100%;
    height:100%;
    padding:8px 10px;
    border-radius: 3px;
}

.wrapper .Form .Input .Gender_select:before{
    content:"";
    position:absolute;
    top:10px;
    right:12px;
    border:8px solid;
    border-color:#d5dbd9 transparent transparent transparent;
    pointer-events: none;
}

.wrapper .Form .Input .input:focus,
.wrapper .Form .Input .input select:focus{
    border:1px solid #fec107;
}

.wrapper .Form .Input p{
    font-size:14px;
    color:#757575;
}

.wrapper .Form .Input .check{
    width:15px;
    height:15px;
    position:relative;
    display:block;
    cursor:pointer;


}

.wrapper .Form .Input .check input[type="checkbox"]{
    position:absoulte;
    top:0;
    left:0;
    opacity: 0;


}

.wrapper .Form .Input .check .checkmark{
    width:15px;
    height:15px;
    border:1px solid #fec107;
    display:block;
    position: relative;
    background:#fec107;


}

.wrapper .Form .Input .check .checkmark:before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:5px;
    height: 5px;
    border: 2px solid
    border-color #fff #fff #fff #fff;
    transform: rotate(-45deg);


}

.wrapper .Form .Input .btn{
    width:100%;
    padding:8px 10px;
    font-size:15px;
    border:0;
    background:crimson;
    color:white;
    cursor:pointer;
    border-radius:3px;


}

.wrapper .Form .Input .btn:hover{
    background-color: rgb(73, 48, 90);
    transition:0.5s ease;
}


        </style>
        
        <div class="wrapper">

<h1 id="text">
    <span>T</span>
    <span>R</span>
    <span>A</span>
    <span>I</span>
    <span>N</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
</h1>
<form action="./index.php" method="POST" id="Ex_form">

 <div class="Form">
 <div class="Input">
        <label>Greutate</label>
        <input type="number" class="input" name='G' id="greutate" required >
      </div>
      <div class="Input">
        <label>Varsta</label>
        <input type="number" class="input" name='V' id="varsta" required >
      </div>
      <div class="Input">
        <label>Inaltime(in cm)</label>
        <input type="number" class="input" name='H' id="inaltime" required >
      </div>
      <div class="Input">
        <label>Gen</label>
        <select type="text" class="input" name='gen' id="inputGen" required>
                                <option value="">Alege genul</option>
                                <option value="Male">Masculin</option>
                                <option value="Female">Feminin</option>
                            </select> 
      </div>
      <div class="Input">
      <label>Grupa de muschi</labe>
      <select name='grMuschi'  name ='grmuschi'class="input" id="inputGrMuschi">
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
      </div>
      <div class="Input">
        <label>DurataInaltime(in cm)</label>
        <input type="number" class="input" name='durata' id="inputDurata" required>
      </div>
      <div class="Input">
        <label>Locatie</label>
        <select name='locatie' class="input" id="inputLocatie" required>
                                <option value="">Alegeti locatia</option>
                                <option value="acasa">Acasa</option>
                                <option value="aer_liber">Afara</option>
                            </select>
      </div>
      <div class="Input">
        <input type="submit"  class="btn" value="Submit" name='Calcultate'>
      </div>
 </div> 
</form>

</div>
    `;
 
$('#content').html(html);
showLoggedInMenu();
 })

 // show login page on error
.fail(function(result){
    showLoginPage();
    $('#response').html("<div class='alert alert-danger'>Please login to access the home page.</div>");
});
}

$(document).on('submit','Ex_form',function(){

    document.getElementById('ex2').style.display="block";


});

// get or read cookie
function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
 
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// if the user is logged in
function showLoggedInMenu(){
    // hide login and sign up from navbar & show logout button
    $("#login, #sign_up").hide();
    $("#logout,#home,#update_account,#user_list").show();
}
 
function showUpdateAccountForm(){
    // validate jwt to verify access
    var jwt = getCookie('jwt');
    $.post("api/validate_token.php", JSON.stringify({ jwt:jwt })).done(function(result) {
 
        // if response is valid, put user details in the form
var html = `
<style>
.wrapper{
max-width: 500px;
width:450px;
text-align: center;
background:rgb(43, 35, 121,0.6);

color:white;
margin:20px auto;
padding:30px;
box-shadow:1px 1px 2px rgba(0,0,0,0.125);

}

.wrapper h1{
position:relative;
text-align: center;
align-items: center;
font-size:3em;
color:#333;
font-family:sans-serif;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 3px;
display: inline-block;
}
a{
font-size: 2em;
color:#fec107;
font-family:sans-serif;
}

h1 span{
animation:light 1.1s linear infinite;
text-align: center;
}

h1 span:nth-child(1){
animation-delay: 0s;
}
h1 span:nth-child(2){
animation-delay: 0.2s;
}
h1 span:nth-child(3){
animation-delay: 0.4s;
}
h1 span:nth-child(4){
animation-delay: 0.6s;
}
h1 span:nth-child(5){
animation-delay: 0.8s;
}
h1 span:nth-child(6){
animation-delay: 1.0s;
}

@keyframes light{
0%,80%{
color:#333;
text-shadow:none;
}
100%{
color:white;
text-shadow: 0 0 10px white,
             0 0 20px white,
             0 0 40px white,
             0 0 80px white,
             0 0 120px white,
             0 0 160px white;
}

}

.wrapper .Form{
width:100%;

}
.wrapper .Form .Input{
margin-bottom: 15px;
display:inline-block;
align-items: center;

}

.wrapper .Form .Input{
width:200px;
color:#ffffff;
margin-right: 10px;
font-size:14px;
}

.wrapper .Form .Input .input{
width:100%;
outline:none;
border:1px solid #d5dbd9;
font-size: 15px;
padding:8px 10px;
border-radius:3px;
transition:all 0.3s ease;

}

.wrapper .Form .Input .Gender_select{
position:relative;
width:100%;
height:37px;
}

.wrapper .Form .Input .Gender_select select{
-webkit-appearance: none;
appearance: none;
border:1px solid #d5dbd9;
width:100%;
height:100%;
padding:8px 10px;
border-radius: 3px;
}

.wrapper .Form .Input .Gender_select:before{
content:"";
position:absolute;
top:10px;
right:12px;
border:8px solid;
border-color:#d5dbd9 transparent transparent transparent;
pointer-events: none;
}

.wrapper .Form .Input .input:focus,
.wrapper .Form .Input .input select:focus{
border:1px solid #fec107;
}

.wrapper .Form .Input p{
font-size:14px;
color:#757575;
}

.wrapper .Form .Input .check{
width:15px;
height:15px;
position:relative;
display:block;
cursor:pointer;


}

.wrapper .Form .Input .check input[type="checkbox"]{
position:absoulte;
top:0;
left:0;
opacity: 0;


}

.wrapper .Form .Input .check .checkmark{
width:15px;
height:15px;
border:1px solid #fec107;
display:block;
position: relative;
background:#fec107;


}

.wrapper .Form .Input .check .checkmark:before{
content:"";
position: absolute;
top:0;
left:0;
width:5px;
height: 5px;
border: 2px solid
border-color #fff #fff #fff #fff;
transform: rotate(-45deg);


}

.wrapper .Form .Input .btn{
width:100%;
padding:8px 10px;
font-size:15px;
border:0;
background:crimson;
color:white;
cursor:pointer;
border-radius:3px;


}

.wrapper .Form .Input .btn:hover{
background-color: rgb(73, 48, 90);
transition:0.5s ease;
}


</style>

<div class="wrapper">

<h1 id="text">
<span>T</span>
<span>R</span>
<span>A</span>
<span>I</span>
<span>N</span>
<span>I</span>
<span>N</span>
<span>G</span>
</h1>
        <form id='update_account_form' action="#">
            <div class="Input" >
                <label for="firstname">Username</label>
                <input type="text" class="input" name="firstname" id="username" required value="` + result.data.firstname + `" />
            </div>
 
            <div class="Input">
                <label for="email">Email</label>
                <input type="email" class="input" name="email" id="email" required value="` + result.data.email + `" />
            </div>
 
            <div class="Input">
                <label for="password">Password</label>
                <input type="password" class="input" name="password" id="password" />
            </div>
 
            <button type='submit' onclick="showLoggedInMenu()" class='btn btn-primary'>
                Save Changes
            </button>
        </form>
    `;
 
clearResponse();
$('#content').html(html);
    })
 
    // on error/fail, tell the user he needs to login to show the account page
   .fail(function(result){
    showLoginPage();
    $('#response').html("<div class='alert alert-danger'>Please login to access the account page.</div>");
});
}
 
// function to make form values to json format
$.fn.serializeObject = function(){
 
 var o = {};
 var a = this.serializeArray();
 $.each(a, function() {
     if (o[this.name] !== undefined) {
         if (!o[this.name].push) {
             o[this.name] = [o[this.name]];
         }
         o[this.name].push(this.value || '');
     } else {
         o[this.name] = this.value || '';
     }
 });
 return o;
};
});