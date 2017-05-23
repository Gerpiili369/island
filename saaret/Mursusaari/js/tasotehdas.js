/* 
tasotehdas.js
 */
class Tasotehdas{
    constructor() {
        this.tasot=lataaTasot();
        this.aktiivinenIndeksi=0;
        this.aktiivinenTaso=this.tasot[0];
    }
    
    onTasojaJaljella() {
        return this.aktiivinenIndeksi<this.tasot.length;
    }
    
    seuraavaTaso() {
        this.aktiivinenIndeksi++;
        if(this.onTasojaJaljella()){
            this.aktiivinenTaso=this.tasot[this.aktiivinenIndeksi];
        }
    }
    
    getTaso() {
        return this.aktiivinenTaso;
    }
    
    onTasoLoppu(pelaaja) {
        for(let paikka of this.aktiivinenTaso.loppupaikat){
            if (pelaaja.rivi === paikka.rivi && pelaaja.sarake===paikka.sarake){
                this.aktiivinenIndeksi=paikka.seuraavataso-1;
                pelaaja.rivi=paikka.alkurivi;
                pelaaja.sarake=paikka.alkusarake;
                return true;
            }
            
        }
        return false;
    }
    
    onSiirtoKelvollinen(rivi, sarake){
        let taso=this.aktiivinenTaso;
        return 0<=rivi && rivi<taso.riviLkm &&
               0<=sarake && sarake<taso.sarakeLkm &&
         taso.kartta[rivi][sarake]<=taso.pelaajanKulkuSallittuMax;
    }
    
    getPelaaja() {
        let taso=this.aktiivinenTaso;
        return new Pelaaja("pelaaja",taso.alkurivi,
                           taso.alkusarake,'oikea');
    }
    
    getEsineet(){
        return this.aktiivinenTaso.esineet;
    }
    
    getAvaimet(){
        return this.aktiivinenTaso.avaimet;
    }
    
    getVastustajat() {
        let vastustajataulu=[];
        for(let vastustaja of this.aktiivinenTaso.vastustajat){
            vastustajataulu.push(new Vastustaja(vastustaja.nimi,
                                                vastustaja.alkurivi,
                                                vastustaja.alkusarake,
                                                vastustaja.suunta));
        }
        return vastustajataulu;
    }
}

