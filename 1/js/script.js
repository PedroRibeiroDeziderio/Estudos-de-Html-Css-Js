function mudar(){
    let corpo = window.document.body
    let check = document.getElementById('modo-escuro')
    let letras = document.getElementsByTagName('p')

    if(check.checked){
        corpo.style.background = '#000000'
        corpo.style.color = '#ffffff'
        letras[0].innerHTML = 'Modo escuro ativado'
    }else{
        corpo.style.background = '#0285ff'
        corpo.style.color = '#000000'
        letras[0].innerHTML ='Modo normal'
    }
}