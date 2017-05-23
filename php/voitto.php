<?php
/* voitto.php */

session_start();

$nimimerkki=$_SESSION['nimimerkki'];
require "perusTietovarasto.php";
$tietovarasto = new Perustietovarasto();
$rahamaara=$tietovarasto->haeRahamaara($nimimerkki);

?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <link type="text/css" rel="stylesheet" href="../tyylit/voittotyyli.css" media="screen" />
        <title>Pelin loppu</title>
    </head>
    <body>
        <h1>Arvoisa <?php echo $nimimerkki; ?>. Peli on nyt loppu</h1>
        <p>
            Olet vieraillut kaikilla saarilla!
            Lopputulokseksi sait rahasumman <?php echo $rahamaara; ?> euroa.
        </p>
        <h1>Onneksi olkoon!</h1>
    </body>
</html>
