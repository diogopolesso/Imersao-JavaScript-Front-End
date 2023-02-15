//object - Funções dentro de Variaveis

let amigo = {
    nome: "José",
    sexo: "M",
    peso: 87.5,
    engordar(p=0) {  // function dentro de um objeto
        console.log('engordou');
        this.peso += p;
    }
}

console.log(typeof amigo); // mostra que isso é um object
console.log(amigo);        // mostra o conteudo todo do objeto amigo
console.log(amigo.nome);   // mostra apenas o nome do object amigo

amigo.engordar(2); // acrescenta o valor 2 no peso do amigo

console.log(`${amigo.nome} está pesando ${amigo.peso}Kg`);
