<?php
/* uusiKayttaja.php */

session_start();
$nimimerkki = htmlspecialchars($_POST['nimimerkki']);
$salasana = htmlspecialchars($_POST['salasana']);

if (isset($_POST['varmistus'])) {
    $varmistus = htmlspecialchars($_POST['varmistus']);
    if ($salasana == $varmistus) {
        require 'perusTietovarasto.php';
        $tietovarasto = new Perustietovarasto();
        if ($tietovarasto->lisaaPelaaja($nimimerkki, $salasana)) {
            $_SESSION["nimimerkki"] = $nimimerkki;
            header("Location: aloitus.php");
        } else {
            header("Location: virhe.php?virhe=Virhe kirjautumisessa: käyttäjän lisääminen ei onnistunut, koska nimimerkki oli jo käytössä.");
        }
    } else {
        header("Location: virhe.php?virhe=Virhe kirjautumisessa: salasana ja salasanan varmistus eivät olleet samoja.");
    }
}
else {
    header("Location: virhe.php?virhe=Virhe kirjautumisessa: salasana ja salasanan varmistus eivät olleet samoja.");
}


