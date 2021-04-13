<?php
    session_start();
    require("funkcje.php");

//     echo $_POST['Zaloguj']."<br>";
//     echo $_POST['Login']."<br>";
//     echo $_POST['Hasło']."<br>";
//     echo $osoba1->login."<br>";
//     echo $osoba1->haslo."<br>";

    if(isSet($_POST["Zaloguj"])) {
        if(($_POST["Login"] == $osoba1->login) && ($_POST["Hasło"] == $osoba1->haslo)){
            $_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
            $_SESSION["zalogowany"] = 1;
            header("Location: user.php");
        }
        else if(($_POST["Login"] == $osoba2->login) && ($_POST["Hasło"] == $osoba2->haslo)){
            $_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
            $_SESSION["zalogowany"] = 1;
            header("Location: user.php");
        }
        else {
            $_SESSION["zalogowany"] = 0;
            header("Location: index.php");
        }
    }

    if ($_SESSION["zalogowany"] != 1) {
        header("Location: index.php");
    }
?>