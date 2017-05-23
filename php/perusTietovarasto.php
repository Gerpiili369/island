<?php

/* perusTietovarasto */

require 'tietokannanHallinta.php';

class Perustietovarasto {

    private $yhteydenhallinta;

    public function __construct() {
        $this->yhteydenhallinta = new YhteydenHallinta();
    }

    public function kirjautuminenOnnistui($nimimerkki, $salasana) {
        $rivit = $this->yhteydenhallinta->
                suoritaHakuLause("select rahamaara from"
                . " Pelaaja where nimimerkki=? and salasana=?", Array($nimimerkki, $salasana));
        return count($rivit) == 1;
    }
    
    public function lisaaPelaaja($nimimerkki, $salasana) {
        $lkm = $this->yhteydenhallinta->suoritaPaivitysLause("insert into Pelaaja "
                . "(nimimerkki,salasana,rahamaara) "
                . "values (?,?,100)", Array($nimimerkki, $salasana));
        return $lkm == 1;
    }

    public function haeRahamaara($nimimerkki) {
        $tulos = $this->yhteydenhallinta->
                suoritaHakuLause("select rahamaara from Pelaaja where nimimerkki=?", Array($nimimerkki));
        if (count($tulos) == 0) {
            header("Location: virhe.php?virhe=Kohtalokas virhe. Peli pitää aloittaa uudestaan!");
        }
        return $tulos[0]['rahamaara'];
    }
    
 
    //Positiivinen $rahamaaranMuutos lisää summaa ja negatiivinen vähentää.
    public function muutaRahamaaraa($nimimerkki, $rahamaaranMuutos) {
        $lkm = $this->yhteydenhallinta->suoritaPaivitysLause("update Pelaaja "
                . " set rahamaara=rahamaara+? where nimimerkki=?", Array($rahamaaranMuutos, $nimimerkki));
        return $lkm == 1;
    }

    public function saariaVierailemattaLkm($nimimerkki) {
        return $this->yhteydenhallinta->
            suoritaHakuLause("select count(saariID) as lkm from Saari "
                    . "where saariID not in (select Saari_saariID from "
                    . "Pelaaja_vieraillut_Saari where Pelaaja_nimimerkki=?)", 
                    Array($nimimerkki))[0]['lkm'];
    }

    public function haeVieraillutSaaret($nimimerkki) {
        return $this->yhteydenhallinta->
                        suoritaHakuLause("select saarenNimi from Saari "
                                . "inner join Pelaaja_vieraillut_Saari "
                                . "on saariID=Saari_saariID "
                                . "where Pelaaja_nimimerkki=? order by saarenNimi", Array($nimimerkki));
    }


    public function haeKohdesaaret($lahtoSaarenNimi) {
        return $this->yhteydenhallinta->
                        suoritaHakuLause("select saareen.saarenNimi, "
                                . "saareen.saarenURL, Saari_reitti_Saari.hinta "
                                . "from Saari as saaresta inner join Saari_reitti_Saari "
                                . "on saaresta.saariID=Saari_reitti_Saari.Saari_saarestaID "
                                . "inner join Saari as saareen "
                                . "on saareen.saariID=Saari_reitti_Saari.Saari_saareenID "
                                . "where saaresta.saarenNimi=? "
                                . "order by hinta,saareen.saarenNimi", Array($lahtoSaarenNimi));
    }
    
    public function haeKaikkiKohdesaaret() {
        return $this->yhteydenhallinta->
                        suoritaHakuLause("select saarenNimi, saarenURL from Saari "
                                . "order by saarenNimi");
    }

    

    

    public function haeSaarenID($saarenNimi) {
        $tulos = $this->yhteydenhallinta->
                suoritaHakuLause("select saariID from Saari "
                . "where saarenNimi=?", Array($saarenNimi));

        if (count($tulos) == 0) {
            return 0;
        }
        return $tulos[0]['saariID'];
    }

    public function lisaaVierailtuSaari($nimimerkki, $saarenNimi) {
        $saariID = $this->haeSaarenID($saarenNimi);
        if ($saariID > 0) {
            $lkm = $this->yhteydenhallinta->suoritaPaivitysLause("insert into Pelaaja_vieraillut_Saari "
                    . " (Pelaaja_nimimerkki, Saari_saariID) values(?,?)", Array($nimimerkki, $saariID));
            if ($lkm == 1) {
                return TRUE;
            } else {
                return FALSE;
            }
        }
        return FALSE;
    }

}
