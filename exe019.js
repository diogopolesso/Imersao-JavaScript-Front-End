let num = [5, 8, 2, 9, 3]

num[3] = 6  // adiciona um vetor porem substitui o existente na possição 3
num.push(7) // adiciona um Vetor no final do array
num.length  // atributo - serve para saber o comprimento de um array
num.sort()    // pega todos os valores e coloca em ordem crescente (cuidar a ordem caso tenha especificado um num.push)
num.indexOf(8) // vai buscar o valor 8 no vetor na posição 5
num.indexOf(4) // vai retornar o valor -1 quando não encontra nenhuma ocorrencia


console.log(num)
console.log(`Nosso Vetor tem ${num.length} posições`)
console.log(`O Primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O Valor 8 esta na possição ${pos}`)
