function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 0 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <=5) {
        //BOA MADRUGADA
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#233139'
    }else if (hora >= 6 && hora <= 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e5c685'
    } else if (hora >= 13 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#4e2f4e'
    }

}