voii
<?php
/* pelin aloitussatama. Täältä pääsee kaikkiin saariin vakiohinnalla 100 euroa. aloitussatama.php */
session_start();

if (!isset($_SESSION['nimimerkki'])) {
    header("Location: php/virhe.php?virhe=Kohtalokas virhe. Peli pitää aloittaa uudestaan!");
}

require "php/perusTietovarasto.php";
$tietovarasto = new Perustietovarasto();

$vierailemattaLkm = $tietovarasto->saariaVierailemattaLkm($_SESSION['nimimerkki']);
if ($vierailemattaLkm == 0) {
    header("Location: php/voitto.php");
}
$rahavarat = $tietovarasto->haeRahamaara($_SESSION['nimimerkki']);
?>
<!DOCTYPE html>

<html>
    <head>
        <title>Satama</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="tyylit/aloitussatamatyyli.css" media="screen" />
        <script>
            function naytaValinta(saarenNimi, valittuSivu) {
                document.menu.action = valittuSivu;
                document.getElementById('saarenNimi').value = saarenNimi;
                document.menu.submit();
            }
        </script>
    </head>
    <body id="satama">
        <h1>Hei <?php echo $_SESSION['nimimerkki']; ?>! Tervetuloa saaren <?php echo $_SESSION['saarenNimi']; ?> lähtöterminaaliin</h1>


        <h2>Sinulla on vielä <?php echo $vierailemattaLkm . ($vierailemattaLkm==1?" saari":" saarta"); ?> vierailematta. Rahaa matkustamiseen on jäljellä <?php echo $rahavarat ?> euroa</h2>
        <section id="laivareitit">
            <h1>Reittihinnasto</h1>
            <form name="menu" method="post">
                <input id="reitinHinta" type="text" name="reitinHinta" hidden="true" value="100"/> 
                <input id="saarenNimi" type="text" name="saarenNimi" hidden="true"/>
            </form>
            <p>Valitse seuraavista saarista se saari, jolle haluat mennä.</p>
            <table id="hinnasto">
                <thead>
                    <tr>
                        <th class="kohde">kohde</th>
                        <th class="hinta">hinta</th>
                        <th class="kohdelinkki"></th>
                    </tr>
                </thead>
                <tbody>

                    <?php
                    $kohdeSaaret = $tietovarasto->haeKaikkiKohdesaaret();

                    foreach ($kohdeSaaret as $kohdesaari) {
                        ?>
                        <tr>
                            <td><?php echo $kohdesaari['saarenNimi'] ?></td>
                            <td>100</td> 
                            <td>
                                <button onclick="naytaValinta('<?php echo $kohdesaari['saarenNimi'] ?>', '<?php echo "saaret/{$kohdesaari['saarenURL']}/tulo/tulo.php" ?>')">
                                    siirry saareen
                                </button>
                            </td>
                        </tr>
                        <?php
                        echo "\n";
                    }
                    ?> 
                </tbody>
            </table> 

        </section>
        <nav>
            <ul>
                <li><a href="index.html">Siirry aloitussivulle</a></li>
            </ul>
        </nav>
    </body>

</html>