<?php
/* aloitus.php */
session_start();
if (!isset($_SESSION['nimimerkki'])) {
    if (isset($_POST['nimimerkki'])) {
        $_SESSION["nimimerkki"] = htmlspecialchars($_POST['nimimerkki']);
    } else {
        header("Location: virhe.php?virhe=Virhe kirjautumisessa: nimimerkki oli jo käytössä.");
    }
}
$nimimerkki=$_SESSION["nimimerkki"];

?>
<!DOCTYPE html>

<html>
    <head>
        <title>Saaristoseikkailu</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="../tyylit/perustyyli.css" media="screen" />
    </head>
    <body>
        <header><img src="../kuvat/logo.png"> <h2>Pelisaari oy</h2></header>
        <?php
        require 'perusTietovarasto.php';
        $tietovarasto = new Perustietovarasto();
        $rahamaara = $tietovarasto->haeRahamaara($nimimerkki);
        ?>
        <h1>Hei <?php echo $nimimerkki; ?>. Tervetuloa saaristoseikkailulle.</h1>
        <p>Käytettävissäsi oleva rahamäärä on <?php echo $rahamaara; ?> euroa.</p>
        <?php
        $vieraillutSaaret = $tietovarasto->haeVieraillutSaaret($nimimerkki);
        if (count($vieraillutSaaret) > 0) {
            ?>
            <h2>Olet vieraillut seuraavilla saarilla:</h2>
            <ul>
                <?php
                foreach ($vieraillutSaaret as $saari) {
                    ?>
                    <li><?php echo $saari['saarenNimi']; ?></li>
                    <?php
                }
            }
            ?>
        </ul>
        <a href="../aloitussatama.php">Siirry aloitussatamaan</a>
    </body>
</html>


