/* 
peli.js
 */

(function(){
   let onLoppu;
   let tasotehdas;   
   let olio;
   let vastustajat;
   let esineet;
   let ajastin;
  
   document.addEventListener('DOMContentLoaded',muodostaPeli);
   
   function muodostaPeli(){
       onLoppu=false;
       tasotehdas=new Tasotehdas();
       olio=tasotehdas.getPelaaja();
       vastustajat=tasotehdas.getVastustajat();
       esineet=tasotehdas.getEsineet();
      
       teePelialue(tasotehdas.getTaso());
       lisaaEsineet(esineet);
       lisaaVastustajatAlkupaikkaan(vastustajat);
       lisaaUusiSuunta(olio);
        
       let nappaimisto=new Nappainkonfiguraatio();
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_YLOS, TOIMINTO.YLOS);
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_ALAS, TOIMINTO.ALAS);
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_VASEN, TOIMINTO.VASEN);
       nappaimisto.lisaaNappain(NAPPAIN.NUOLI_OIKEA, TOIMINTO.OIKEA);
                               //keyup
       window.addEventListener('keydown', function(e) {
           suoritaToiminto(nappaimisto.getToiminto(e.keyCode));
       });
       
       ajastin=setInterval(paivitaVastustajat, 500);
   }
   
   function suoritaToiminto(toiminto) { 
       if(onLoppu) {
           window.location.href="loppu.html";
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
       tarkastaEsineTormaykset(olio);
       lisaaUusiSuunta(olio);
       
       if(tasotehdas.onTasoLoppu(olio)) {
           vaihdaTaso();
       }
   }//suoritaToiminto loppu
   
   function tarkastaEsineTormaykset(pelaaja) {
       for(let i=0; i<esineet.length;i++) {
           if(esineet[i].rivi===pelaaja.rivi && 
              esineet[i].sarake===pelaaja.sarake) {
              pelaaja.lisaaReppuun(esineet[i]);
              poistaLuokka(esineet[i].rivi, esineet[i].sarake, esineet[i].nimi);
              paivitaRepunSisalto(pelaaja);
              esineet.splice(i,1);
              return;
           }
       }      
   }
   
   function vaihdaTaso() {
       tasotehdas.seuraavaTaso();
       if(tasotehdas.onTasojaJaljella()){
           teePelialue(tasotehdas.getTaso());
           olio.rivi=tasotehdas.getTaso().alkurivi;
           olio.sarake=tasotehdas.getTaso().alkusarake;
           esineet=tasotehdas.getEsineet();
           lisaaEsineet(esineet);
           lisaaUusiSuunta(olio);
           vastustajat=tasotehdas.getVastustajat();
           lisaaVastustajatAlkupaikkaan(vastustajat);
       }
       else {
           onLoppu=true;    
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


