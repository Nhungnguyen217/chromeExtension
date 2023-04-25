// Create two variables:
// myLeads -> should be assigned to an empty array
let myLeads =[];

// inputEl -> should be assigned to the text input field
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
     // Push the value from the inputEl into the myLeads array 
     let inputValue = document.getElementById("input-el").value;
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputValue)
    console.log(myLeads)
})
