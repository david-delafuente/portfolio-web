//LANGUAGE BUTTON

let lang_button = document.getElementById('language-toggle');
lang_button.addEventListener('click', selectlang);

function selectlang() {
    if (lang_button.checked == true) {
        location.href = 'ES/es-index.html';
    } else {
        location.href = '../index.html';
    }
}

//SHOW HIDDEN ELEMENTS

//Global variables
let varBody = document.body;
let vartitle = document.getElementById('title')
let varButtons = document.getElementById('buttons')
let varWindow = document.getElementById('w1');

function showElement1() {
    varBody.classList.add('image-blur');
    vartitle.style.display = 'none';
    varButtons.style.display = 'none';

    let styleWindow = varWindow.style.display;
    if (styleWindow === 'none') {
        varWindow.removeAttribute('style');
        varWindow.classList.add('animate__fadeIn');
    }
    varWindow.classList.replace('animate__fadeOut', 'animate__fadeIn');
}

//continue here!!!!!!!!!!!!
function back() {
    document.body.classList.remove('image-blur');
    document.getElementById('w1').style.display = 'none';
    document.getElementById('title').removeAttribute('style');
    document.getElementById('title').classList.add('animate__fadeIn');

    document.getElementById('buttons').removeAttribute('style');
    document.getElementById('buttons').classList.add('animate__fadeIn');

    document.getElementById('buttons').classList.replace('animate__fadeOut', 'animate__fadeIn');
    document.getElementById('title').classList.replace('animate__fadeOut', 'animate__fadeIn');

    document.getElementById('back-button').classList.replace('animate__fadeIn', 'animate__fadeOut');
    document.getElementById('w1').classList.replace('animate__fadeIn', 'animate__fadeOut');
}