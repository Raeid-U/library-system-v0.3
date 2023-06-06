//function to load the student id in the system
function loadID(){
    var libID = localStorage.getItem("lID")
    document.getElementById("lID").innerHTML = libID
}