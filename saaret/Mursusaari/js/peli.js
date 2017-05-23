/* 
peli.js
 */

(function(){
   let onLoppu;
   let onVoitto;
//   let ajastin;
   let tasotehdas;   
   let olio;
   let vastustajat;
   let esineet;
   let avaimet;
   let nimimerkki;
   let ajastin;
  
   document.addEventListener('DOMContentLoaded',muodostaPeli);
   
   function muodostaPeli(){
       nimimerkki = document.getElementById('nimimerkki').textContent;
       onLoppu=false;
       onVoitto=false;
       tasotehdas=new Tasotehdas();
       olio=tasotehdas.getPelaaja();
       vastustajat=tasotehdas.getVastustajat();
       esineet=tasotehdas.getEsineet();
       avaimet=tasotehdas.getAvaimet();
      
       teePelialue(tasotehdas.getTaso());
       lisaaEsineet(esineet);
       lisaaAvaimet(avaimet);
       lisaaVastustajatAlkupaikkaan(vastustajat);
       lisaaUusiSuunta(olio);
       
       paivitaPisteet(tasotehdas.getTaso(), olio);
        
       let nappaimisto=new Nappainkonfiguraatio();
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_YLOS, TOIMINTO.YLOS);
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_ALAS, TOIMINTO.ALAS);
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_VASEN, TOIMINTO.VASEN);
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_OIKEA, TOIMINTO.OIKEA);
                               //keyup
       window.addEventListener('keydown', function(e) {
           suoritaToiminto(nappaimisto.getToiminto(e.keyCode));
       });
       
       ajastin=setInterval(paivitaVastustajat, 200);
   }
   
   function suoritaToiminto(toiminto) { 
        if(onLoppu) {
            window.location.href="loppu.php";
        }
        else if(onVoitto) {
                 let viesti = "nimimerkki="+nimimerkki+"&rahasumma="+olio.pisteet;
                 post('../../php/talletaRahat.php', viesti);
     //            clearInterval(ajastin);
                 window.location.href="voitto.php";
         }
       switch(toiminto) {
            case TOIMINTO.YLOS:
                if(tasotehdas.onSiirtoKelvollinen(olio.rivi-1,olio.sarake)) {
                    poistaVanhaSuunta(olio);
                    olio.suunta=SUUNTA.YLOS;
                    olio.siirry();
                }
                break;
            case TOIMINTO.ALAS:
                if(tasotehdas.onSiirtoKelvollinen(olio.rivi+1,olio.sarake)) {
                    poistaVanhaSuunta(olio);
                    olio.suunta=SUUNTA.ALAS;
                    olio.siirry();
                }
                break;
            case TOIMINTO.VASEN:
                if(tasotehdas.onSiirtoKelvollinen(olio.rivi,olio.sarake-1)){
                  poistaVanhaSuunta(olio);
                  olio.suunta=SUUNTA.VASEN;
                  olio.siirry();
                }
                break;
            case TOIMINTO.OIKEA:
                if(tasotehdas.onSiirtoKelvollinen(olio.rivi,olio.sarake+1)){
                  poistaVanhaSuunta(olio);
                  olio.suunta=SUUNTA.OIKEA;
                  olio.siirry();
                }
            
       } //switch loppu
       paivitaSumu(tasotehdas.getTaso(), olio)
       tarkastaEsineTormaykset(olio);
       tarkastaAvainTormaykset(olio);
       lisaaUusiSuunta(olio);
       
       if(tasotehdas.onTasoLoppu(olio)) {
           vaihdaTaso();
       }
   }//suoritaToiminto loppu
   
   function tarkastaEsineTormaykset(olio) {
       for(let i=0; i<esineet.length; i++) {
           if(esineet[i].rivi===olio.rivi && 
              esineet[i].sarake===olio.sarake) {
              olio.lisaaReppuun(esineet[i]);
              poistaLuokka(esineet[i].rivi, esineet[i].sarake, esineet[i].nimi);
              paivitaRepunSisalto(olio);
              esineet.splice(i,1);
              paivitaPisteet(tasotehdas.getTaso(), olio);
              
               return;
           }
       }      
   }
   
    function tarkastaAvainTormaykset(olio) {
        let taso=tasotehdas.getTaso();
                if (avaimet===undefined) {
            return;
        }
        for (let i=0; i<avaimet.length; i++) {
            let avain=avaimet[i];
            if (olio.rivi===avain.rivi && olio.sarake===avain.sarake) {
                olio.lisaaNippuun(avain);
                poistaLuokka(avain.rivi, avain.sarake, avain.nimi);
                avaimet.splice(i, 1);
                //paivitaPisteet(taso, olio);
                    for(let avain of olio.nippu) {
                    if(tasotehdas.getTaso().nimi===avain.taso) {
                        tasotehdas.getTaso().kartta[avain.avaaRivi][avain.avaaSarake] = avain.arvo;
                        korvaaLuokat(avain.avaaRivi, avain.avaaSarake, tasotehdas.getTaso().karttakuvat[avain.arvo]);
                    }
                }
                return;
            }
        }
    }
    
    function vaihdaTaso() {
        tasotehdas.seuraavaTaso();
        if(tasotehdas.onTasojaJaljella()){
            for(let avain of olio.nippu) {
                if(tasotehdas.getTaso().nimi===avain.taso) {
                    tasotehdas.getTaso().kartta[avain.avaaRivi][avain.avaaSarake] = avain.arvo;
                    korvaaLuokat(avain.avaaRivi, avain.avaaSarake, tasotehdas.getTaso().karttakuvat[avain.arvo]);
                }
            }    
            teePelialue(tasotehdas.getTaso());
            //olio.rivi=tasotehdas.getTaso().alkurivi;
            //olio.sarake=tasotehdas.getTaso().alkusarake;
            esineet=tasotehdas.getEsineet();
            avaimet=tasotehdas.getAvaimet();
            lisaaEsineet(esineet);
            lisaaAvaimet(avaimet);
            lisaaUusiSuunta(olio);
            paivitaSumu(tasotehdas.getTaso(),olio);
            vastustajat=tasotehdas.getVastustajat();
            lisaaVastustajatAlkupaikkaan(vastustajat);
       }
       else {
           onVoitto=true;    
       }
   }//vaihdaTaso loppu
   
   function paivitaVastustajat() {
       for(let vastustaja of vastustajat) {
           poistaVanhaSuunta(vastustaja);
           vastustaja.siirry(tasotehdas);
           lisaaUusiSuunta(vastustaja);
           
           if(tuliTormays(olio, vastustaja)) {
               lisaaLuokka(olio.rivi,olio.sarake,'tormays');
               onLoppu=true;
               clearInterval(ajastin);
           }
       }       
   }//paivitaVastustajat loppui
   function tuliTormays(pelaaja,vastustaja){
       return pelaaja.rivi===vastustaja.rivi && 
              pelaaja.sarake===vastustaja.sarake;
   }
})();


