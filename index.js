let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function () {
  console.log(tabs[0].url);
});


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
     <li>
      <a target='_blank' href = '${leads[i]}'>
      ${leads[i]}
      </a>
     </li>    `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = []; //while(myLeads.length>0)  myLeads.pop()
  render(myLeads);
});
