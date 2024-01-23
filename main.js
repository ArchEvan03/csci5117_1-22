document.addEventListener("DOMContentLoaded", function(){
    const logButton = document.getElementById("log");
    logButton.addEventListener("click", function() {
        console.log("The button was pressed!");
    }) 

});

async function addName() {
    const name = document.getElementById("name").value;
    let table = document.getElementById("guestTable");
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = name;
}