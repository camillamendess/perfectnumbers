function verificar() {
    var numero = document.getElementById('num').value
    var show = document.getElementById('resposta')
    var perfect = document.getElementById('pf')

    show.textContent = "Divisores do " + numero + ": "

    var soma = 0

    for (var i = 0; i < numero; i++) {
        if (numero % i == 0) {
            soma += i
            if (i < (numero / 2)) {
                show.textContent += i + ", "

            } else {
                show.textContent += i
            }
        }
    }

    show.textContent += " (Soma: " + soma + ")"

    if (soma == numero) {
        perfect.textContent = numero + " é um número perfeito"
    } else {
        perfect.textContent = numero + " não é um número perfeito"
    }


}
