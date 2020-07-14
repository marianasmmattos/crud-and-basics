window.addEventListener('load', start);

const buttons = [...document.querySelectorAll('button')];

function up (){
    const igti = document.getElementById('igti');
    igti.style.transform = 'translateY(20%)';
}

buttons.forEach(button => {
    const btnRGB = document.querySelector('button.rgb')
    const btnRT = document.querySelector('button.rt')
    const btnCRUD = document.querySelector('button.crud')
    button.addEventListener("focus", event => {
        up(event);
        if (button == btnRGB) {
            document.querySelector('div#rgb').style.transform = 'translateY(-40vh)';
            document.querySelector('div#regradetres').style.transform = 'translateY(250vh)';
            document.querySelector('div#cadastro').style.transform = 'translateY(250vh)';
        }  
        if (button == btnRT) {
            document.querySelector('div#regradetres').style.transform = 'translateY(10vh)';
            document.querySelector('div#cadastro').style.transform = 'translateY(250vh)';
            document.querySelector('div#rgb').style.transform = 'translateY(250vh)';
        }  
        if (button == btnCRUD) {
            document.querySelector('div#cadastro').style.transform = 'translateY(-350vh)';
            document.querySelector('div#rgb').style.transform = 'translateY(250vh)';
            document.querySelector('div#regradetres').style.transform = 'translateY(250vh)';
        }     
    });
});


function regrade3 () {
    const inverso = document.getElementById('inverso');

    const valor1 = document.getElementById('valueone').value;
    const valor2 = document.getElementById('valuetwo"').value;
    const valor3 = document.getElementById('valuethree').value;

    if (inverso.checked) {
        console.log('true');
    }
    else {
        console.log('else');
    }
    }

function changeColor () {
    const red = document.getElementById('rangeRed').value;
    const green = document.getElementById('rangeGreen').value;
    const blue = document.getElementById('rangeBlue').value;
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.getElementById('rgbinput').style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ':' + color;
}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);

var globalNames = ['um', 'dois', 'três', 'quatro'];
var inputName = document.getElementById('inputName');
var isEditing = false;
var currentIndex = null;
// var inputName = null; -> na aula ele ensina colocando null mas não vejo necessidade

function start () {
    preventFormSubmit();
    activateInput();
    render();
}

function preventFormSubmit(){
    const form = document.querySelector('form')
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    form.addEventListener('submit', handleFormSubmit);   
}

function activateInput() {
    function insertName(newName){
        globalNames.push(newName);
        render();
    }

    function updateName(newName) {
        globalNames[currentIndex] = newName;
        render();
    }

    function handleTyping(){
        if (event.key === 'Enter' && event.target.value.trim() !== ''){
            if(isEditing){
            updateName(event.target.value)
            } else{
            insertName(event.target.value)
            }
            clearInput();
            isEditing = false;
        }
    }
    inputName.addEventListener('keyup', handleTyping);
}

function render () {
    function createDeleteBtn(index){
        function deleteName(){
            globalNames.splice(index, 1);
            render();
        }
        var button = document.createElement('button');
        button.textContent = 'x';
        //button.classList.add('delete');

        button.addEventListener('click', deleteName)

        return button;
    }

    function createSpan(name, index){
        function editItem(){
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        var span = document.createElement('span');
        // span.classList.add('clickable')
        span.textContent = name;
        span.addEventListener('click', editItem);

        return span;    
    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';
    var ul = document.createElement('ul');

    for(var i = 0; i < globalNames.length; i++){
        var currentName = globalNames[i];
        var li = document.createElement('li');
        var button = createDeleteBtn(i);
        var span = createSpan(currentName, i);
        
        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
    clearInput();
}

function clearInput(){
    inputName.value = '';
}