var numeroSecreto = parseInt(Math.random() * 11)
var cont = 3

function Chutar() {
    var chute = parseInt(document.querySelector('#valor').value)

    while (cont > 0) {
        if (chute == numeroSecreto) {
            document.querySelector('#resultado').innerHTML = 'Você acertou! Parabéns!'
            break
        } else if (chute > 10 || chute < 0) {
            document.querySelector('#resultado').innerHTML = 'Digite um valor entre 0 e 10!'
            break
        } else if (chute > numeroSecreto) {
            cont--
            document.querySelector('#resultado').innerHTML = 'Você errou! O número secreto é menor! Você tem ' + cont + ' tentativas!'
            break
        } else if (chute < numeroSecreto) {
            cont--
            document.querySelector('#resultado').innerHTML = 'Você errou! O número secreto é maior! Você tem ' + cont + ' tentativas!!'
            break
        }
    }

    if (cont == 0) {
        document.querySelector('#resultado').innerHTML = 'Suas tentativas acabaram, o número era ' + numeroSecreto + '!'
    }
    document.querySelector('#valor').value = ''
}

function Reiniciar() {
    cont = 3
    var chute = parseInt(document.querySelector('#valor').value)

}