<!DOCTYPE html>

<html>
    <head>
        <title>Kirjautuminen</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, 
              initial-scale=1.0">
        <link type="text/css" rel="stylesheet" 
              href="../tyylit/perustyyli.css" media="screen" />
        <link type="text/css" rel="stylesheet" 
              href="../tyylit/kirjautumistyyli.css" media="screen" />
        <script src="../js/kirjautuminen.js"></script>
       
    </head>
    <body>
        <section>
            <h1 id="otsikko">Kirjaudu</h1>
            <form id="login" name="login" method="post">
                <p>
                    <label for="nimimerkki">Nimimerkki:</label>
                    <input type="text" id="nimimerkki" name="nimimerkki" 
                           size="15">
                </p>
                <p>
                    <label for="salasana">Anna salasana:</label>
                    <input type="password" id="salasana" 
                           name="salasana" size="20">
                </p>
                <p id="varmistuskysymys" class='piilotettu'>
                    <label for="varmistus">Salasana uudestaan:</label>
                    <input type="password" id="varmistus" 
                           name="varmistus" size="20" >
                </p>                 
            </form>
            <div class="napit">
                <button id="uusi" type="button" class='piilotettu'>
                    Uusi käyttäjä
                </button>
                <button id="laheta">Lähetä</button>
            </div>
        </section>
        <p id="virhe" class="piilotettu"></p> 
    </body>
</html>
