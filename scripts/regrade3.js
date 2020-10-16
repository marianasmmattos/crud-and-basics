const regrade3 = () => {
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
}