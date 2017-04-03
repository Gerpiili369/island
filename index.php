<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            require 'php/perusTietovarasto.php';
            $tietovarasto=new PerusTietovarasto();
            
            if ($tietovarasto->salasanaOikein('Leila', 'salainen')){
                ?>
        <h1>Oli oikein</h1>
        <?php
            }
            else {
        ?>
        <h1>Salasana tai nimimerkki oli väärin</h1>
        <?php
            }
        ?>
    </body>
</html>
