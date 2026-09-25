/*
====================================================
NWU CAMPUS MONEY MARKET
TEXTBOOK / MODULE CATALOGUE
====================================================

IMPORTANT:
A module can exist here even if we have not yet
verified its prescribed textbook.

Verified textbook information can be added to
NWU_TEXTBOOKS separately.
====================================================
*/


const NWU_MODULES = {

    CMPG: {

        1: [
            "CMPG111",
            "CMPG121",
            "CMPG122"
        ],

        2: [
            "CMPG211",
            "CMPG212",
            "CMPG213",
            "CMPG214",
            "CMPG215",
            "CMPG221",
            "CMPG222",
            "CMPG223"
        ],

        3: [
            "CMPG311",
            "CMPG312",
            "CMPG313",
            "CMPG315",
            "CMPG321",
            "CMPG322",
            "CMPG323",
            "CMPG324"
        ]
    },


    Accounting: {

        1: [
            "ACCS111",
            "ACCS121",
            "ACCF111",
            "ACCF121"
        ],

        2: [
            "ACCF211",
            "ACCF221"
        ],

        /*
        We will add the correct third-year
        Accounting modules after verifying the
        exact NWU Accounting programme/yearbook.
        */

        3: []
    }

};



/*
====================================================
VERIFIED TEXTBOOK CATALOGUE
====================================================
*/

const NWU_TEXTBOOKS = [

    {
        module: "CMPG111",
        subject: "CMPG",
        year: 1,

        title: "Starting Out with Python",
        author: "Tony Gaddis",
        edition: "5th Edition",

        isbn: "",

        /*
        Stable catalogue cover URL goes here
        once verified.
        */

        cover: "",

        googleQuery:
            "Starting Out with Python Tony Gaddis 5th Edition"
    },


    {
        module: "CMPG211",
        subject: "CMPG",
        year: 2,

        title:
            "Introduction to Java Programming and Data Structures",

        author:
            "Y. Daniel Liang",

        edition:
            "11th Edition",

        isbn:
            "9781292221878",

        cover: "",

        googleQuery:
            "9781292221878"
    },


    {
        module: "CMPG212",
        subject: "CMPG",
        year: 2,

        title:
            "Starting Out with Visual C#",

        author:
            "Tony Gaddis",

        edition:
            "4th Edition",

        isbn:
            "9781292163215",

        cover: "",

        googleQuery:
            "9781292163215"
    },


    {
        module: "CMPG213",
        subject: "CMPG",
        year: 2,

        title:
            "Modern Systems Analysis and Design",

        author:
            "J. Valacich & J.F. George",

        edition:
            "9th Edition",

        isbn:
            "9781292351629",

        cover: "",

        googleQuery:
            "9781292351629"
    },


    {
        module: "ACCS111",
        subject: "Accounting",
        year: 1,

        title:
            "Accounting: All-in-One",

        author:
            "L. Cornelius & M. Weyers",

        edition:
            "7th Edition",

        isbn:
            "9781776174560",

        cover: "",

        googleQuery:
            "9781776174560"
    }

];



/*
====================================================
HELPER
====================================================
*/

function findTextbookByModule(moduleCode) {

    return NWU_TEXTBOOKS.find(
        function (book) {

            return (
                book.module ===
                moduleCode
            );

        }
    );

}
