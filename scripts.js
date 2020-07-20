document.addEventListener('DOMContentLoaded', start);

function start() {
    menu();
    render();
    preventFormSubmit();
    activateInput();
    fetchCountries();
}

function menu() {
    const buttons = [...document.querySelectorAll('button')];

    buttons.forEach(button => {
        const btnRGB = document.querySelector('button.coresrgb')
        const btnRT = document.querySelector('button.rt')
        const btnCRUD = document.querySelector('button.crud')
        const rgbEX = document.querySelector('button.rgbGerator');
        const rgbBGN = document.querySelector('button.rgbBGchange');
        const crudAPI = document.querySelector('button.crudAPI');
        const send = document.querySelector('button#send');
        
        button.addEventListener("click", event => {

            const igti = document.getElementById('igti');
            igti.style.transform = 'translateY(20%)';

            if (button == btnRGB) {
                document.querySelector('div#wichrgb').style.transform = 'translateY(-70vh)';
                document.querySelector('div#regradetres').style.transform = 'translateY(100vh)';
                document.querySelector('div#cadastro').style.transform = 'translateY(100vh)';
            }
            if (button == btnRT) {
                document.querySelector('div#regradetres').style.transform = 'translateY(15vh)';
                document.querySelector('div#cadastro').style.transform = 'translateY(100vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(100vh)';
            }
            if (button == btnCRUD) {
                document.querySelector('div#cadastro').style.transform = 'translateY(-50vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(100vh)';
                document.querySelector('div#regradetres').style.transform = 'translateY(100vh)';
            }
            if (button == rgbEX){
                document.querySelector('div#rgb').style.transform ='translateY(-210vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(100vh)';
            } else {
                document.querySelector('div#rgb').style.transform = 'translateY(100vh)';
            }
            if (button == rgbBGN){
                document.querySelector('div#rgbBG').style.transform = 'translateY(-90vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(100vh)';
            } else {
                document.querySelector('div#rgbBG').style.transform = 'translateY(100vh)';
            }
            if (button == send) {
                regrade3();
            }
            if (button == random) {
                randomBG();
                document.querySelector('div#rgbBG').style.transform = 'translateY(-90vh)';
                document.querySelector('div#cadastro').style.transform = 'translateY(100vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(100vh)';
                document.querySelector('div#regradetres').style.transform = 'translateY(100vh)';
            }
            if (button == crudAPI) {
                document.querySelector('div#crudAPI1').style.transform = 'translateY(-250vh)';
                document.querySelector('div#rgbBG').style.transform = 'translateY(100vh)';
                document.querySelector('div#cadastro').style.transform = 'translateY(100vh)';
                document.querySelector('div#wichrgb').style.transform = 'translateY(100vh)';
                document.querySelector('div#regradetres').style.transform = 'translateY(100vh)';
            }
            console.log('clicou no botao-menu')
        });
    });
}

function regrade3() {
    const inverso = document.getElementById('inverso');

    const valor1 = document.getElementById('valueone').value;
    const valor2 = document.getElementById('valuetwo').value;
    const valor3 = document.getElementById('valuethree').value;

    if (inverso.checked) {
        let multiplica = valor1 * valor2;
        let divide = multiplica / valor3;
    
        document.getElementById('valuefour').value = divide;

    } else {
    let multiplica = valor1 * valor3;
    let divide = multiplica / valor2;

    document.getElementById('valuefour').value = divide;
    }
    console.log('entrou na regra de 3');
}

function changeColor() {
    const red = document.getElementById('rangeRed').value;
    const green = document.getElementById('rangeGreen').value;
    const blue = document.getElementById('rangeBlue').value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

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
    let c1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
    document.getElementById('rgbin1').style.backgroundColor = c1;
    document.getElementById('rgblab1').textContent = c1;

    const r2 = document.getElementById('r2').value;
    const g2 = document.getElementById('g2').value;
    const b2 = document.getElementById('b2').value;
    let c2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
    document.getElementById('rgbin2').style.backgroundColor = c2;
    document.getElementById('rgblab2').textContent = c2;

    const r3 = document.getElementById('r3').value;
    const g3 = document.getElementById('g3').value;
    const b3 = document.getElementById('b3').value;
    let c3 = 'rgb(' + r3 + ',' + g3 + ',' + b3 + ')';
    document.getElementById('rgbin3').style.backgroundColor = c3;
    document.getElementById('rgblab3').textContent = c3;

    const r4 = document.getElementById('r4').value;
    const g4 = document.getElementById('g4').value;
    const b4 = document.getElementById('b4').value;
    let c4 = 'rgb(' + r4 + ',' + g4 + ',' + b4 + ')';
    document.getElementById('rgbin4').style.backgroundColor = c4;
    document.getElementById('rgblab4').textContent = c4;

    document.body.style.background = 'linear-gradient' + '(' + '20deg' + ',' + c1 + ',' + c2 + ',' + c3 + ',' + c4 + ')';
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

function randomBG() {
    const random = (min, max) => Math.random() * (max - min) + min;
    
    let r1 = random(0,255);
    let r2 = random(0,255);
    let r3 = random(0,255);
    let r4 = random(0,255);
    let g1 = random(0,255);
    let g2 = random(0,255);
    let g3 = random(0,255);
    let g4 = random(0,255);
    let b1 = random(0,255);
    let b2 = random(0,255);
    let b3 = random(0,255);
    let b4 = random(0,255);

    let c1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
    let sc1 = 'rgb(' + parseInt(r1) + ',' + parseInt(g1) + ',' + parseInt(b1) + ')';
    document.getElementById('rgbin1').style.backgroundColor = c1;
    document.getElementById('rgblab1').textContent = sc1;
    document.getElementById('r1').value = r1;
    document.getElementById('g1').value = g1;
    document.getElementById('b1').value = b1;

    let c2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
    let sc2 = 'rgb(' + parseInt(r2) + ',' + parseInt(g2) + ',' + parseInt(b2) + ')';
    document.getElementById('rgbin2').style.backgroundColor = c2;
    document.getElementById('rgblab2').textContent = sc2;
    document.getElementById('r2').value = r2;
    document.getElementById('g2').value = g2;
    document.getElementById('b2').value = b2;
    
    let c3 = 'rgb(' + r3 + ',' + g3 + ',' + b3 + ')';
    let sc3 = 'rgb(' + parseInt(r3) + ',' + parseInt(g3) + ',' + parseInt(b3) + ')';
    document.getElementById('rgbin3').style.backgroundColor = c3;
    document.getElementById('rgblab3').textContent = sc3;
    document.getElementById('r3').value = r3;
    document.getElementById('g3').value = g3;
    document.getElementById('b3').value = b3;

    let c4 = 'rgb(' + r4 + ',' + g4 + ',' + b4 + ')';
    let sc4 = 'rgb(' + parseInt(r4) + ',' + parseInt(g4) + ',' + parseInt(b4) + ')';
    document.getElementById('rgbin4').style.backgroundColor = c4;
    document.getElementById('rgblab4').textContent = sc4;
    document.getElementById('r4').value = r4;
    document.getElementById('g4').value = g4;
    document.getElementById('b4').value = b4;

    document.body.style.background = 'linear-gradient' + '(' + '20deg' + ',' + c1 + ',' + c2 + ',' + c3 + ',' + c4 + ')';  


    console.log('random')
;}

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
    console.log('limpo');
}

tabCountries = document.getElementById('tabcountries');
tabFavs = document.getElementById('tabFavs');

countCountries = document.getElementById('countCountries');
countFavs = document.getElementById('countFavs');

totalPopList = document.getElementById('totalPopulationList');
totalPopFavs = document.getElementById('totalFavs');

numberFormat = Intl.NumberFormat('pt-BR')

async function fetchCountries() {
    let tabCountries = document.getElementById('tabcountries');
    let tabFavs = document.getElementById('tabFavs');

    let allCountries = [];
    let favCountries = [];

    let countCountries = document.getElementById('countCountries');
    let countFavs = document.getElementById('countFavs');

    let totalPopList = document.getElementById('totalPopulationList');
    let totalPopFavs = document.getElementById('totalFavs');

    numberFormat = Intl.NumberFormat('pt-BR')

    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const json = await res.json()

    allCountries = json.map(country => {

        const { numericCode, population, flag } = country;

        return {
            id: numericCode,
            name : country.translations.pt,
            population,
            formattedPopulation: formatNumber(population),
            flag
        };
    });

    render2();

    function render2(){
        renderCountryList();
        renderFavs()
        renderSummary()
        renderHandleCountryButtons()    
    }

    function renderCountryList(){
        let countriesHTML = '<div>';

        allCountries.forEach(country => {
            const { name, flag, id, population, formattedPopulation } = country;
            let countryHTML = `
            <div class="country">
            <div>
                <span class="btnADD"><a id="${id}">+</a></span>
            </div>
            <div class="imgc">
                <img src="${flag}" alt="${name}">
            </div>
            <div>
            <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
            </ul>
            </div>
            </div>
            `;
            countriesHTML += countryHTML;
        });

        countriesHTML += '</div>';

        tabCountries.innerHTML = countriesHTML;
    }

    function renderFavs(){
        let favsHTML = '<div>'

        favCountries.forEach(country => {
            const { name, flag, id, population, formattedPopulation } = country;
            let favHTML = `
            <div class="country">
            <div>
                <span class="btnREM"><a id="${id}">-</a></span>
            </div>
            <div class="imgc">
                <img src="${flag}" alt="${name}">
            </div>
            <div>
            <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
            </ul>
            </div>
            </div>
            `;
            favsHTML += favHTML;
        })

        favsHTML += '</div>'
        tabFavs.innerHTML = favsHTML
    }
    
    function renderSummary(){
        countCountries.textContent = allCountries.length;
        countFavs.textContent = favCountries.length;
    
        const totalPopulation = allCountries.reduce((accumulator, current) => {
            return accumulator + current.population;
        }, 0)

        const totalFavorites = favCountries.reduce((accumulator, current) => {
            return accumulator + current.population;
        }, 0)

        totalPopList.textContent = formatNumber(totalPopulation);
        totalPopFavs.textContent = formatNumber(totalFavorites);
    }

    function renderHandleCountryButtons(){
    const countryButtons = Array.from(tabCountries.querySelectorAll('a'));
    const favButtons = Array.from(tabFavs.querySelectorAll('a'));
    
        countryButtons.forEach(button => {
            button.addEventListener('click', () => addToFavorites(button.id));
        })

        favButtons.forEach(button => {
            button.addEventListener('click', () => removeFromFavorites(button.id));
        })
    }

    function addToFavorites (id){
        const countryToAdd = allCountries.find(country => country.id === id);
        
        favCountries = [...favCountries, countryToAdd];

        favCountries.sort((a, b) => {
            return a.name.localeCompare(b.name)
        });
        console.log(favCountries);
    
        allCountries = allCountries.filter(country => country.id !== id);
    
        render2();
    } 

    function removeFromFavorites(id){
        const countryToRemove = favCountries.find(country => country.id === id);
        
        allCountries = [...allCountries, countryToRemove];

        allCountries.sort((a, b) => {
            return a.name.localeCompare(b.name)
        });
        console.log(favCountries);
    
        favCountries = favCountries.filter(country => country.id !== id);
    
        render2();
    }

    function formatNumber(number){
        return numberFormat.format(number);
    }
};