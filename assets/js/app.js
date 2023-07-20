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

function showElement1() {
    document.body.classList.add('image-blur');


    document.getElementById('title').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';


    let varButton = document.getElementById('button_container');
    let styleButton = varButton.style.display;

    if (styleButton === 'none') {
        document.getElementById('button_container').removeAttribute('style');
        document.getElementById('button_container').classList.add('animate__fadeIn');
    }
    document.getElementById('button_container').classList.replace('animate__fadeOut', 'animate__fadeIn');


    let varWindow = document.getElementById('w1');
    let styleWindow = varWindow.style.display;

    if (styleWindow === 'none') {
        document.getElementById('w1').removeAttribute('style');
        document.getElementById('w1').classList.add('animate__fadeIn');
    }
    document.getElementById('w1').classList.replace('animate__fadeOut', 'animate__fadeIn');

}

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