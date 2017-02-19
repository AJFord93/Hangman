
window.onload = function () {

var answers = ["world-of-warcraft", "runescape", "legend-of-zelda", "halo", "league-of-legends",
"overwatch"];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

 var word ;              // Selected word
 var guess ;             // guess
 var guessed = [];      // Stored guessed
 var lives ;             // Lives
 var counter ;           // Count correct guessed
 var space;              // Number of spaces in word '-'

 var showLives = document.getElementById("mylives");

 var btn = document.getElementById("buttons");
 var letters = document.createElement("ul");



// Create Buttons

buttons = function(){

 btn = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      btn.appendChild(letters);
      letters.appendChild(list).className = 'let-btn';

}
}

//guessed ul


result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guessed.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }





 
   comments = function () {
    attempts.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      attempts.innerHTML = "Game Over";
    }
    for (var i = 0; i < guessed.length; i++) {
      if (counter + space === guessed.length) {
        attempts.innerHTML = "You Win!";
      }
    }
  }




check = function () {
    btn.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guessed[i].innerHTML = guess;
          counter += 1;
        } 
      }

 var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }

 play = function () {

 	

    word = answers[Math.floor(Math.random() * answers.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guessed = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();
 
 

}












    


