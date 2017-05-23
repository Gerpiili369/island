/* 
 tasot.js
 */
function lataaTasot() {
    return [
        
        {
            "nimi":"huone 1",
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
            "loppupaikat":[
               {"rivi":3,"sarake":13,"seuraavataso":1,"alkurivi":3,"alkusarake":0}
            ],
            "karttakuvat":["tie","seinä"],
            "pelaajanKulkuSallittuMax":0,
            "esineet":[
            {"nimi":"raha","rivi":1,"sarake":1,"pisteet":10}
            ],
            "avaimet":[
                {"nimi":"avain","rivi":0,"sarake":1,"pisteet":10, "avaaRivi":0, "avaaSarake":0, "arvo":0, "taso":"huone 1"}
            ],
            "vastustajat":[
            ]
        },
        {
            "nimi":"huone 2",
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
            "sumu":{"nimi":"sumu", "leveys":2,"pituus":2},
            "esineet":[
            ],
            "avaimet":[
            ],
            "vastustajat":[
                {"nimi":"vastustaja","alkurivi":3,"alkusarake":12,"suunta":"ylös"},
                {"nimi":"vastustaja","alkurivi":8,"alkusarake":2,"suunta":"ylös"}
            ]
        },
        {
            "nimi":"huone 3",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
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
                {"nimi":"raha","rivi":1,"sarake":1,"pisteet":10}
            ],
            "avaimet":[
            ],
            "vastustajat":[
            ]   
        },
        {
            "nimi":"huone 4",
            "riviLkm":11,
            "sarakeLkm":14,
            "kartta":[
                        [1,1,0,1,1,1,1,1,1,1,1,1,1,1], //rivi 0
                        [1,0,0,0,0,0,0,0,0,0,0,0,0,1], //rivi 1
                        [1,0,0,1,1,1,1,0,1,1,1,0,0,1],
                        [1,0,0,1,0,0,0,0,0,0,1,0,0,1],
                        [1,1,1,1,0,1,1,0,1,0,1,1,1,1],
                        [0,0,0,0,0,1,0,0,1,0,0,0,0,1],
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
            "nimi":"huone 6",
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
            ],
            "avaimet":[
                {"nimi":"avain","rivi":9,"sarake":14,"pisteet":10, "avaaRivi":0, "avaaSarake":6, "arvo":0, "taso":"huone 3"}
            ],
            "vastustajat":[
                {"nimi":"vastustaja","alkurivi":8,"alkusarake":2,"suunta":"oikea"},
                {"nimi":"vastustaja","alkurivi":4,"alkusarake":13,"suunta":"ylös"},
                {"nimi":"vastustaja","alkurivi":5,"alkusarake":9,"suunta":"ylös"}
           ]
        },
        {
            "nimi":"huone 6",
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
                {"rivi":10,"sarake":9,"seuraavataso":6,"alkurivi":0,"alkusarake":9}
            ],
            "karttakuvat":["tie","seinä"],
            "pelaajanKulkuSallittuMax":0,
            "esineet":[
            ],
            "avaimet":[
                {"nimi":"avain","rivi":3,"sarake":3,"pisteet":10, "avaaRivi":5, "avaaSarake":13, "arvo":0, "taso":"huone 4"}
            ],
            "vastustajat":[
                {"nimi":"vastustaja","alkurivi":1,"alkusarake":7,"suunta":"vasen"},
                {"nimi":"vastustaja","alkurivi":9,"alkusarake":5,"suunta":"oikea"}
            ]
        },
        {
            "nimi":"huone 7",
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
                {"rivi":0,"sarake":9,"seuraavataso":5,"alkurivi":10,"alkusarake":9}
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
        
