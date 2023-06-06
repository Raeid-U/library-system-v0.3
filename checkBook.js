// These are the variables for the information of added books
var bookNumLib = [];        // Array to store book numbers
var bookTitleLib = [];      // Array to store book titles
var bookAuthorLib = [];     // Array to store book authors
var bookTypeLib = [];       // Array to store book types
var bookPubDateLib = [];    // Array to store publication dates
var bookAvailLib = [];      // Array to store book availability

var bookIDForm;             // Variable to store the book ID from the form

function checkoutBook(formID) {
    // Retrieve the book information from local storage and assign to the corresponding variables
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

    bookIDForm = JSON.stringify(formID.numCBook.value);   // Store the book ID from the form as a string
    var errCount = 0;   // Variable to count errors encountered

    for (i = 0; i < bookNumLib.length; i++) {
        if (bookNumLib[i] === JSON.parse(bookIDForm)) {
            if (bookAvailLib[i] === "Yes") {
                bookAvailLib[i] = "No";   // Mark the book as unavailable
                localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib));   // Update the book availability in local storage
                alert(`The Book "${bookTitleLib[i]}" has been checked out.`);   // Display a success message
            } else {
                alert(`The Book "#${bookNumLib[i]} | ${bookTitleLib[i]}" is not available.`);   // Display a message indicating the book is not available
            }
        } else {
            errCount++;   // Increment the error count if the book ID does not match
        }

        if (errCount === bookTitleLib.length) {
            alert("Invalid Input, Please Try Again");   // Display an error message if all book IDs have been checked and none matched
            break;
        }
    }
}
