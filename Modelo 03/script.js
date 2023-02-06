function contar() {
    let inicio = documentqueryselector('div#txti');
    let fim = documentqueryselector('div#txtf');
    let contar = documentqueryselector('div#txtp');

    if (inicio.value.length == 0 || fim.value.length == 0 || PaymentResponse.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    } else {
        alert('Tudo ok!')
    }
}
