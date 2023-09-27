<?php
    session_start();
    include('server.php'); 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>

    <link rel="stylesheet" href="login.css" type="text/css" />
</head>
<body>
    <form action="login_db.php" method="post">
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
        <div class="login">
            <h1 class="login__title">Sign In</h1>
            <div class="login__group">
                <label for="username"></label>
                <input class="login__group__input" type="text" name="username" placeholder="User ID"/>
            </div>
            <div class="login__group">
                <label for="password"></label>
                <input class="login__group__input" type="password" name="password" placeholder="Password"/>
            </div>
                <button class="login__sign-in" type="submit" name="login_user">Sign In</button>
            <div class="login__secondary-cta">
                <a class="login__secondary-cta__text" href="register.php">Sign Up</a>
            </div>
        </div>
    </form>

</body>
</html>