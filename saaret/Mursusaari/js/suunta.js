/* 
suunta.js
 */

var SUUNTA=(function() {
    const YLOS='ylos';
    const ALAS='alas';
    const OIKEA='oikea';
    const VASEN='vasen';
    
    const MYOTAPAIVAAN=[YLOS,OIKEA,ALAS,VASEN];
    const VASTAPAIVAAN=[YLOS,VASEN,ALAS,OIKEA];
    
    var kiertosuuntaMyotapaivaan=true;
    
    function muutaKiertosuunta(tila){
        kiertosuuntaMyotapaivaan=tila;        
    }
    function seuraavaSuunta(suunta) {
        let suunnat=kiertosuuntaMyotapaivaan?MYOTAPAIVAAN:VASTAPAIVAAN;
        let lahtoindeksi=suunnat.indexOf(suunta);
        lahtoindeksi++;
        return suunnat[lahtoindeksi%suunnat.length];
    }
    
    return {
        YLOS:YLOS,
        ALAS:ALAS,
        OIKEA:OIKEA,
        VASEN:VASEN,
        setKiertosuuntaMyotapaivaan: function() {
            muutaKiertosuunta(true);
        },
        setKiertosuuntaVastapaivaan: function() {
            muutaKiertosuunta(false);
        },
        getSeuraavaSuunta: function(suunta) {
            return seuraavaSuunta(suunta);
        }
    }
})();

