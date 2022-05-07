// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

let ckey = document.getElementById('c-key');
let cskey = document.getElementById('c-sharp-key');
let dkey = document.getElementById('d-key');
let dskey = document.getElementById('d-sharp-key');
let ekey = document.getElementById('e-key');
let fkey = document.getElementById('f-key');
let fskey = document.getElementById('f-sharp-key');
let gkey = document.getElementById('g-key');
let gskey = document.getElementById('g-sharp-key');
let akey = document.getElementById('a-key');
let askey = document.getElementById('a-sharp-key');
let bkey = document.getElementById('b-key');
let hckey = document.getElementById('high-c-key');

const pianoKeys = [ckey, cskey, dkey, dskey, ekey, fkey, fskey, gkey, gskey, akey, askey, bkey, hckey];

ckey.addEventListener('click', keyPlay);
// dkey.onmouseover = 
dkey.onclick = dkey.style.backgroundColor = '#bacbac';
// Write named functions that change the color of the keys below
const keyPlay = function() {
  ckey.style.backgroundColor = '#1fdec5';
}

const keyReturn = function(key) {
  key.style.backgroundColor = '';
}

// Write a named function with event handler properties
let eventAssignment = function(note) {
  note.onmousedown = function() {
    keyPlay(note);
  }
  note.onmouseup = function() {
    keyReturn(note);
  }
}

// Write a loop that runs the array elements through the function
pianoKeys.foreach(function(key){
  eventAssignment(key);
});

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


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}