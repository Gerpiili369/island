/* 
pelaaja.js
 */
class Pelaaja{
    constructor(nimi,rivi,sarake,suunta){
        this.nimi=nimi;
        this.rivi=rivi;
        this.sarake=sarake;
        this.suunta=suunta;
        this.pisteet=0;
        this.reppu=[];
    }
    
    lisaaReppuun(esine) {
        this.pisteet+=esine.pisteet;
        this.reppu.push(esine);
    }
    
    getLuokka() {
        return this.nimi+this.suunta;
    }
    haeReppu() {
        return this.reppu;
    }
    
    siirry(){
        switch(this.suunta) {
            case SUUNTA.YLOS: this.rivi--;break;
            case SUUNTA.ALAS: this.rivi++;break;
            case SUUNTA.VASEN: this.sarake--;break;
            case SUUNTA.OIKEA: this.sarake++;break;
        }
    }
}

