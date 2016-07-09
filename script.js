//initialized player as X and scores for both player and cpu as 0
// var turn = "X";
// var score = {
//   'X': 0;
//   'O': 0

$(document).ready(function() {

//initializes value on grid that player first plays as 0
// var gridValue = 0;

//allow user to input X
$('td').on('click', function(){

  if ($(this).text() === "");{
    $(this).text('X');
    var test = checkWin();
    console.log(test==='');
    for(var i = 0; i < 9; i++){
      if (($('td')[i].innerHTML === "") && (test === "")){
        cpu();
        checkWin();
        break;
      }
    }
  }

    //if checkWin isn't "", print X/O winner, otherwise check if end of grid reached - i = 9 and declare stalemate
      if (test != "") {
       alert(test+" WINS!");
       //reloads current document
       location.reload();
     } else if(i===9 && test === "") {
       alert("STALEMATE!");
       location.reload();
     }
});

//checks to see if there is a winner vertically, diagonally, and horizontally
function checkWin() {
  var td = $('td');
  for(var i=0;i<9;i+=3)
    if(td[i].innerHTML===td[i+1].innerHTML && td[i+1].innerHTML===td[i+2].innerHTML) {
      return td[i].innerHTML;
    }
  for(var i=0;i<3;i++) {
    if(td[i].innerHTML===td[i+3].innerHTML && td[i].innerHTML===td[i+6].innerHTML) {
      return td[i].innerHTML;
    }
  }
  if(td[0].innerHTML===td[4].innerHTML && td[0].innerHTML===td[8].innerHTML) {
    return td[0].innerHTML;
  } else if(td[2].innerHTML===td[4].innerHTML && td[2].innerHTML===td[6].innerHTML) {
    return td[2].innerHTML;
  }
  return "";
}


//allows cpu to make a move - make this more intelligent
function cpu(){

var td = $('td');
//only "vertically intelligent" right now
//don't need to check for win before placing 0 because game will check after playing X (see code above)
  // for (var i = 0; i < 9; i++)
  //   //checks if X exists in first row and directly below respective column
  //   if ((td[i].innerHTML === 'X') && (td[i].innerHTML === td[i+3].innerHTML)){
  //     td[i+6] = "O";
  //     checkWin();
  //   }
  //   //address vertical win cases where X exists in last row and middle row
  //   else if ((td[6].innerHTML === "X") && (td[6].innerHTML === td[3].innerHTML)){
  //     td[1] = "O";
  //     checkWin();
  //   }
  //   else if ((td[7].innerHTML === "X") && (td[7].innerHTML === td[4].innerHTML)){
  //     td[2] = "O";
  //     checkWin();
  //   }
  //   else if ((td[8].innerHTML === "X") && (td[8].innerHTML === td[5].innerHTML)){
  //     td[3] = "O";
  //     checkWin();
  //   }

      var counter = 0;
      while (counter === 0) {
        var randNum = Math.floor(Math.random()*9);
        if(td[randNum].innerHTML === "") {
          td[randNum].innerHTML = "O";
          counter++;
        }
      }
      checkWin();
    //check if another X exists vertically up and down
  }
});
// function declareDraw(){
//   $('body').append("Looks like a Tie!");
// }
