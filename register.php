<?php 
    session_start();
    include('server.php'); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Page</title>

    <link rel="stylesheet" href="singup.css" type="text/css" />
</head>
<body>
    <form action="register_db.php" method="post">
        <?php include('errors.php'); ?>
        <?php if (isset($_SESSION['error'])) : ?>
            <div class="error">
                <h3>
                    <?php 
                        echo $_SESSION['error'];
                        unset($_SESSION['error']);
                    ?>
                </h3>
            </div>
        <?php endif ?>
        <a class="logo" href="Miniproject_web_Page1.html" target="_blank"><img src="https://www.img.in.th/images/bc15b8a64fe10c4692ced0485e87a161.png"/></a>
<div class="Signup">
  <h1 class="Signup__title">Sign Up</h1>
  <div class="Signup__group">
  <label for="username"></label>
    <input class="Signup__group__input" type="text" name="username" placeholder="User ID"/>
  </div>
  <div class="Signup__group">
  <label for="email"></label>
    <input class="Signup__group__input" type="text" name="email" placeholder="Email"/>
  </div>
  <div class="Signup__group">
  <label for="password_1"></label>
    <input class="Signup__group__input" type="password" name="password_1"placeholder="Password"/>
  </div>
  <div class="Signup__group">
  <label for="password_2"></label>
    <input class="Signup__group__input" type="password" name="password_2" placeholder="Re-Password"/>
  </div>
  <button class="Signup__sign-up" type="submit" name="reg_user">Sign Up</button>
</div>
    </form>

</body>
</html>