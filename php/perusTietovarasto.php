<?php
require 'tietokannanHallinta.php';

class PerusTietovarasto{
    private $yhteydenHallinta;
    
    public function __construct() {
        $this->yhteydenHallinta=new YhteydenHallinta();
    }
    
    public function salasanaOikein($nimimerkki, $salasana) {
        $rivit=$this->yhteydenHallinta->suoritaHakuLause(
                "select * from Pelaaja where nimimerkki=? and salasana=?",
                array($nimimerkki, $salasana)
        );
        return count($rivit)==1;
    }
}
