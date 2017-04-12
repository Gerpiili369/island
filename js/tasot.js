/* 
 tasot.js
 */
function lataaTasot() {
    return [
        
        {
            "nimi":"taso 1",
            "riviLkm":8,
            "sarakeLkm":13,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,2], //rivi 0
                        [1,0,0,0,1,0,0,0,0,0,0,0,0], //rivi 1
                        [0,0,1,0,1,0,2,2,2,0,1,0,2],
                        [1,0,1,0,0,0,1,1,1,0,1,0,2],
                        [1,0,0,0,1,0,0,0,0,0,1,0,1],
                        [1,1,0,1,1,1,1,0,1,1,1,0,1],
                        [1,1,0,0,0,0,0,0,0,0,0,0,0],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "alkurivi":2,
           "alkusarake":0,
           "loppurivi":1,
           "loppusarake":12,
            "loppupaikat":[
               {"rivi":1,"sarake":12,"seuraavataso":1},
               {"rivi":6,"sarake":12,"seuraavataso":1}
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
               {"nimi":"raha","rivi":1,"sarake":7,"pisteet":10},
               {"nimi":"raha","rivi":4,"sarake":8,"pisteet":10},
               {"nimi":"avaimet","rivi":6,"sarake":11}
           ],
           "vastustajat":[
               {"nimi":"vastustaja","alkurivi":1,"alkusarake":3,"suunta":"vasen"},
               {"nimi":"vastustaja","alkurivi":1,"alkusarake":7,"suunta":"oikea"}
           ]
        },
        {
            "nimi":"taso 2",
            "riviLkm":11,
            "sarakeLkm":13,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,1,1,0,0,0,0,0,1,1,1,1,1], //rivi 1
                        [1,1,1,0,0,0,0,0,1,1,1,1,1],
                        [1,1,1,0,0,0,0,0,1,1,1,1,1],
                        [1,1,1,1,0,0,1,1,1,0,1,1,1],
                        [1,1,1,1,0,0,0,0,0,0,0,0,0],
                        [1,1,1,1,1,0,0,0,0,0,0,0,0],
                        [1,1,1,1,0,0,0,1,1,1,1,1,1],
                        [1,1,1,1,0,0,1,1,1,1,1,1,1],
                        [1,1,1,1,0,0,1,1,1,1,1,1,1],
                        [1,1,1,1,0,0,1,1,1,1,1,1,1]
                    ],
           "alkurivi":10,
           "alkusarake":4,
           "loppurivi":5,
           "loppusarake":12,
           "loppupaikat":[
               {"rivi":5,"sarake":12,"seuraavataso":2},
               {"rivi":6,"sarake":12,"seuraavataso":2}
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
               {"nimi":"avaimet","rivi":2,"sarake":7},
           ],
           "vastustajat":[
               {"nimi":"vastustaja","alkurivi":2,"alkusarake":4,"suunta":"vasen"},
               {"nimi":"vastustaja","alkurivi":2,"alkusarake":6,"suunta":"oikea"}
           ]
        },
        {
            "nimi":"taso 3",
            "riviLkm":8,
            "sarakeLkm":19,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1], //rivi 0
                        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1], //rivi 1
                        [1,0,1,0,1,0,2,2,2,0,1,0,2,0,0,1,0,2,1],
                        [1,0,1,0,0,0,1,1,1,0,1,0,2,1,0,0,0,1,1],
                        [0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0],
                        [1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1],
                        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "alkurivi":4,
           "alkusarake":0,
           "loppurivi":4,
           "loppusarake":18,
             "loppupaikat":[
               {"rivi":4,"sarake":18,"seuraavataso":3}
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
               {"nimi":"raha","rivi":1,"sarake":7,"pisteet":10}
           ],
            "vastustajat":[
               {"nimi":"vastustaja","alkurivi":1,"alkusarake":3,"suunta":"vasen"},
               {"nimi":"vastustaja","alkurivi":1,"alkusarake":7,"suunta":"oikea"}
           ]
        }
    ];
}

