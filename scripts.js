window.addEventListener('load', start);

function start() {
    preventFormSubmit();
    activateInput();
    menu();
    render();
}

function menu() {
    const buttons = [...document.querySelectorAll('button')];

    function up() {
        const igti = document.getElementById('igti');
        igti.style.transform = 'translateY(20%)';
    }

    buttons.forEach(button => {
        const btnRGB = document.querySelector('button.coresrgb')
        const btnRT = document.querySelector('button.rt')
        const btnCRUD = document.querySelector('button.crud')
        const rgbEX = document.querySelector('button.rgbGerator');
        const rgbBGN = document.querySelector('button.rgbBGchange');
        const send = document.querySelector('button#send');
        
        button.addEventListener("focus", event => {
            up(event);
            if (button == btnRGB) {
                document.querySelector('div#wichrgb').style.transform = 'translateY(-75vh)';
                document.querySelector('div#regradetres').style.transform = 'translateY(250vh)';
                document.querySelector('div#cadastro').style.transform = 'translateY(250vh)';
            }
            if (button == btnRT) {
                document.querySelector('div#regradetres').style.transform = 'translateY(15vh)';
                document.querySelector('div#cadastro').style.transform = 'translateY(250vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(250vh)';
            }
            if (button == btnCRUD) {
                document.querySelector('div#cadastro').style.transform = 'translateY(-40vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(250vh)';
                document.querySelector('div#regradetres').style.transform = 'translateY(250vh)';
            }
            if (button == rgbEX){
                document.querySelector('div#rgb').style.transform ='translateY(-80vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(250vh)';
            } else {
                document.querySelector('div#rgb').style.transform = 'translateY(250vh)';
            }
            if (button == rgbBGN){
                document.querySelector('div#rgbBG').style.transform = 'translateY(-360vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(250vh)';
            } else {
                document.querySelector('div#rgbBG').style.transform = 'translateY(250vh)';
            }
            if (button == send) {
                regrade3();
            }
        });
    });
}

function regrade3() {
    const inverso = document.getElementById('inverso');

    const valor1 = document.getElementById('valueone').value;
    const valor2 = document.getElementById('valuetwo').value;
    const valor3 = document.getElementById('valuethree').value;

    if (inverso.checked) {
        const multiplica = valor1 * valor2;
        const divide = multiplica / valor3;
    
        document.getElementById('valuefour').value = divide;

    } else {
    const multiplica = valor1 * valor3;
    const divide = multiplica / valor2;

    document.getElementById('valuefour').value = divide;
    }
}

function changeColor() {
    const red = document.getElementById('rangeRed').value;
    const green = document.getElementById('rangeGreen').value;
    const blue = document.getElementById('rangeBlue').value;
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.getElementById('rgbinput').style.backgroundColor = color;
    document.getElementById('rgbinputlabel').value = color;
    //    document.getElementById('colorOutput').innerHTML = ':' + color;
}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);

function changeBG() {
    const r1 = document.getElementById('r1').value;
    const g1 = document.getElementById('g1').value;
    const b1 = document.getElementById('b1').value;
    const c1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
    document.getElementById('rgbin1').style.backgroundColor = c1;
    document.getElementById('rgbin1').value = c1;

    const r2 = document.getElementById('r2').value;
    const g2 = document.getElementById('g2').value;
    const b2 = document.getElementById('b2').value;
    const c2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
    document.getElementById('rgbin2').style.backgroundColor = c2;
    document.getElementById('rgbin2').value = c2;

    const r3 = document.getElementById('r3').value;
    const g3 = document.getElementById('g3').value;
    const b3 = document.getElementById('b3').value;
    const c3 = 'rgb(' + r3 + ',' + g3 + ',' + b3 + ')';
    document.getElementById('rgbin3').style.backgroundColor = c3;
    document.getElementById('rgbin3').value = c3;

    const r4 = document.getElementById('r4').value;
    const g4 = document.getElementById('g4').value;
    const b4 = document.getElementById('b4').value;
    const c4 = 'rgb(' + r4 + ',' + g4 + ',' + b4 + ')';
    document.getElementById('rgbin4').style.backgroundColor = c4;
    document.getElementById('rgbin4').value = c4;

    document.body.style.background = 'linear-gradient' + '(' + '20deg' + ',' + c1 + ',' + c2 + ',' + c3 + ',' + c4 + ')';
    document.body.style.animation = 'colors';
}

document.getElementById('r1').addEventListener('input', changeBG);
document.getElementById('g1').addEventListener('input', changeBG);
document.getElementById('b1').addEventListener('input', changeBG);
document.getElementById('r2').addEventListener('input', changeBG);
document.getElementById('g2').addEventListener('input', changeBG);
document.getElementById('b2').addEventListener('input', changeBG);
document.getElementById('r3').addEventListener('input', changeBG);
document.getElementById('g3').addEventListener('input', changeBG);
document.getElementById('r4').addEventListener('input', changeBG);
document.getElementById('g4').addEventListener('input', changeBG);
document.getElementById('b4').addEventListener('input', changeBG);

var globalNames = ['Mariana Mattos', 'Adicione com a tecla enter', 'Exclua apertando o botão', 'Edite ao clicar no texto'];
var inputName = document.getElementById('inputName');
var isEditing = false;
var currentIndex = null;
// var inputName = null; -> na aula ele ensina colocando null mas não vejo necessidade

function preventFormSubmit() {
    const form = document.querySelector('form')
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName);
        render();
    }

    function updateName(newName) {
        globalNames[currentIndex] = newName;
        render();
    }

    function handleTyping() {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            if (isEditing) {
                updateName(event.target.value)
            } else {
                insertName(event.target.value)
            }
            clearInput();
            isEditing = false;
        }
    }
    inputName.addEventListener('keyup', handleTyping);
}

function render() {
    function createDeleteBtn(index) {
        function deleteName() {
            globalNames.splice(index, 1);
            render();
        }
        var button = document.createElement('button');
        button.textContent = 'x';
        //button.classList.add('delete');

        button.addEventListener('click', deleteName)

        return button;
    }

    function createSpan(name, index) {
        function editItem() {
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

    for (var i = 0; i < globalNames.length; i++) {
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

function clearInput() {
    inputName.value = '';
}