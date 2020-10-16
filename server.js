var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.get('/', function(request, response){
    getLotteryNumbers();
    response.json({numbers: lotteryNumbers});
});

app.listen(3000);
