
const megasena = () => {
    
    var lotteryNumbers = [];

    function getNumber(from, to){
        return (Math.max(Math.ceil(Math.random() * 60)));
    }

    function getLotteryNumbers() {
        lotteryNumbers = [];
        
        while(lotteryNumbers.length < 6) {
            var newNumber = getNumber(1, 60);
            var insertNumber = true;
    
            for(var i =0; i < lotteryNumbers.length; i++){
                var currentNumber = lotteryNumbers[i];

                if(newNumber === currentNumber){
                    var insertNumber = false;
                    break;
                }
            }
    
            if(insertNumber) {
                lotteryNumbers.push(newNumber);
            }
        }
    
        lotteryNumbers.sort(function(a,b){
            return a - b;
        })
    }
}

function megasena(){
    var megas = document.querySelector('#megasena')

    function start2() {
        fetch('http://localhost:3000').then(function(resource){
            resource.json().then(function(json){
               var numeros = [...json.numbers];
               megas.innerHTML = ``;

                for (i=0; i < numeros.length; i++ ){
                    var recebe = document.createElement('input');
                    recebe.value = numeros[i]
                    megas.appendChild(recebe);
                }
            })
        });
    }

    start2();
}