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
           "sumu":{"nimi":"sumu", "leveys":1,"pituus":2},
            "loppupaikat":[
               {"rivi":3,"sarake":13,"seuraavataso":1,"alkurivi":3,"alkusarake":0},
           ],
           "karttakuvat":["tie","seinä"],
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
                        [1,0,0,0,0,1,1,1,0,1,0,0,0,0],
                        [1,1,1,1,0,1,0,0,0,1,0,1,1,1],
                        [1,0,0,1,0,1,0,1,1,1,0,0,0,1],
                        [1,0,1,1,0,1,0,1,0,1,0,1,0,1],
                        [1,0,0,0,0,1,0,0,0,0,0,1,0,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
           "loppupaikat":[
               {"rivi":5,"sarake":13,"seuraavataso":2,"alkurivi":5,"alkusarake":0},
               {"rivi":3,"sarake":0,"seuraavataso":0,"alkurivi":3,"alkusarake":13}
           ],
           "karttakuvat":["tie","seinä"],
           "pelaajanKulkuSallittuMax":0,
           "sumu":{"nimi":"sumu", "leveys":1,"pituus":1},
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
           "loppupaikat":[
               {"rivi":0,"sarake":6,"seuraavataso":7},
               {"rivi":0,"sarake":7,"seuraavataso":7},
               {"rivi":10,"sarake":2,"seuraavataso":3,"alkurivi":0,"alkusarake":2},
               {"rivi":5,"sarake":0,"seuraavataso":1,"alkurivi":5,"alkusarake":13}
           ],
           "karttakuvat":["tie","seinä"],
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
             "loppupaikat":[
               {"rivi":0,"sarake":2,"seuraavataso":2,"alkurivi":10,"alkusarake":2},
               {"rivi":5,"sarake":13,"seuraavataso":4,"alkurivi":5,"alkusarake":0},
               {"rivi":5,"sarake":0,"seuraavataso":5,"alkurivi":4,"alkusarake":13}
           ],
           "karttakuvat":["tie","seinä"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
           ],
            "vastustajat":[
               {"nimi":"vastustaja","alkurivi":5,"alkusarake":6,"suunta":"alas"}
           ]
        },
        {
            "nimi":"huone 4",
            "riviLkm":11,
            "sarakeLkm":16,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1], //rivi 1
                        [1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1],
                        [1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1],
                        [1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1],
                        [0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1],
                        [1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1],
                        [1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1],
                        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
                        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
             "loppupaikat":[
               {"rivi":5,"sarake":0,"seuraavataso":3,"alkurivi":5,"alkusarake":13},
           ],
           "karttakuvat":["tie","seinä"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
               {"nimi":"avaimet","rivi":9,"sarake":14,"pisteet":10}
           ],
            "vastustajat":[
                {"nimi":"vastustaja","alkurivi":8,"alkusarake":2,"suunta":"oikea"},
                {"nimi":"vastustaja","alkurivi":4,"alkusarake":13,"suunta":"ylös"},
                {"nimi":"vastustaja","alkurivi":5,"alkusarake":9,"suunta":"ylös"}
           ]
        },
        {
            "nimi":"huone 5",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,0,0,0,0,1,0,0,0,0,1,0,0,1], //rivi 1
                        [1,0,1,1,0,1,0,1,1,0,1,0,0,1],
                        [1,0,1,0,0,1,0,0,0,0,1,1,0,1],
                        [1,0,1,1,1,1,0,0,1,0,0,0,0,0],
                        [1,0,0,0,0,1,0,0,1,0,0,0,0,1],
                        [1,0,0,0,0,1,0,0,1,1,1,1,0,1],
                        [1,1,1,1,0,0,0,0,1,0,0,1,0,1],
                        [1,0,0,1,0,1,1,0,1,0,1,1,0,1],
                        [1,0,0,0,0,0,0,0,1,0,0,0,0,1],
                        [1,1,1,1,1,1,1,1,1,0,1,1,1,1]
                    ],
             "loppupaikat":[
               {"rivi":4,"sarake":13,"seuraavataso":3,"alkurivi":5,"alkusarake":0},
               {"rivi":10,"sarake":9,"seuraavataso":6,"alkurivi":0,"alkusarake":9},
           ],
           "karttakuvat":["tie","seinä"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
               {"nimi":"avaimet","rivi":3,"sarake":3,"pisteet":10}
           ],
            "vastustajat":[
                {"nimi":"vastustaja","alkurivi":1,"alkusarake":7,"suunta":"vasen"},
                {"nimi":"vastustaja","alkurivi":9,"alkusarake":5,"suunta":"oikea"}
           ]
        },
        {
            "nimi":"huone 6",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,0,1,1,1,1], //rivi 0
                        [1,0,0,0,0,0,0,0,0,0,0,0,0,1], //rivi 1
                        [1,0,0,1,0,0,0,0,0,0,1,0,0,1],
                        [1,0,0,1,1,1,0,0,1,1,1,0,0,1],
                        [1,0,0,0,0,0,0,0,0,0,1,0,0,1],
                        [1,0,0,0,0,0,0,0,0,0,1,0,0,1],
                        [1,0,1,1,0,0,0,0,0,0,0,0,0,1],
                        [1,0,0,1,0,0,0,0,0,0,0,0,0,1],
                        [1,0,0,1,1,1,0,0,1,1,1,1,0,1],
                        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    ],
             "loppupaikat":[
               {"rivi":0,"sarake":9,"seuraavataso":5,"alkurivi":10,"alkusarake":9},
           ],
           "karttakuvat":["tie","seinä"],
           "pelaajanKulkuSallittuMax":0,
           "esineet":[
           ],
            "vastustajat":[
           ]
        }
    ];
}
        
