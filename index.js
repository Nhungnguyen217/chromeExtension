//edge://extensions/

let myLeads = `["www.google.com"]`;
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
console.log(typeof myLeads)
// 2. Push a new value to the array
myLeads.push("value2")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems +="<li> <a target='_blank' href = '" + myLeads[i] + "' >" + myLeads[i] + "</a> </li>";
    listItems += `
     <li>
      <a target='_blank' href = '${myLeads[i]}'>
      ${myLeads[i]}
      </a>
     </li>    `;
     localStorage.setItem("myLeads",JSON.stringify(myLeads[i]))
  }
  ulEl.innerHTML = listItems;
}


