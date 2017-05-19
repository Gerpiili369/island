
<?php
/* tulosatama.php */

session_start();

$juurihakemisto="../../";


if(!isset($_SESSION['nimimerkki']) || !isset($_SESSION['saarenNimi'])) {
    header("Location: {$juurihakemisto}php/virhe.php?virhe=Kohtalokas virhe. Peli pitää aloittaa uudestaan!");
}
$nimimerkki= htmlspecialchars($_SESSION['nimimerkki']);

require "{$juurihakemisto}php/perusTietovarasto.php";
$tietovarasto = new Perustietovarasto();
$rahamaara=$tietovarasto->haeRahamaara($nimimerkki);

?>

<!DOCTYPE html>

<html>
    <head>
        <title>Satama</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="../../tyylit/saarenkaikkityylit.css" media="screen" />
    </head>
    <body id="satama">
        <h1>Tervetuloa <?php echo $_SESSION['nimimerkki']; ?> saarelle <?php echo $_SESSION['saarenNimi']; ?>.</h1>
        <p>Tässä pitäisi olla saaren kuvaus tms.</p>
        
        <nav>
        <ul>
            <li><a href="peli.php">siirry saareen</a></li>
            <li><a href="lahtosatama.php">siirry lähtösatamaan</a></li>
        </ul>
        </nav>
    </body>
</html>