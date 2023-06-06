// Array storing valid usernames and passwords
var validCredentials = [
    { username: "Parth", password: "123" },
    { username: "Raeid", password: "456" },
    { username: "Joel", password: "789" }
  ];
  
  // Function to check if the entered credentials are valid
  function checkCredentials(username, password) {
    for (i = 0; i < validCredentials.length; i++) {
      var storedUsername = validCredentials[i].username;
      var storedPassword = validCredentials[i].password;
  
      if (username === storedUsername && password === storedPassword) {
        return true; // Valid credentials found
      }
    }
    return false; // No valid credentials found
  }
  
  // Event listener for form submission
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      // Get the entered username and password values
      var enteredUsername = document.getElementById("UsernameL").value;
      var enteredPassword = document.getElementById("PasswordL").value;
      var isValid = checkCredentials(enteredUsername, enteredPassword);
  
      if (isValid) {
        localStorage.setItem("lID", enteredUsername)
        window.location.href = "tHome.html";
      } else {
        alert("Invalid Login. Please try again.");
      }
    });
  });