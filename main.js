// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

var audio =  new Audio('');

var i;

keys.forEach(function(key){
  notes.push(document.getElementById(key));
})
console.log('notes is:', notes);



// Write named functions that change the color of the keys below

function keyPlay(){
  this.style.backgroundColor = 'gray';
  let note = this.dataset.key;
  let audioel = document.getElementById(note);
  let audiosrc = audioel.getAttribute('src');
  audio.src = audiosrc;
  audio.play();
}

function keyReturn(){
  this.style.backgroundColor = '';
}

// Write a named function with event handler properties


// Write a loop that runs the array elements through the function
for (i=0; i < notes.length; i++) {
  notes[i].addEventListener('mousedown', keyPlay);
  notes[i].addEventListener('mouseup', keyReturn);
}

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'C';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'C';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'D';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'F';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('column-optional').style.display = 'inline-block';
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'C';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'C';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'hC';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'A';
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('letter-note-five').innerHTML = 'F';
  document.getElementById('word-six').innerHTML = 'FRI';
  document.getElementById('letter-note-six').innerHTML = 'E';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('column-optional').style.display = 'none';
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'As';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'As';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'F';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'F';
}


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'C';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'C';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'D';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'F';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'E';
}