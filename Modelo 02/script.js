function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = document.querySelector('div#txtano');
    let res =  document.querySelector('div#res');
    if(formularioAno.Value.length == 0 || Number(formularioAno.value) > ano);
        window.alert('[ERRO] Verifique os Dados e Tente Novamente!');
} else {
    let fsex = document.getElementsByName('radsex');
    let idade = ano - Number(formularioAno.value);
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked ) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'img/bebemenino.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'img/homemjovem.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'img/homemadulto.png')
        }else {
            //idoso
            img.setAttribute('src', 'img/homemidoso.png')
        }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'img/bebemenina.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'img/mulherjovem.png')
        } else if (idade < 50){
            //Adulta
            img.setAttribute('src', 'img/mulheradulta.png')
        }else {
            //idosa
            img.setAttribute('src', 'img/mulheridosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML  =`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
