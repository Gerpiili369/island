<?php
/* tarkastaKayttaja.php */

session_start();
header("Content-type: text/plain");

$nimimerkki = htmlspecialchars($_POST['nimimerkki']);
$salasana = htmlspecialchars($_POST['salasana']);

require 'perusTietovarasto.php';
$tietovarasto = new Perustietovarasto();


if ($tietovarasto->kirjautuminenOnnistui($nimimerkki, $salasana)) {
    $_SESSION["nimimerkki"]=$nimimerkki;
    echo $nimimerkki;
} else {
    echo "";
}
