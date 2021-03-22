const COLLECTION =  document.querySelectorAll(".piano-key"); 
const WHITE_KEYS = ['d', 'f', 'g', 'h', 'j', 'k', 'l'];
const BLACK_KEYS = ['r', 't', ' ', 'u', 'i', 'o'];

const whiteKeys = document.querySelectorAll('.key-w');
const blackKeys = document.querySelectorAll('.sharp');

COLLECTION.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});


document.addEventListener('keydown', e =>{
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});



function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    console.log('noteAudio'+noteAudio);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('piano-key-active');
    key.classList.add('piano-key-active-pseudo');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('piano-key-active');
        key.classList.remove('piano-key-active-pseudo');
        
    })
};


// ---------------------------------------------------------------


let mouseDown = false;

piano.addEventListener('mousedown', (key) => {
    mouseDown = true;
    if (key.target.classList.contains('piano-key')) {
        audio = new Audio(`assets/audio/${e.target.dataset.note}.mp3`);
        audio.play();
        event.target.classList.add('piano-key-active');
        event.target.classList.add('piano-key-active-pseudo');
    }

});

piano.addEventListener('mouseout', (event) => {
    if (mouseDown) {
        event.target.classList.remove('piano-key-active');
        event.target.classList.remove('piano-key-active-pseudo');
    }

})


piano.addEventListener('mouseover', (e) => {
    if (mouseDown) {
        e.target.classList.add('piano-key-active');
        e.target.classList.add('piano-key-active-pseudo');
        audio = new Audio(`assets/audio/${e.target.dataset.note}.mp3`);
        audio.play();
    }

})


piano.addEventListener('mouseup', (e3) => {
    e3.target.classList.remove('piano-key-active');
    e3.target.classList.remove('piano-key-active-pseudo');
    mouseDown = false;
})
window.addEventListener('mouseup', () => {
    mouseDown = false;
})








// ---------------------fullscreen
document.querySelector(".fullscreen").addEventListener('click', toggleScreen);

function toggleScreen () {
    if (!document.fullscreenElement) { 
        // simplest :
    // if (document.fullscreenElement=== null) {
        document.documentElement.requestFullscreen();
    } else {
        // console.log(111);
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}
// ---------------------/fullscreen


// ---------------------change
 

// ---------.шукав як вивантажити букви
// let elem = document.getElementById('elem');
// console.log(elem.dataset.price); 

// let keyLetters = document.getElementById('piano-key');
// console.log(keyLetters.dataset.letter); 
// ---------.шукав як вивантажити букви

let keyLetters = document.querySelectorAll ('.piano-key');
console.log( "keyLetters "+ keyLetters);

let letters = [];
for (let i =0; i < keyLetters.length; i++ ){
    letters.push(keyLetters[i].dataset.letter); 
    console.log(letters[i]);
}
console.log(letters);

let musicalNotes = [];
for (let i =0; i < keyLetters.length; i++ ){
    // musicalNotes.push(keyLetters[i].textContent); 
    musicalNotes.push(keyLetters[i].dataset.note);
    console.log(musicalNotes[i]);
}
console.log(musicalNotes);




let btnLetters = document.querySelector('.btn-letters');
console.log(btnLetters);
let btnNotes = document.querySelector('.btn-notes');


btnLetters.addEventListener('click', () => {
    console.log("lasalsalskla")
    btnLetters.classList.add('btn-active');
    btnNotes.classList.remove('btn-active');
    for (let i =0; i < keyLetters.length; i++ ){
        keyLetters[i].classList.add('piano-keyLetter'); 
        console.log(keyLetters[i]);
    }
});

btnNotes.addEventListener('click', () => {
    console.log("btnNotes")
    btnLetters.classList.remove('btn-active');
    btnNotes.classList.add('btn-active');
    for (let i =0; i < keyLetters.length; i++ ){
        keyLetters[i].classList.remove('piano-keyLetter');
        
        

        console.log(keyLetters[i]);
    }
});

    // ---------------------/change