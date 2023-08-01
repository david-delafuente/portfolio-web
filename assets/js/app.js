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

//Link to projects

function linkToProject() {
    back();
    showElement2();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//SHOW HIDDEN ELEMENTS

//Global variables
let varBody = document.body;
let vartitle = document.getElementById('title')
let varButtons = document.getElementById('buttons')
let varWindow1 = document.getElementById('w1');
let varWindow2 = document.getElementById('w2');


function showElement1() {
    varBody.classList.add('image-blur');
    vartitle.style.display = 'none';
    varButtons.style.display = 'none';

    let styleWindow = varWindow1.style.display;
    if (styleWindow === 'none') {
        varWindow1.removeAttribute('style');
        varWindow1.classList.add('animate__fadeIn');
    }
    varWindow1.classList.replace('animate__fadeOut', 'animate__fadeIn');
}
function showElement2() {
    varBody.classList.add('image-blur');
    vartitle.style.display = 'none';
    varButtons.style.display = 'none';

    let styleWindow = varWindow2.style.display;
    if (styleWindow === 'none') {
        varWindow2.removeAttribute('style');
        varWindow2.classList.add('animate__fadeIn');
    }
    varWindow2.classList.replace('animate__fadeOut', 'animate__fadeIn');
}

//continue here!!!!!!!!!!!!
function back() {
    varBody.classList.remove('image-blur');
    varWindow1.style.display = 'none';
    varWindow2.style.display = 'none';

    vartitle.removeAttribute('style');
    vartitle.classList.add('animate__fadeIn');

    varButtons.removeAttribute('style');
    varButtons.classList.add('animate__fadeIn');

}