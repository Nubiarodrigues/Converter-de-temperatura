function conversao() {
    let numero1 = Number(document.getElementById('entrada').value)
    

    if (document.getElementById('celsius').checked)
        calculo = (numero1 * 9/5) + 32
    else if (document.getElementById('Fahrenheit').checked)
        calculo = (numero1 - 32) * 5/9
    else if (document.getElementById('Kelvin').checked)
        calculo = (numero1 - 273.15) * 9/5 + 32
    else if (document.getElementById('Fahrenheit/Kelvin').checked)
        calculo = (numero1 - 32) * 5/9 + 273.15
    else if (document.getElementById('Celsius/kelvin').checked)
        calculo = numero1 + 273.15
    else if (document.getElementById('kelvin/celsius').checked)
        calculo = numero1 - 273.15
    else 
        console.log('Valor invalido')


    document.getElementById('resultado').innerHTML = 'Resultado: ' + String(calculo) 

}

























