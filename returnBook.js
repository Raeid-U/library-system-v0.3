//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

var bookIDForm;



function returnBook(formID){

    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

bookIDForm = JSON.stringify(formID.numRBook.value)
var errCount = 0;
 for(i = 0; i < bookNumLib.length; i++){
    if(bookNumLib[i] === JSON.parse(bookIDForm)){
        if (bookAvailLib[i] === "No"){
            bookAvailLib[i] = "Yes"
            localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib))
            alert(`Thank you! Book " ${bookTitleLib[i]} " has been returned.`)  
            break;
        } else {
            alert(`The Book " #${bookNumLib[i]} | ${bookTitleLib[i]} " is already returned.`)
        }
    } else {
        errCount++;
    }

    if (errCount === bookTitleLib.length) {
        alert("Invalid Input, Please Try Again");
        break;
    }
 }
}