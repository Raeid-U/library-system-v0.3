//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

var bookIDForm;



function returnBook(formID){
//retireve existing book information
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

//get the book id from the form
bookIDForm = JSON.stringify(formID.numRBook.value)
var errCount = 0;
 for(i = 0; i < bookNumLib.length; i++){
    //check and see if the book form matches the books in the system
    if(bookNumLib[i] === JSON.parse(bookIDForm)){
        //check and see if that book is out
        if (bookAvailLib[i] === "No"){
            //returns the book and updates it status in the sls
            bookAvailLib[i] = "Yes"
            localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib))
            alert(`Thank you! Book " ${bookTitleLib[i]} " has been returned.`)  
            break;
        } else {
            //if the book already has a "Yes" status, it was never checked out and the code displays this
            alert(`The Book " #${bookNumLib[i]} | ${bookTitleLib[i]} " is already returned.`)
        }
    } else {
        //errCount incriments everytime it fails to return a book
        errCount++;
    }

    if (errCount === bookTitleLib.length) {
        /*if the id inputted does not match eany of the books, the errcount will equal the amount 
        of books in the system. This then alerts that the inputted did not match any of the books */
        alert("Invalid Input, Please Try Again");
        break;
    }
 }
}
