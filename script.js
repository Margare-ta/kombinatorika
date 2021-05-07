let gomb = document.getElementById("gomb");



gomb.addEventListener("click", feltunes);

function feltunes() {
  
  let body = document.getElementsByTagName("body")[0];
  let table = document.createElement("table");
  let ttBody = document.createElement("tbody");

  for (let i = 0; i < 20; i++) {
   
    let col = document.createElement("tr");

    for (let j = 0; j < 1; j++) {

      function fact(x) { 
         if (x === 0){

             return 1;
          }
            return x * fact(x-1);
          }

    console.log(fact(i));

      let it = ('0; it < 20; it++');
      
      let cell = document.createElement("td");
      let b = document.createElement("td");

      let cellText = document.createTextNode(i+"!");
      let btext = document.createTextNode(fact);

      cell.appendChild(cellText);
      col.appendChild(cell);

      b.appendChild(btext);
      col.appendChild(b);

      cell.style.width = "150px";
      b.style.width = "150px";
      col.style.margin = "20px";
    }

    ttBody.appendChild(col);
  }

  

    
  table.appendChild(ttBody);
  body.appendChild(table);
  table.setAttribute("border", "4");
}



