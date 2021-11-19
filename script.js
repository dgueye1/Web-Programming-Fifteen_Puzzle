let moves = 0;
let table; 
let rows; 
let columns;
let tileMoves;
let boardArr;
let checkers = 0;

function buttonStart(){
  alert("Please pick option 1, 2, 3, or 4");
  let staButton = document.getElementById("buttonNew");
  let picture1 = document.getElementById("pic1");
  picture1.addEventListener( "click", gameStart, false );

  let picture2 = document.getElementById("pic2");
  picture2.addEventListener( "click", gameStart, false );

  let picture3 = document.getElementById("pic3");
  picture3.addEventListener( "click", gameStart, false );

  let picture4 = document.getElementById("pic4");
  picture4.addEventListener( "click", gameStart, false );
  
  document.getElementById("winner").innerHTML=" ";
  staButton.addEventListener( "click", gameStart, false );
  tileMoves = document.getElementById("moves");
  table = document.getElementById("table");
  rows = 4;
  columns = 4;
  checkers = 0;
  gameStart();
}

function gameStart(){
  let numArr = new Array();
  let numUsed;
  let randd = 0;
  let co = 0;
  moves = 0;
  rows = 4;
  columns = 4;
  tileMoves.innerHTML = moves;
  boardArr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    boardArr[i] = new Array(columns);
  }

  numUsed = new Array( rows * columns );
  for (let i = 0; i < rows * columns; i++){
    numUsed[i] = 0;
  }
 
  for (let i = 0; i < rows * columns; i++){
    randd = Math.floor(Math.random()*rows * columns);
    if (numUsed[randd] == 0) {
      numUsed[randd] = 1;
      numArr.push(randd);
    }
    else{
      i--;
    }
  }
  
  co = 0;
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      boardArr[i][j] = numArr[co];
      
      co++;
    }
  }
  let picture2 = document.getElementById("pic2");
  picture2.addEventListener("click", function(){
    tableY();
    checkers = 1;
  });
  let picture3 = document.getElementById("pic3");
  picture3.addEventListener("click", function(){
    tableZ();
    checkers = 2;
    });
  let picture4 = document.getElementById("pic4");
  picture4.addEventListener("click", function(){
    tableA();
    checkers = 3;
    });
  document.getElementById("pic1").addEventListener("click", function(){
    tableS();
    checkers = 0;
    });
  document.getElementById("buttonNew").addEventListener("click", function(){
    tableS();
    checkers = 0;
  });

}

function tableS(){
  let result = "";

  for (let i = 0; i < rows; i++){
    result += "<tr>";
    for (let j = 0; j < columns; j++){
      if (boardArr[i][j] == 0){
	result += "<td class=\"blank\"> </td>";
      }
      if (boardArr[i][j] == 1){
	result += "<td class=\"tile1\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j] +  "</td>";
      }
     if (boardArr[i][j] == 2){
  result +="<td class=\"tile2\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>" ;
      }
     if (boardArr[i][j] == 3){
    result +="<td class=\"tile3\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 4){
    result +="<td class=\"tile4\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 5){
    result +="<td class=\"tile5\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 6){
    result +="<td class=\"tile6\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 7){
    result +="<td class=\"tile7\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 8){
    result +="<td class=\"tile8\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 9){
    result +="<td class=\"tile9\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 10){
    result +="<td class=\"tile10\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 11){
    result +="<td class=\"tile11\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 12){
    result +="<td class=\"tile12\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 13){
    result +="<td class=\"tile13\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 14){
    result +="<td class=\"tile14\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 15){
    result +="<td class=\"tile15\" onclick=\"movingTile(" + i + ", " + j + ")\">"  + boardArr[i][j]+  "</td>";
        }
    } 
    result += "</tr>";
  }
  
  table.innerHTML = result;
}

function movingTile( rRow, cColumn){
  if (movableCheck(rRow, cColumn, "up") ||
      movableCheck(rRow, cColumn, "down") ||
      movableCheck(rRow, cColumn, "left") ||
      movableCheck(rRow, cColumn, "right") ){
    increment();
  }
  else{
    alert("Nope! You can't move this");
  }
    
  if (winnerCheck()){
    alert("You Won! in: " + moves + " moves.");
    document.getElementById("winner").innerHTML="Winner Winner!";
    gameStart();
  }
}

function tableY(){ 
  let result = "";
  let bG = 'style = \"background-image: url(img1.png)\"';

  for (let i = 0; i < rows; i++){
    result += "<tr>";
    for (let j = 0; j < columns; j++){
      if (boardArr[i][j] == 0){
	result += "<td class=\"blank\"> </td>";
      }
      if (boardArr[i][j] == 1){
	result += "<td class=\"tile1\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j] +  "</td>";
      }
     if (boardArr[i][j] == 2){
  result +="<td class=\"tile2\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>" ;
      }
     if (boardArr[i][j] == 3){
    result +="<td class=\"tile3\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 4){
    result +="<td class=\"tile4\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 5){
    result +="<td class=\"tile5\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 6){
    result +="<td class=\"tile6\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 7){
    result +="<td class=\"tile7\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 8){
    result +="<td class=\"tile8\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 9){
    result +="<td class=\"tile9\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 10){
    result +="<td class=\"tile10\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 11){
    result +="<td class=\"tile11\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 12){
    result +="<td class=\"tile12\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 13){
    result +="<td class=\"tile13\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 14){
    result +="<td class=\"tile14\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 15){
    result +="<td class=\"tile15\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
        }
    } 
    result += "</tr>";
  }
  
  table.innerHTML = result;
}

function tableZ(){ 
  let result = "";
  let bG = 'style = \"background-image: url(img2.png)\"';

  for (let i = 0; i < rows; i++){
    result += "<tr>";
    for (let j = 0; j < columns; j++){
      if (boardArr[i][j] == 0){
	result += "<td class=\"blank\"> </td>";
      }
      if (boardArr[i][j] == 1){
	result += "<td class=\"tile1\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j] +  "</td>";
      }
     if (boardArr[i][j] == 2){
  result +="<td class=\"tile2\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>" ;
      }
     if (boardArr[i][j] == 3){
    result +="<td class=\"tile3\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 4){
    result +="<td class=\"tile4\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 5){
    result +="<td class=\"tile5\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 6){
    result +="<td class=\"tile6\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 7){
    result +="<td class=\"tile7\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 8){
    result +="<td class=\"tile8\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 9){
    result +="<td class=\"tile9\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 10){
    result +="<td class=\"tile10\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 11){
    result +="<td class=\"tile11\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 12){
    result +="<td class=\"tile12\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 13){
    result +="<td class=\"tile13\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 14){
    result +="<td class=\"tile14\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 15){
    result +="<td class=\"tile15\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
        }
    } 
    result += "</tr>";
  }
  
  table.innerHTML = result;
}

function tableA(){ 
  let result = "";
  let bG = 'style = \"background-image: url(img3.png)\"';

  for (let i = 0; i < rows; i++){
    result += "<tr>";
    for (let j = 0; j < columns; j++){
      if (boardArr[i][j] == 0){
	result += "<td class=\"blank\"> </td>";
      }
      if (boardArr[i][j] == 1){
	result += "<td class=\"tile1\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j] +  "</td>";
      }
     if (boardArr[i][j] == 2){
  result +="<td class=\"tile2\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>" ;
      }
     if (boardArr[i][j] == 3){
    result +="<td class=\"tile3\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 4){
    result +="<td class=\"tile4\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
     if (boardArr[i][j] == 5){
    result +="<td class=\"tile5\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 6){
    result +="<td class=\"tile6\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 7){
    result +="<td class=\"tile7\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 8){
    result +="<td class=\"tile8\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 9){
    result +="<td class=\"tile9\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 10){
    result +="<td class=\"tile10\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 11){
    result +="<td class=\"tile11\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 12){
    result +="<td class=\"tile12\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 13){
    result +="<td class=\"tile13\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 14){
    result +="<td class=\"tile14\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
    }
    if (boardArr[i][j] == 15){
    result +="<td class=\"tile15\" onclick=\"movingTile(" + i + ", " + j + ")\" "+ bG + ">"  + boardArr[i][j]+  "</td>";
        }
    } 
    result += "</tr>";
  }
  
  table.innerHTML = result;
}
function movableCheck(coordRow, coordCol, location){
  setRow = 0;
  setCol = 0;
  if (location == "up"){
    setRow = -1;
  }
  else if (location == "down"){
    setRow = 1;
  }
  else if (location == "left"){
    setCol = -1;
  }
  else if (location == "right"){
    setCol = 1;
  }  
  
  if (coordRow + setRow >= 0 && coordCol + setCol >= 0 &&
    coordRow + setRow < rows && coordCol + setCol < columns
  ){
    if ( boardArr[coordRow + setRow][coordCol + setCol] == 0){
      boardArr[coordRow + setRow][coordCol + setCol] = boardArr[coordRow][coordCol];
      boardArr[coordRow][coordCol] = 0;
      if(checkers == 1){
        tableY();
      }else if (checkers == 2){
        tableZ();
      }else if (checkers == 3){
        tableA();
      }else if (checkers == 0){
        tableS();
      }
      return true;
    }
  }
  return false; 
}

function winnerCheck(){
  var co = 1;
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (boardArr[i][j] != co){
	if ( !(co === rows * columns && boardArr[i][j] === 0 )){
	  return false;
	}
      }
      co++;
    }
  }
  
  return true;
}

function increment(){
  moves++;
  if (tileMoves){
    tileMoves.innerHTML = moves;
  }
}

window.addEventListener( "load", buttonStart, false ); 