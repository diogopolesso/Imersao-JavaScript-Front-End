let num = document.getElementById("fnum"); // or document.querySelector("input#fnum")
let lista = document.getElementById("flista"); // or document.querySelector("input#flista")
let res = document.getElementById("res") // or document.querySelector("div#res")
let valores = [] // declara os vetores para analisar os dados

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''
    }else {
        alert('Valor invalido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            media = soma / tot;
            if (valores[pos] > maior)
                maior = valores[pos];
            if (valores[pos] < menor)
                menor = valores[pos];
        }

        res.innerHTML = '';
        res.innerHTML += `<p>Total de ${tot} Números Cadastrados.</p>`;
        res.innerHTML += `<p>O Maior Valor Informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O Menor Valor Informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A Soma de Todos os Valores Foi ${soma}</p>`;
        res.innerHTML += `<p>A Media de Todos os Valores Foi ${Math.round(media)}</p>`;

    }
}
