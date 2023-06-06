//function to load the student id in the system
function loadID(){
    var studID = localStorage.getItem("sID")
    document.getElementById("sID").innerHTML = studID
}