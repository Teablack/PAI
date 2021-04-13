<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <?php
            echo "<h1> Nasz system </h1>";

            if(isSet($_POST["Wyloguj"])){               //czy zostala przeslana zmienna
                $_SESSION["zalogowany"] = 0;
                header("index.php");
            }
        ?>

        <!-- Logowanie -->
        <form action="logowanie.php" method="post">
            Login: <input type="text" name="Login"><br>
            Hasło: <input type="text" name="Hasło"><br>
        <input type="submit" name="Zaloguj" value="Zaloguj">
        </form><br><br>

        <!-- Ciasteczka -->
        <form action="cookie.php" method="get">
            <h3>Czas:<h3>
            <input type="number" name="Czas"><br>
            <input type="submit" name="UtworzCookie" value="Utwórz Cookie">
        </form><br><br>

        <?php
            if (iSset($_COOKIE["Czas"])) {
                echo "Wartość ciasteczka: " . $_COOKIE["Czas"];
            }
        ?>
    </body>
</html>