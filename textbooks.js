/*
=================================================
NWU CAMPUS MONEY MARKET
TEXTBOOK CATALOGUE
=================================================
*/

const NWU_MODULES = {
    CMPG: {
        1: ["CMPG111", "CMPG121", "CMPG122"],

        2: [
            "CMPG211", "CMPG212", "CMPG213",
            "CMPG214", "CMPG215", "CMPG221",
            "CMPG222", "CMPG223"
        ],

        3: [
            "CMPG311", "CMPG312", "CMPG313",
            "CMPG315", "CMPG321", "CMPG322",
            "CMPG323", "CMPG324"
        ]
    },

    Accounting: {
        1: [
            "ACCS111", "ACCS121",
            "ACCF111", "ACCF121"
        ],

        2: [
            "ACCF211", "ACCF221"
        ],

        3: []
    }
};


/*
=================================================
TEXTBOOK CATALOGUE
=================================================

type: "catalogue"
means the card represents a textbook, not
a particular seller's used copy.

cover:
Leave empty until a stable cover source is added.
The marketplace will display a professional
placeholder instead of a broken image.
*/

const NWU_TEXTBOOKS = [

    {
        id: "catalogue-cmpg111-2025",

        type: "catalogue",

        category: "books",

        subject: "CMPG",

        studyYear: 1,

        module: "CMPG111",

        academicYear: 2025,

        name: "Starting Out with Python",

        bookTitle: "Starting Out with Python",

        author: "Tony Gaddis",

        edition: "5th Edition",

        isbn: "",

        cover: "",

        googleQuery:
            "Starting Out with Python Tony Gaddis 5th Edition",

        condition: "Catalogue",

        price: null,

        campus: "All NWU Campuses",

        sellerName: "",

        description:
            "Textbook used for CMPG111 according to the public 2025 eFundi module page."
    },


    {
        id: "catalogue-cmpg211",

        type: "catalogue",

        category: "books",

        subject: "CMPG",

        studyYear: 2,

        module: "CMPG211",

        academicYear: 2024,

        name:
            "Introduction to Java Programming and Data Structures",

        bookTitle:
            "Introduction to Java Programming and Data Structures",

        author:
            "Y. Daniel Liang",

        edition:
            "11th Edition",

        isbn:
            "9781292221878",

        cover: "",

        googleQuery:
            "9781292221878",

        condition:
            "Catalogue",

        price:
            null,

        campus:
            "All NWU Campuses",

        sellerName:
            "",

        description:
            "NWU textbook catalogue entry."
    },


    {
        id: "catalogue-cmpg212",

        type: "catalogue",

        category: "books",

        subject: "CMPG",

        studyYear: 2,

        module: "CMPG212",

        academicYear: 2024,

        name:
            "Starting Out with Visual C#",

        bookTitle:
            "Starting Out with Visual C#",

        author:
            "Tony Gaddis",

        edition:
            "4th Edition",

        isbn:
            "9781292163215",

        cover:
            "",

        googleQuery:
            "9781292163215",

        condition:
            "Catalogue",

        price:
            null,

        campus:
            "All NWU Campuses",

        sellerName:
            "",

        description:
            "NWU textbook catalogue entry."
    },


    {
        id: "catalogue-cmpg213",

        type: "catalogue",

        category: "books",

        subject: "CMPG",

        studyYear: 2,

        module: "CMPG213",

        academicYear: 2024,

        name:
            "Modern Systems Analysis and Design",

        bookTitle:
            "Modern Systems Analysis and Design",

        author:
            "J. Valacich & J.F. George",

        edition:
            "9th Edition",

        isbn:
            "9781292351629",

        cover:
            "",

        googleQuery:
            "9781292351629",

        condition:
            "Catalogue",

        price:
            null,

        campus:
            "All NWU Campuses",

        sellerName:
            "",

        description:
            "NWU textbook catalogue entry."
    },


    {
        id: "catalogue-accs111",

        type: "catalogue",

        category: "books",

        subject:
            "Accounting",

        studyYear:
            1,

        module:
            "ACCS111",

        academicYear:
            2024,

        name:
            "Accounting: All-in-One",

        bookTitle:
            "Accounting: All-in-One",

        author:
            "L. Cornelius & M. Weyers",

        edition:
            "7th Edition",

        isbn:
            "9781776174560",

        cover:
            "",

        googleQuery:
            "9781776174560",

        condition:
            "Catalogue",

        price:
            null,

        campus:
            "All NWU Campuses",

        sellerName:
            "",

        description:
            "NWU prescribed textbook catalogue entry."
    }

];


function findTextbookByModule(moduleCode) {

    return NWU_TEXTBOOKS.find(
        book =>
            book.module === moduleCode
    );
}


/*
=================================================
CAMPUS NORMALISATION
=================================================
*/

function normaliseCampus(campus) {

    if (!campus) {
        return "";
    }

    const value =
        campus
            .toLowerCase()
            .trim();


    if (
        value.includes("vanderbijlpark") ||
        value.includes("vaal")
    ) {
        return "Vanderbijlpark";
    }


    if (
        value.includes("potchefstroom") ||
        value === "potch"
    ) {
        return "Potchefstroom";
    }


    if (
        value.includes("mahikeng") ||
        value.includes("mafikeng")
    ) {
        return "Mahikeng";
    }


    return campus;
}
