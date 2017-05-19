<?php
/* tulo.php */

session_start();

$juurihakemisto = "../../../";

if(!isset($_SESSION['nimimerkki']) ||  !isset($_POST['saarenNimi']) 
        ||!isset($_POST['reitinHinta']) ) {
    header("Location: {$juurihakemisto}virhe.php?virhe=Kohtalokas virhe. Peli pitää aloittaa uudestaan!");
}
else { 
    $_SESSION["saarenNimi"]= htmlspecialchars($_POST["saarenNimi"]);
}
    $hinta= htmlspecialchars($_POST['reitinHinta']);
    require "{$juurihakemisto}php/perusTietovarasto.php";
    $tietovarasto = new Perustietovarasto();
    $rahaaJaljella=$tietovarasto->haeRahamaara($_SESSION["nimimerkki"]);
     if($rahaaJaljella<$hinta){
         header("Location: {$juurihakemisto}php/tappio.php");   
     }
     else {
        $tietovarasto->muutaRahamaaraa($_SESSION['nimimerkki'], -$hinta);
     }
?>

<!DOCTYPE html>

<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @keyframes animatedBackground {
            from { background-position: 0 0; }
            to { background-position: 100% 0; }
            }
            
            #animatearea	{ 
	width: 560px; 
	height: 400px; 
	background-image: url(../documentation/Pelianimaatio0000-0200.mov);
	background-position: 0px 0px;
	background-repeat: repeat-x;

	animation: animatedBackground 4s linear infinite;
}
        </style>
        <meta http-equiv="refresh" content="12; url=../tulosatama.php">
    </head>
    <body>
        <div id="animatearea"></div>
    </body>
</html>
