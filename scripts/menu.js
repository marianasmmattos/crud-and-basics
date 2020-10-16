const menu = () => {
    const buttons = [...document.querySelectorAll('button')];

    buttons.forEach(button => {
        const btnRGB = document.querySelector('button.coresrgb')
        const btnRT = document.querySelector('button.rt')
        const btnCRUD = document.querySelector('button.crud')
        const rgbEX = document.querySelector('button.rgbGerator');
        const rgbBGN = document.querySelector('button.rgbBGchange');
        const crudAPI = document.querySelector('button.crudAPI');
        const APIpodcast = document.querySelector('button.APIpodcast');
        const megasena = document.querySelector('button.megasena');
        const send = document.querySelector('button#send');
        
        button.addEventListener("click", event => {
            const menu = document.getElementById('op');
            const igti = document.getElementById('igti');
            igti.style.transform = 'translateY(20%)';
            menu.style.flexDirection= 'row';

            if (button == btnRT) {
                document.querySelector('div#regradetres').style.transform = 'translateY(15vh)';
                document.querySelector('div#cadastro').style.display = 'none';
                document.querySelector('div#wichrgb').style.display = 'none';
                document.querySelector('div#crudAPI1').style.display = 'none';
                document.querySelector('div#radiopodcast').style.display = 'none';
                document.querySelector('div#megasena').style.display = 'none';
            }
            if (button == send) {
                regrade3();
            }
            if (button == btnRGB) {
                document.querySelector('div#wichrgb').style.display = 'flex';
                document.querySelector('div#wichrgb').style.transform = 'translateY(15vh)';
                document.querySelector('div#regradetres').style.display = 'none';
                document.querySelector('div#cadastro').style.display = 'none';
                document.querySelector('div#crudAPI1').style.display = 'none';
                document.querySelector('div#radiopodcast').style.display = 'none';
                document.querySelector('div#megasena').style.display = 'none';
            }
            if (button == rgbEX){
                document.querySelector('div#rgb').style.display = 'flex';
                document.querySelector('div#wichrgb').style.display = 'none';
            } else {
                document.querySelector('div#rgb').style.display = 'none';
            }
            if (button == rgbBGN){
                document.querySelector('#rgbBG').style.display = 'flex';
                document.querySelector('div#rgbBG').style.transform = 'translateY(15vh)';            
                document.querySelector('div#wichrgb').style.display = 'none';
            } else {
                document.querySelector('div#rgbBG').style.display = 'none';
            }
            if (button == random) {
                randomBG();
                document.querySelector('#rgbBG').style.display = 'flex';
                document.querySelector('div#rbgBG').style.transform = 'translateY(15vh)';
                document.querySelector('div#cadastro').style.display = 'none';
                document.querySelector('div#wichrgb').style.display = 'none';
                document.querySelector('div#regradetres').style.display = 'none';
                document.querySelector('div#crudAPI1').style.display = 'none';
                document.querySelector('div#radiopodcast').style.display = 'none';
                document.querySelector('div#megasena').style.display = 'none';
            }
            if (button == btnCRUD) {
                document.querySelector('div#cadastro').style.display = 'flex';
                document.querySelector('div#cadastro').style.transform = 'translateY(15vh)';
                document.querySelector('div#wichrgb').style.display = 'none';
                document.querySelector('div#regradetres').style.display = 'none';
                document.querySelector('div#crudAPI1').style.display = 'none';
                document.querySelector('div#radiopodcast').style.display = 'none';
                document.querySelector('div#megasena').style.display = 'none';
            }
            if (button == crudAPI) {
                document.querySelector('div#crudAPI1').style.display = 'flex';
                document.querySelector('div#crudAPI1').style.transform = 'translateY(15vh)';
                document.querySelector('div#rgbBG').style.display = 'none';
                document.querySelector('div#cadastro').style.display = 'none';
                document.querySelector('div#wichrgb').style.display = 'none';
                document.querySelector('div#regradetres').style.display = 'none';
                document.querySelector('div#radiopodcast').style.display = 'none';
                document.querySelector('div#megasena').style.display = 'none';
            }
            if (button == APIpodcast) {
                document.querySelector('div#radiopodcast').style.display = 'flex';
                document.querySelector('div#radiopodcast').style.transform = 'translateY(15vh)';
                document.querySelector('div#wichrgb').style.display = 'none';
                document.querySelector('div#regradetres').style.display = 'none';
                document.querySelector('div#cadastro').style.display = 'none';
                document.querySelector('div#crudAPI1').style.display = 'none';
                document.querySelector('div#megasena').style.display = 'none';
            }
            if (button == megasena) {
                document.querySelector('div#megasena').style.display = 'flex';
                document.querySelector('div#megasena').style.transform = 'translateY(15vh)';
                document.querySelector('div#wichrgb').style.display = 'none';
                document.querySelector('div#regradetres').style.display = 'none';
                document.querySelector('div#cadastro').style.display = 'none';
                document.querySelector('div#crudAPI1').style.display = 'none';
                document.querySelector('div#radiopodcast').style.display = 'none';
            }
        });
    });
}