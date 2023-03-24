
const res = document.querySelector('.res')
const btn = document.querySelector('.btn')
const form = document.querySelector('.form')
const clear = document.querySelector('.clear')

function calculaIMC() {
    let altura = parseFloat(document.querySelector('.altura').value)
    let peso = parseFloat(document.querySelector('.peso').value)
    let imc = peso / (altura * altura)

    if (isNaN(altura) || isNaN(peso)) {
        res.innerHTML = 'Altura ou peso inválidos';
        res.style.display = 'flex';
        return;
    }

    if (imc < 18.5) {
        res.innerHTML = '<strong>Magreza</strong> '
        res.style.color = 'red'
    }
    if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = '<strong>Normal</strong> '
        res.style.color = 'green'
    }
    if (imc >= 25 && imc <= 29.9) {
        res.innerHTML = '<strong>Sobrepeso </strong>'
        res.style.color = 'pink'
    }
    if (imc >= 30 && imc <= 34.9) {
        res.innerHTML = '<strong>Obesidade grau I</strong>'
        res.style.color = 'orange'
    }
    if (imc >= 35 && imc <= 39.9) {
        res.innerHTML = '<strong>Obesidade grau II </strong>'
        res.style.color = 'red'

    }
    if (imc >= 40) {
        res.innerHTML = 'Obesidade grau III'
    }
    res.style.display = 'flex'

}

function limpar() {
    res.style.display = 'none'
    document.querySelectorAll('input').forEach(input => input.value = '');
}

btn.addEventListener('click', calculaIMC)
clear.addEventListener('click', limpar)
form.addEventListener('submit', function (e) {
    e.preventDefault()
})

