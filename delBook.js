//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

var bookIDForm;

var listener1;
var listener2;

function deleteBook(formNum){

    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

bookNumForm = JSON.stringify(formNum.numDBook.value)
listener1 = bookTitleLib.length

 for(i = 0; i < bookNumLib.length; i++){
    if(bookNumLib[i] === JSON.parse(bookNumForm)){
    alert(`Book " ${bookTitleLib[i]} " has been deleted.`)  

        bookNumLib.splice(i, 1);
        bookTitleLib.splice(i, 1);
        bookAuthorLib.splice(i, 1);
        bookTypeLib.splice(i, 1);
        bookPubDateLib.splice(i, 1);
        bookAvailLib.splice(i, 1);

            localStorage.setItem("libTechBookNumKey", JSON.stringify(bookNumLib));
            localStorage.setItem("libTechTitleKey", JSON.stringify(bookTitleLib));
            localStorage.setItem("libTechAuthorKey", JSON.stringify(bookAuthorLib));
            localStorage.setItem("libTechTypeKey", JSON.stringify(bookTypeLib));
            localStorage.setItem("libTechPubDateKey", JSON.stringify(bookPubDateLib));
            localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib));
    } 
 }
 listener2 = bookTitleLib.length

 if (listener1 === listener2){
    alert("Invalid Input, Please try again")
 }
}