//var agora = new Date() 
//var hora = agora.getHours - COMO GARANTIR APENAS HORA E MINUTO SEM SEGUNDOS
var hora = 9
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <=1 || hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora <= 12.59) {
    console.log('Bom dia!')
} else if (hora <= 13 || hora <18.59){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}