//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

//These are the variables for the information that the student entered for the search
var bookNumStud;
var bookTitleStud;
var bookAuthorStud;
var bookTypeStud0;
var bookTypeStud1;
var bookTypeStud2;
var bookPubDateStud;

function displayResults(){
//Add a book information
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"))

//Student Search Terms
    bookNumStud = JSON.parse(localStorage.getItem("studBookNumKey"));
    bookTitleStud = JSON.parse(localStorage.getItem("studTitleKey"));
    bookAuthorStud = JSON.parse(localStorage.getItem("studAuthorKey"));
    bookTypeStud0 = JSON.parse(localStorage.getItem("studTypeKey0"));
    bookTypeStud1 = JSON.parse(localStorage.getItem("studTypeKey1"));
    bookTypeStud2 = JSON.parse(localStorage.getItem("studTypeKey2"));
    bookPubDateStud = JSON.parse(localStorage.getItem("studPubDateKey"));

//New If statement for search terms
let results = ''

for (i = 0; i < bookNumLib.length; i++){
    if (bookNumLib[i] === bookNumStud || 
        bookTitleLib[i] === bookTitleStud || bookTitleLib[i].toLowerCase() === bookTitleStud||
        bookAuthorLib[i] === bookAuthorStud || bookAuthorLib[i].toLowerCase() === bookAuthorStud||
        bookPubDateLib[i] === bookPubDateStud || 
        bookTypeLib[i] === bookTypeStud0 || 
        bookTypeLib[i] === bookTypeStud1 || 
        bookTypeLib[i] === bookTypeStud2){
        results += `Book Number: ${bookNumLib[i]} \nTitle: ${bookTitleLib[i]} \nAuthor: ${bookAuthorLib[i]} \nBook Type: ${bookTypeLib[i]} \nPublication Date: ${bookPubDateLib[i]} \nAvailable?: ${bookAvailLib[i]}\n \n`
    }  
}

if (results != ' '){
    document.getElementById("display1").innerHTML = results;
} else (
    document.getElementById("display1").innerHTML = 'No Search Results were Found'
)


    // document.getElementById("display1").innerHTML = (`Book Number: ${bookNumLib[i]} \nTitle: ${bookTitleLib[i]} \nAuthor: ${bookAuthorLib[i]} \nBook Type: ${bookTypeLib[i]} \nPublication Date: ${bookPubDateLib[i]}`);

//If statement for search terms
    // if(bookNumLib === bookNumStud || bookTitleLib === bookTitleStud || bookAuthorLib === bookAuthorStud || bookPubDateLib === bookPubDateStud || bookTypeLib === bookTypeStud0 || bookTypeLib === bookTypeStud1 || bookTypeLib === bookTypeStud2){
    //     document.getElementById("display1").innerHTML = (`Book Number: ${bookNumLib} \nTitle: ${bookTitleLib} \nAuthor: ${bookAuthorLib} \nBook Type: ${bookTypeLib} \nPublication Date: ${bookPubDateLib}`);
    // }else if (bookNumLib !== bookNumStud && bookTitleLib !== bookTitleStud && bookAuthorLib !== bookAuthorStud && bookPubDateLib !== bookPubDateStud && (bookTypeLib !== bookTypeStud0 && bookTypeLib !== bookTypeStud1 && bookTypeLib !== bookTypeStud2)){
    //     document.getElementById("display2").innerHTML = (`No Search Terms Match`);
    // } 
}

