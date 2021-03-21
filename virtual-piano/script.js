const piano = document.querySelector(".piano");
const pianoКeys = document.querySelectorAll('.piano-key');
const fullScreen = document.querySelector('.fullscreen');
const letters = document.querySelector('.btn-letters');
const notes = document.querySelector('.btn-notes');
const value = window.getComputedStyle(document.querySelector('.piano-key'),':after')//.getPropertyValue('content');
console.log(value)

const playByKey = function (event) {
        const audio = document.querySelector(`audio[data-letter=${codeKeys[event.keyCode]}]`);
        const elem = document.querySelector(`div[data-letter=${codeKeys[event.keyCode]}]`);
        audio.currentTime = 0;
        audio.play();
        elem.classList.add('active');
};

const changeBackground = function (event) {
    const elem = document.querySelector(`div[data-letter=${codeKeys[event.keyCode]}]`);
    elem.classList.remove('active')
};

const playAudio = function (event) {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const audio = document.querySelector(`audio[data-note="${note}"]`);
        audio.currentTime = 0;
        audio.play();
    };
};

const codeKeys = {
    68 : 'D',
    70 : 'F',
    71 : 'G',
    72 : 'H',
    74 : 'J',
    75 : 'K',
    76 : 'L',
    82 : 'R',
    84 : 'T',
    85 : 'U',
    73 : 'I',
    79 : 'O'
};

const addActiveClass = function (event) {
    event.target.classList.add('active');
    playAudio(event);
};

const removeActiveClass = function (event) {
    event.target.classList.remove('active');
};

const startCorrespondOver = function (event) {
    if(event.target.classList.contains('piano-key')) {
        addActiveClass(event);
        playAudio(event);
    };
    
    pianoКeys.forEach((elem) => {
        elem.addEventListener('mouseover', addActiveClass);
        elem.addEventListener('mouseout', removeActiveClass);
      });
};

const stopCorrespondOver = function () {
    pianoКeys.forEach((elem) => {
        elem.classList.remove("active");
        elem.removeEventListener("mouseover", addActiveClass);
        elem.removeEventListener("mouseout", removeActiveClass);
      });
    
};

const getFullScreen = function () {
    if(document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else if(document.fullscreenEnabled) {
        document.exitFullscreen();
    }
};

const activeLetters = function() {
    if (letters.classList.contains('btn-active') === false) {
        letters.classList.add('btn-active');
        pianoКeys.forEach((elem) => {
            elem.classList.add("piano-key-letter");
          });
        notes.classList.remove('btn-active');
    };
};

const activeNotes = function() {
    if (notes.classList.contains('btn-active') === false) {
        notes.classList.add('btn-active');
        pianoКeys.forEach((elem) => {
            elem.classList.remove("piano-key-letter");
          });
        letters.classList.remove('btn-active');
    };
};

window.addEventListener('keydown', playByKey);
window.addEventListener('keyup', changeBackground);
piano.addEventListener('mousedown', startCorrespondOver);
piano.addEventListener('mouseup', stopCorrespondOver);
fullScreen.addEventListener('click', getFullScreen);
letters.addEventListener('click', activeLetters);
notes.addEventListener('click', activeNotes);
