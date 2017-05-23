<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, 
                                      initial-scale=1.0">
        <title>Virhe</title>  
        <link type="text/css" rel="stylesheet" 
              href="../tyylit/virhetyyli.css" media="screen"/>
    </head>
    <body>
        <section>
        <h1>Ohjelmassa tapahtui virhe!</h1>
        <p>
            <?php echo htmlspecialchars($_GET["virhe"])?>
        </p>
        <a href="../index.html">Pääsivulle</a>
        </section>
    </body>
</html>
