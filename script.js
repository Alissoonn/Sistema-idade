function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.lenght == 0 || (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-homem.png')
                //CRIANÇA
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-homem.png')
                //JOVEM
            }else if (idade <50){
                img.setAttribute('src', 'homem-adulto.png')
                //ADULTO
            }else {
                img.setAttribute('src', 'homem-idoso.png')
                //IDOSO
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-mulher.png')
                //CRIANÇA
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-mulher.png')
                //JOVEM
            }else if (idade <50){
                img.setAttribute('src', 'mulher-adulto.png')
                //ADULTO
            }else {
                img.setAttribute('src', 'mulher-idosa.png')
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}