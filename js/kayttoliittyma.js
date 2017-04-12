/* 
 kayttoliittyma.js
 */

var elementtiTaulukko;

function teePelialue(taso) {
    let pelialue=document.getElementById('pelialue');
    pelialue.innerHTML='';
    elementtiTaulukko=[];
    let osaDokumentti=document.createDocumentFragment();
    for(let rivi=0; rivi<taso.riviLkm; rivi++) {
        let tr=document.createElement('tr');
        elementtiTaulukko[rivi]=[];
        for(let sarake=0;sarake<taso.sarakeLkm;sarake++){
            let td=document.createElement('td');
            elementtiTaulukko[rivi][sarake]=td;
            td.classList.add(taso.karttakuvat[taso.kartta[rivi][sarake]]);              
            tr.appendChild(td);
        }
        osaDokumentti.appendChild(tr);
    }
    pelialue.appendChild(osaDokumentti);
}

function poistaLuokka(rivi,sarake,luokka) {
    elementtiTaulukko[rivi][sarake].classList.remove(luokka);
}

function lisaaLuokka(rivi,sarake,luokka){
    elementtiTaulukko[rivi][sarake].classList.add(luokka);
}

function poistaVanhaSuunta(hahmo){
    poistaLuokka(hahmo.rivi, hahmo.sarake, hahmo.getLuokka());
}
function lisaaUusiSuunta(hahmo) {
    lisaaLuokka(hahmo.rivi, hahmo.sarake, hahmo.getLuokka());
}
function lisaaVastustajatAlkupaikkaan(vastustajat){
    for(let vastustaja of vastustajat) {
        lisaaUusiSuunta(vastustaja);
    }
}

function lisaaEsineet(esineet) {
    for(let esine of esineet) {
        lisaaLuokka(esine.rivi,esine.sarake, esine.nimi);
    }
}

function paivitaRepunSisalto(pelaaja) {
    console.log("pelaajan pisteet:"+pelaaja.pisteet);
}