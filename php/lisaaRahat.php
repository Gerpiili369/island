<?php

header("Content-type: text/plain");

$nimimerkki=htmlspecialchars($_POST['nimimerkki']);
$rahasumma=htmlspecialchars($_POST['rahasumma']);
require "perusTietovarasto.php";
$tietovarasto = new Perustietovarasto();

$tietovarasto->lisaaRahamaara($nimimerkki, $rahasumma);                       

echo $tietovarasto->haeRahamaara($nimimerkki);
