//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

var bookIDForm;

function checkoutBook(formID){

    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

bookIDForm = JSON.stringify(formID.numCBook.value)
var errCount = 0

 for(i = 0; i < bookNumLib.length; i++){
    if(bookNumLib[i] === JSON.parse(bookIDForm)){
        if (bookAvailLib[i] === "Yes"){
            bookAvailLib[i] = "No"
            localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib))
            alert(`The Book " ${bookTitleLib[i]} " has been checked out.`)
        } else {
            alert(`The Book " #${bookNumLib[i]} | ${bookTitleLib[i]} " is not available.`)
        }
    } else {
        errCount++
    }

    if (errCount === bookTitleLib.length) {
        alert("Invalid Input, Please Try Again")
        break;
    }
 }
}