
perguntaIndice()
const fibonacci = () => {

    let
        numA = 0,
        numB = 1,
        numC,
        qtdTermos = Number(prompt("Digite a quantidade de termos da sequência de Fibonnaci."))
    numVerificado = Number(prompt("Digite o número para verificar se pertence a Sequencia de Fibonnaci"))

    for (i = 1; i <= qtdTermos; i++) {

        numC = numA + numB
        numA = numB
        numB = numC
        console.log(numA)
    }

    if (numA === numVerificado) {
        alert(`O número ${numVerificado} faz parte da sequência de Fibonacci`)
    } else {
        alert(`O número ${numVerificado} não faz parte da sequência de Fibonacci`)
    }


}

fibonacci()
