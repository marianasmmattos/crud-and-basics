window.addEventListener('load', start);
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
    inputName.focus();
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
    inputName.focus();
}