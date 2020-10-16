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
}