//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

var bookIDForm; // This variable is for the book ID from the form

//These variables 'listen for changes in the code'
var listener1;
var listener2;

function deleteBook(formNum){
//Getting the saved book data
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

//Get the inputted id from the form 
bookNumForm = JSON.stringify(formNum.numDBook.value)

//listener 1 activates to see the state of the variables before the deletion
listener1 = bookTitleLib.length

 for(i = 0; i < bookNumLib.length; i++){
    //checks to see if the ID matches with any of the books in the system
    if(bookNumLib[i] === JSON.parse(bookNumForm)){
    alert(`Book " ${bookTitleLib[i]} " has been deleted.`)  
    //Removes the book's information
        bookNumLib.splice(i, 1);
        bookTitleLib.splice(i, 1);
        bookAuthorLib.splice(i, 1);
        bookTypeLib.splice(i, 1);
        bookPubDateLib.splice(i, 1);
        bookAvailLib.splice(i, 1);
        //Updates local storage
            localStorage.setItem("libTechBookNumKey", JSON.stringify(bookNumLib));
            localStorage.setItem("libTechTitleKey", JSON.stringify(bookTitleLib));
            localStorage.setItem("libTechAuthorKey", JSON.stringify(bookAuthorLib));
            localStorage.setItem("libTechTypeKey", JSON.stringify(bookTypeLib));
            localStorage.setItem("libTechPubDateKey", JSON.stringify(bookPubDateLib));
            localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib));
    } 
 }
 //listener 2 checks to see the state of the variables
 listener2 = bookTitleLib.length

 //Checks to see if the variables were updated, if not, alerts the user that the input was invalid
 if (listener1 === listener2){
    alert("Invalid Input, Please try again")
 }
}