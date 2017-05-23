<?php
/* tappio.php */
session_start();
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link type="text/css" rel="stylesheet" href="../tyylit/tappiotyyli.css" media="screen" />
        <title>Pelin loppu</title>
    </head>
    <body>
        <h1>Arvoisa <?php echo $_SESSION['nimimerkki']; ?>. Peli on nyt loppu</h1>
        <p>
            Rahasi eivät riittäneet laivamatkaan.
        </p>

        <h1>Parempi onni seuraavalla kerralla!</h1>       
    </body>
</html>
