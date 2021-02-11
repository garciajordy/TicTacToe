  // to add the reset functions to the reset button
  let buti = document.querySelector("#but")
  buti.addEventListener("dblclick", reset1)
  let sc1 = 0
  let sc2 = 0
  let sq1 = 0
  let sq2 = 0
  let sq3 = 0
  let sq4 = 0 
  let sq5 = 0
  let sq6 = 0
  let sq7 = 0
  let sq8 = 0
  let sq9 = 0
  
 //function to check when you won the game and to increment the score of the winning player
             function score(){
      if ((sq1+sq2+sq3==3)||(sq4+sq5+sq6==3)||(sq7+sq8+sq9==3)||(sq1+sq4+sq7==3)||(sq2+sq5+sq8==3)||(sq3+sq6+sq9==3)||(sq1+sq5+sq9==3)||(sq3+sq5+sq7==3))
     { sc2++;
  document.getElementById("score2").innerHTML = "score: "+sc2;
  sq1 = 0
      sq2 = 0
      sq3 = 0
      sq4 = 0
      sq5 = 0
      sq6 = 0
      sq7 = 0
      sq8 = 0
      sq9 = 0
}
      else if((sq1+sq2+sq3==30)||(sq4+sq5+sq6==30)||(sq7+sq8+sq9==30)||(sq1+sq4+sq7==30)||(sq2+sq5+sq8==30)||(sq3+sq6+sq9==30)||(sq1+sq5+sq9==30)||(sq3+sq5+sq7==30))
      {sc1++;
      document.getElementById("score1").innerHTML = "score: "+sc1;
      sq1 = 0
      sq2 = 0
      sq3 = 0
      sq4 = 0
      sq5 = 0
      sq6 = 0
      sq7 = 0
      sq8 = 0
      sq9 = 0
      }
  }
  // functions to give numbers to each square depending which player's turn it is 
  function q1(){
        if((sum%2)==0){
          sq1 = 1
      }
      else { sq1 = 10}
  }
  function q2(){
      if((sum%2)==0){
          sq2 = 1
      }
      else { sq2 = 10}
  }
  function q3(){
      if((sum%2)==0){
          sq3 = 1
      }
      else { sq3 = 10}
  }
  function q4(){
      if((sum%2)==0){
          sq4 = 1
      }
      else { sq4 = 10}
  }
  function q5(){
      if((sum%2)==0){
          sq5 = 1
      }
      else { sq5 = 10}
  }
  function q6(){
      if((sum%2)==0){
          sq6 = 1
      }
      else { sq6 = 10}
  }
  function q7(){
      if((sum%2)==0){
          sq7 = 1
      }
      else { sq7 = 10}
  }
  function q8(){
      if((sum%2)==0){
          sq8 = 1
      }
      else { sq8 = 10}
  }
  function q9(){
      if((sum%2)==0){
          sq9 = 1
      }
      else { sq9 = 10}
  }
  // function to make the input name that will appear on the scoreboard with a capital letter
  // and put the max characters to 10 using substring
  function name1(){
      
  player1 = document.getElementById("player1").value
  play = player1[0].toUpperCase()
  i = player1.length
  er1 = player1.substring(1,10).toLowerCase()
  player1 = play + er1
  document.getElementById("play1").innerHTML = player1 + ":" 
  }
  function name2(){
      
  player2 = document.getElementById("player2").value
  pla = player2[0].toUpperCase()
  x = player2.length
  yer1 = player2.substring(1,10).toLowerCase()
  player2 = pla + yer1
  document.getElementById("play2").innerHTML = player2 + ":"

}  
   
  let sum = 1
  // faster way to put an event listener to every square
  all = document.querySelectorAll(".square")
    all.forEach(element => {element.addEventListener("click", game)});
    // function to change the square to an 'X' or 'O' depending on which turn it is
    // also checking whether the square is already filled in or not
  function game(){  
      
      if (this.classList.contains("o")){alert(player2 + " already filled this in.")}
      else if (this.classList.contains("x")){alert(player1 + " already filled this in.")}
      else if ((sum % 2) === 0){
          this.classList.add("o")
          sum++
      }
      else {this.classList.add("x") 
      sum++}
      score()
  }
  // Reset button after you win a game
  function reset(){
      all.forEach(element => {element.classList.remove("x")})
      all.forEach(element => {element.classList.remove("o")})
      sum = 1
     
      sq1 = 0
      sq2 = 0
      sq3 = 0
      sq4 = 0
      sq5 = 0
      sq6 = 0
      sq7 = 0
      sq8 = 0
      sq9 = 0
  }
  // reset button to reset the score as well
  function reset1(){
      all.forEach(element => {element.classList.remove("x")})
      all.forEach(element => {element.classList.remove("o")})
      sum = 1
     sc1 = 0
     sc2 = 0
      sq1 = 0
      sq2 = 0
      sq3 = 0
      sq4 = 0
      sq5 = 0
      sq6 = 0
      sq7 = 0
      sq8 = 0
      sq9 = 0
      document.getElementById("score1").innerHTML = "score: "+sc1
      document.getElementById("score2").innerHTML = "score: "+sc2
  }