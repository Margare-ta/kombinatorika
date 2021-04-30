let gomb = document.getElementById("gomb");

gomb.addEventListener("click", feltunes);

function feltunes() {
  
  let body = document.getElementsByTagName("body")[0];
  let table = document.createElement("table");
  let tthead = document.createElement("thead");
  let ttBody = document.createElement("tbody");

  for (let i = 0; i < 20; i++) {
   
    let row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      
      let cell = document.createElement("td");



      let cellText = document.createTextNode(i+"!");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }


    ttBody.appendChild(row);
  }

    
  table.appendChild(ttBody);
  table.appendChild(tthead);
  tthead.appendChild(ttbody);
  body.appendChild(table);
  table.setAttribute("border", "2");
}
