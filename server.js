//-------------------só é necessário pela megasena------------------//

var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.get('/', function(request, response){
    getLotteryNumbers();
    response.json({numbers: lotteryNumbers});
});

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

app.listen(3000);

// -----------------------------------------------------------------//