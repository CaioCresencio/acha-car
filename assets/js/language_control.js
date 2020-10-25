const home_p1_pt = `
    Pensando em tornar o sistema de caronas das universidades brasileiras mais inclusivo e seguro, buscamos desenvolver um aplicativo vinculado que acabe com as filas de espera e ajude encontrar caronas facilmente.
`;

const home_p1_en = `
    Seeking to make the ride system of brazilian universities more inclusive and safe, we will develop a app that eliminates waiting lines and helps find rides easily.
`;


function getTextID(text, id) {
    document.getElementById(`${id}`).innerHTML = text;
}

function getTextClass(text, class_name) {
    document.getElementsByClassName(class_name)[0].innerHTML = text;
}


window.addEventListener("load", function (event) {

    document.getElementById('btn_lang_en').addEventListener('click', function () {
        getTextID(home_p1_en,'home_p1');
        
    });
    document.getElementById('btn_lang_pt').addEventListener('click', function () {
        getTextID(home_p1_pt,'home_p1');

    });
    
    document.getElementById('btn_lang_en').click();
});