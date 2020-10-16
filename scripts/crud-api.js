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
                <span class="btnADD"><a id="${id}"> + </a></span>
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
                <span class="btnREM"><a id="${id}"> x </a></span>
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