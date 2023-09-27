<?php 
    session_start();

    if (!isset($_SESSION['username'])) {
        $_SESSION['msg'] = "You must log in first";
        header('location: login.php');
    }

    if (isset($_GET['logout'])) {
        session_destroy();
        unset($_SESSION['username']);
        header('location: login.php');
    }

?>

<!DOCTYPE html>
<html>
<head>
   <link href="http://fonts.cdnfonts.com/css/the-impostor" rel="stylesheet">
   <style>
      @import url('http://fonts.cdnfonts.com/css/the-impostor');
   </style>
</head>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
<lead>
    <link rel="stylesheet" href="CssMini_Web_Page2.css" type="text/css" >
</lead>
<header>
   <p><a href="Miniproject_web_Page1.html">Spec-Sina</a></p>
</header>
<div class="container">

   <section id="row1">
      
      <h1 class="sectionTitle">Choose your type of use</h1>
      <div id="mySidenav" class="sidenav">
         
      </div>
     
      <div class="examples">
         <ul class="img-list">
            <li class="image">
               <a href="Miniproject_Web_Gaming.html">
                  <img id="box1" src="https://www.img.in.th/images/c1b0bf82eaa2721d7d1596eb21772e97.png" width="200" height="200" />
                  <span class="btn btn-xl"></span>
                  
               </a>
            </li>

            <li class="image">
               <a href="Miniproject_Web_Studying.html">
                  <img src="https://www.img.in.th/images/5036f59975b4255de812457f39640597.png" width="200" height="200" />
                  <span class="btn btn-xl"></span>
               </a>
            </li>

            <li class="image">
               <a href="Miniproject_Web_Working.html">
                  <img src="https://www.img.in.th/images/f69d4b90c3032899d0c9dbad2c7bc055.png" width="200" height="200" />
                  <span class="btn btn-xl"></span>
               </a>
            </li>

            <li class="image">
               <a href="Miniproject_Web_Entertainment.html">
                  <img src="https://www.img.in.th/images/a2de11fe4946ade91789f01725db6fb2.png" width="200" height="200" />
                  <span class="btn btn-xl"></span>
               </a>
            </li>

            <li class="image">
               <a href="Miniproject_Web_PageCustom.html">
                  <img src="https://www.img.in.th/images/52f19dc054cae1456ddeea1462e962c1.png" width="200" height="200" />
                  <span class="btn btn-xl"></span>
               </a>
            </li>

         </ul>

      </div>
      
 

   

      </ul>
   </div>
</div>
</html>