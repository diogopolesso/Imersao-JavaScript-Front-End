function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = document.getElementById('txtano');
    let res = document.getElementById('res');

    
    if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano){
        window.alert('[ERRO] Verifique os Dados e Tente Novamente!');
    } else {
    let fsex = document.getElementsByTagName('input');
    let idade = ano - Number(formularioAno.value);
    let genero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[1].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10){
            genero = 'Criança';
            img.setAttribute('src', 'img/bebemenino.png');
        } else if (idade < 18){
            genero = 'Jovem';
            img.setAttribute('src', 'img/homemjovem.png');
        } else if (idade < 60){
            genero = 'Adulto';
            img.setAttribute('src', 'img/homemadulto.png');
        } else {
            genero = 'idoso';
            img.setAttribute('src', 'img/homemidoso.png');
        }

    } else if (fsex[2].checked){
        genero = 'Mulher';
        if (idade >= 0 && idade < 10){
            genero = 'Criança';
            img.setAttribute('src', 'img/bebemenina.png');
        } else if (idade < 18){
            genero = 'Jovem';
            img.setAttribute('src', 'img/mulherjovem.png');
        } else if (idade < 60){
            genero = 'Adulta';
            img.setAttribute('src', 'img/mulheradulta.png');
        } else {
            genero = 'idosa';
            img.setAttribute('src', 'img/mulheridosa.png');
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`);
    res.appendChild(img);
    }
}
