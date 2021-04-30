let gomb = document.getElementById("gomb");



gomb.addEventListener("click", feltunes);

function feltunes() {
  
  let body = document.getElementsByTagName("body")[0];
  let table = document.createElement("table");
  let ttBody = document.createElement("tbody");

  for (let i = 0; i < 20; i++) {
   
    let col = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      
      let cell = document.createElement("td");
      let cellText = document.createTextNode(i+"!");
      cell.appendChild(cellText);
      col.appendChild(cell);
      cell.style.width = "150px";
    col.style.margin = "20px";
    }

    ttBody.appendChild(col);
  }

  

    
  table.appendChild(ttBody);
  body.appendChild(table);
  table.setAttribute("border", "4");
}



