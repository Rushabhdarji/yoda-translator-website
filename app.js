var outputTxt = document.querySelector('#output-txt');
var btnTranslate = document.querySelector('.btn-translate');
var inputText = document.querySelector('#input-txt');

var serverURL = 'https://api.funtranslations.com/translate/yoda.json';
function testingURl(text) {
    return serverURL + '?' + 'text=' + text;
};
function eventHandler() {
    var txtInput = inputText.value;
    fetch(testingURl(txtInput)).then(response => response.json()).then(json => {
        var translatedTxt = json.contents.translated;
        outputTxt.innerText = translatedTxt;
    }).catch(errorHandlers)
};
function errorHandlers(error) {
    console.error("error occured" + error);
    alert("Something went WRONG!, Try after some time again")
};
//Referencing the buttons.
btnTranslate.addEventListener("click", eventHandler());