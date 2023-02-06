function contar() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let contar = document.getElementById('txtp');

    if (inicio.value.length == 0 || fim.value.length == 0 || contar.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    } else {
        alert('Tudo ok!')
    }
}

//document.querySelector