/* kirjautuminen.js */

(function () {
    let uusi;
    let varmistuskysymys;
    let varmistuskentta;
    let otsikko;
    let nimimerkki;
    let salasana;
    let laheta;
    let virhe;
    let onUusi;
    let lomake;

    document.addEventListener('DOMContentLoaded', aloita);

    function aloita() {
        uusi = document.getElementById('uusi');
        varmistuskysymys = document.getElementById('varmistuskysymys');
        varmistuskentta = document.getElementById('varmistus');
        otsikko = document.getElementById('otsikko');
        nimimerkki = document.getElementById('nimimerkki');
        salasana = document.getElementById('salasana');
        laheta = document.getElementById('laheta');
        virhe = document.getElementById('virhe');
        onUusi = false;
        lomake = document.getElementById('login');

        laheta.addEventListener('click', suoritaLahetys);
        uusi.addEventListener('click', varmista);
        nimimerkki.addEventListener('focus', tyhjennaVirheilmoitus);
        salasana.addEventListener('focus', tyhjennaVirheilmoitus);
        varmistuskentta.addEventListener('focus', tyhjennaVirheilmoitus);
    }
    function tyhjennaVirheilmoitus() {
        virhe.textContent = "";
        virhe.classList.add('piilotettu');
    }
    function virheilmoitus(virheteksti) {
        virhe.textContent = virheteksti;
        virhe.classList.remove('piilotettu');
    }

    function suoritaLahetys() {
        tyhjennaVirheilmoitus();
        if (nimimerkki.value.length === 0) {
            virheilmoitus("Syötä nimimerkki.");
            return;
        }
        else if (salasana.value.length === 0) {
            virheilmoitus("Syötä salasana!");
            return;
        }
        if (onUusi) {
            if (varmistuskentta.value.length === 0) {
                virheilmoitus("Syötä salasana uudestaan!");
                return;
            }
            if(salasana.value!==varmistuskentta.value) {
                virheilmoitus("Salasanat eroavat toisistaan!");
                return;
            }
            lomake.action = "uusiKayttaja.php";
            lomake.submit();
        }
        else {
            post('tarkastaKayttaja.php', "nimimerkki=" + nimimerkki.value + "&salasana=" + salasana.value, tulosKasittelija);
        }
    }

    function varmista() {
        varmistuskysymys.classList.remove('piilotettu');
        tyhjennaVirheilmoitus();
        uusi.classList.add('piilotettu');
        otsikko.textContent = 'Uusi käyttäjä';
        onUusi = true;
        varmistuskentta.setAttribute('required', true);
    }

    function post(url, data, callback) {
        let request = new XMLHttpRequest();
        request.addEventListener("load", () => callback(request.responseText));
        request.open("POST", url, true);
        request.setRequestHeader("Content-type",
                "application/x-www-form-urlencoded");
        request.send(data);
    }

    function tulosKasittelija(teksti) {
        if (teksti.length > 0) {
            lomake.action = "aloitus.php";
            lomake.submit();
        }
        else {
            uusi.classList.remove('piilotettu');
            virheilmoitus("nimimerkkiä ei ole tai salasana oli väärin. Jos olet uusi käyttäjä paina lisää uusi -painiketta. Jos olet vanha käyttäjä, syötä nimimerkki tai salasana uudestaan.");
        }
        otsikko.textContent = teksti;
    }

})();


