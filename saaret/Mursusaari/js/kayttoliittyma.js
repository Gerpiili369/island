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
            if (taso.sumu!==undefined) {
                td.classList.add(taso.sumu.nimi);
            }
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

function korvaaLuokat(rivi, sarake, arvo) {
    //console.log("*solu sijainnissa "+rivi+", "+sarake+" on muutettu tilaan: "+arvo);
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

function lisaaAvaimet(avaimet) {
    if (avaimet===undefined) {
        return;
    }
    for(let avain of avaimet) {
        lisaaLuokka(avain.rivi,avain.sarake, avain.nimi);
    }
}

function paivitaRepunSisalto(pelaaja) {
    console.log("pelaajan pisteet:"+pelaaja.pisteet);
}

function poistaSumu(taso,alkurivi, loppurivi, alkusarake,loppusarake) {
    let alkur=Math.max(0,alkurivi);
    let alkus=Math.max(0,alkusarake);
    let loppur=Math.max(0,Math.min(taso.riviLkm-1,loppurivi));
    let loppus=Math.max(0,Math.min(taso.sarakeLkm-1,loppusarake));
    
    for(let rivi=Math.min(alkur,loppur); rivi<=Math.max(alkur,loppur); rivi++) {
        for(let sarake=Math.min(alkus,loppus); sarake<=Math.max(alkus,loppus); sarake++) {
            elementtiTaulukko[rivi][sarake].classList.remove(taso.sumu.nimi);
        }
    }
}


function paivitaSumu(taso, pelaaja) {
    
    if (taso.sumu===undefined) {
        return;
    }
    let leveys=taso.sumu.leveys;
    let pituus=taso.sumu.pituus;
    
    let kerroin=1;
    switch(pelaaja.suunta) {
        case SUUNTA.YLOS: kerroin=-1;
        case SUUNTA.ALAS: 
            poistaSumu(taso, pelaaja.rivi, pelaaja.rivi+kerroin*pituus, pelaaja.sarake-leveys, pelaaja.sarake+leveys);            
            break;
        case SUUNTA.VASEN: kerroin=-1;
        case SUUNTA.OIKEA:
            poistaSumu(taso, pelaaja.rivi-leveys, pelaaja.rivi+leveys, pelaaja.sarake, pelaaja.sarake+kerroin*pituus);
    }
}