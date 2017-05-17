<?php
/* haeRahat.php */

header("Content-type: text/plain");

$nimimerkki=htmlspecialchars($_POST['nimimerkki']);
require "perusTietovarasto.php";
$tietovarasto = new Perustietovarasto();

echo $tietovarasto->haeRahamaara($nimimerkki);
