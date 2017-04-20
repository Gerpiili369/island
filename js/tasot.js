/* 
 tasot.js
 */
function lataaTasot() {
    return [
        
        {
            "nimi":"huone 0",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,0,0,1,0,0,0,0,0,0,1,0,0,1], //rivi 1
                        [1,0,0,1,0,0,1,1,0,0,1,0,0,1],
                        [1,0,1,0,0,1,0,0,1,1,1,0,0,0],
                        [1,0,0,0,1,0,0,0,0,1,0,0,0,1],
                        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
                        [1,1,1,1,1,0,0,0,0,1,0,0,0,1],
                        [1,0,0,0,1,1,0,0,1,0,0,0,0,1],
                        [1,0,0,0,1,1,1,1,0,0,0,0,1,1],
                        [1,0,0,0,0,0,0,0,0,0,0,1,1,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "alkurivi":5,
           "alkusarake":6,
           "loppurivi":3,
           "loppusarake":13,
            "loppupaikat":[
               {"rivi":3,"sarake":13,"seuraavataso":1,"alkurivi":3,"alkusarake":0},
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
           ],
           "vastustajat":[
           ]
        },
        {
            "nimi":"huone 1",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,0,0,0,0,1,0,0,0,1,0,0,0,1], //rivi 1
                        [1,0,1,1,0,1,0,1,0,1,0,1,0,1],
                        [0,0,1,0,0,0,0,1,0,0,0,1,0,1],
                        [1,1,1,1,0,1,0,1,0,1,1,1,1,1],
                        [1,0,0,0,0,1,1,0,0,1,0,0,0,0],
                        [1,1,1,1,0,1,0,0,0,1,0,1,1,1],
                        [1,0,0,1,0,1,0,1,1,1,0,0,0,1],
                        [1,0,1,1,0,1,0,1,0,1,0,1,0,1],
                        [1,0,0,0,0,1,0,0,0,0,0,1,0,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "alkurivi":3,
           "alkusarake":0,
           "loppupaikat":[
               {"rivi":5,"sarake":13,"seuraavataso":2,"alkurivi":5,"alkusarake":0},
               {"rivi":3,"sarake":0,"seuraavataso":0,"alkurivi":3,"alkusarake":13}
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
           ],
           "vastustajat":[
           ]
        },
        {
          "nimi":"huone 2",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,1,1,1,1,0,0,1,1,1,1,1,1], //rivi 0
                        [1,0,0,0,0,1,0,0,1,0,0,0,0,1], //rivi 1
                        [1,0,1,1,0,1,0,0,1,0,1,1,0,1],
                        [1,0,0,1,0,0,0,0,0,0,0,0,0,1],
                        [1,0,1,1,0,0,0,1,0,0,1,0,0,1],
                        [0,0,0,0,0,1,1,1,0,1,1,1,0,1],
                        [1,0,0,0,0,1,0,0,0,1,0,0,0,1],
                        [1,0,0,0,0,0,0,1,0,1,0,0,0,1],
                        [1,0,1,1,0,1,0,1,0,1,1,1,1,1],
                        [1,0,0,0,0,1,0,1,0,0,0,0,0,1],
                        [1,1,0,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "alkurivi":5,
           "alkusarake":0,
           "loppupaikat":[
               {"rivi":0,"sarake":6,"seuraavataso":7},
               {"rivi":0,"sarake":7,"seuraavataso":7},
               {"rivi":10,"sarake":2,"seuraavataso":3,"alkurivi":0,"alkusarake":2},
               {"rivi":5,"sarake":0,"seuraavataso":1,"alkurivi":5,"alkusarake":13}
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
           ],
           "vastustajat":[
           ]   
        },
        {
            "nimi":"huone 3",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,0,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,0,0,0,0,0,0,0,0,0,0,0,0,1], //rivi 1
                        [1,0,0,1,1,1,1,0,1,1,1,0,0,1],
                        [1,0,0,1,0,0,0,0,0,0,1,0,0,1],
                        [1,1,1,1,0,1,1,0,1,0,1,1,1,1],
                        [0,0,0,0,0,1,0,0,1,0,0,0,0,0],
                        [1,1,1,1,0,1,0,1,1,0,1,1,1,1],
                        [1,0,0,1,0,0,0,0,0,0,1,0,0,1],
                        [1,0,0,1,1,1,0,1,1,1,1,0,0,1],
                        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "alkurivi":4,
           "alkusarake":0,
           "loppurivi":4,
           "loppusarake":18,
             "loppupaikat":[
               {"rivi":0,"sarake":2,"seuraavataso":2,"alkurivi":10,"alkusarake":2},
               {"rivi":5,"sarake":13,"seuraavataso":4},
               {"rivi":5,"sarake":0,"seuraavataso":5}
           ],
           "karttakuvat":["tie","seinä","kukka"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
              // {"nimi":"raha","rivi":1,"sarake":7,"pisteet":10}
           ],
            "vastustajat":[
              // {"nimi":"vastustaja","alkurivi":1,"alkusarake":3,"suunta":"vasen"},
              // {"nimi":"vastustaja","alkurivi":1,"alkusarake":7,"suunta":"oikea"}
           ]
        }
    ];
}

