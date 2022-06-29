var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Ops! Você ainda não pode votar!')
} else if (idade < 18 || idade >= 65) {
        console.log('O seu voto é opcional!')
} else {
        console.log('O seu voto é obrigatório!')
    }