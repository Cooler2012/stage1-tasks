const fullScreen = document.querySelector('.fullscreen');

const getFullScreen = function () {
    if(document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else if(document.fullscreenEnabled) {
        document.exitFullscreen();
    }
};

fullScreen.addEventListener('click', getFullScreen);

const blur = document.getElementById("blur");
const outputBlur = document.getElementById("blurVal");

const invert = document.getElementById("invert");
const outputInvert = document.getElementById("invertVal");

const sepia = document.getElementById("sepia");
const outputSepia = document.getElementById("sepiaVal");

const saturate = document.getElementById("saturate");
const outputSaturate = document.getElementById("saturateVal");

const hueRotate = document.getElementById("hueRotate");
const outputHueRotate = document.getElementById("hueRotateVal");

outputBlur.innerHTML = blur.value;
outputInvert.innerHTML = invert.value;
outputSepia.innerHTML = sepia.value;
outputSaturate.innerHTML = saturate.value;
outputHueRotate.innerHTML = hueRotate.value;

blur.oninput = function() {
   outputBlur.innerHTML = this.value;
};
invert.oninput = function() {
    outputInvert.innerHTML = this.value;
};
sepia.oninput = function() {
    outputSepia.innerHTML = this.value;
};
saturate.oninput = function() {
    outputSaturate.innerHTML = this.value;
};
hueRotate.oninput = function() {
    outputHueRotate.innerHTML = this.value;
};




