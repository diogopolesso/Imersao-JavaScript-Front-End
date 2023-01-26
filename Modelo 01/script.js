function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
        msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // "BOM DIA!"
        img.src = 'img/dia.png'
        document.body.style.background = '#f4d544'
    }else if (hora >= 12 && hora <= 18) {
        //"BOA TARDE!"
        img.src = 'img/tarde.png'
        document.body.style.background = '#937D6F'
    }else {
        //"BOA NOITE!"
        img.src = 'img/noite.png'
        document.body.style.background = '#4e6688'
    }
}

