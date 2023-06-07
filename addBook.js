// Arrays to store book information
var libTechBookNum = [];    // Array to store book numbers
var libTechTitle = [];      // Array to store book titles
var libTechAuthor = [];     // Array to store book authors
var libTechType = [];       // Array to store book types
var libTechPubDate = [];    // Array to store publication dates
var libTechAvail = [];      // Array to store book availability

// Function to refresh the book information from local storage
function refreshFunction() {

  libTechBookNum = [];    // Array to store book numbers
  libTechTitle = [];      // Array to store book titles
  libTechAuthor = [];     // Array to store book authors
  libTechType = [];       // Array to store book types
  libTechPubDate = [];    // Array to store publication dates
  libTechAvail = [];      // Array to store book availability

  // Check if the local storage has the book information stored
  if (JSON.parse(localStorage.getItem("libTechBookNumKey")) != null) {
    // Retrieve book information from local storage and assign to the corresponding arrays
    libTechBookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    libTechTitle = JSON.parse(localStorage.getItem("libTechTitleKey"));
    libTechAuthor = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    libTechType = JSON.parse(localStorage.getItem("libTechTypeKey"));
    libTechPubDate = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    libTechAvail = JSON.parse(localStorage.getItem("libTechAvailKey"));
  }
}

// Function to add a new book
function addNewBook(addBookForm) {
  refreshFunction(); // Refresh the book information from local storage

  // Push the new book information into the respective arrays
  libTechBookNum.push(addBookForm.numBookL.value);
  libTechTitle.push(addBookForm.tilBookL.value);
  libTechAuthor.push(addBookForm.autBookL.value);
  libTechType.push(addBookForm.typBookL.value);
  libTechPubDate.push(addBookForm.pubBookL.value);
  libTechAvail.push("Yes");

  // Store the updated book information in local storage
  localStorage.setItem("libTechBookNumKey", JSON.stringify(libTechBookNum));
  localStorage.setItem("libTechTitleKey", JSON.stringify(libTechTitle));
  localStorage.setItem("libTechAuthorKey", JSON.stringify(libTechAuthor));
  localStorage.setItem("libTechTypeKey", JSON.stringify(libTechType));
  localStorage.setItem("libTechPubDateKey", JSON.stringify(libTechPubDate));
  localStorage.setItem("libTechAvailKey", JSON.stringify(libTechAvail));

  // Display a confirmation message with the added book title
  alert(`The Book "${addBookForm.tilBookL.value}" has been added`);
  window.location.href = "addBook.html"
}
