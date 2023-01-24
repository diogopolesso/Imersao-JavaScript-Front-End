// Operadores Aritméticos:

var a = 5 + 3           // 8
var b = a % 5           // 3
var c = 5 * b ** 2      // 45
var d = 10 - a / 2      // 6
var e = 6 * 2 / d       // 2
var f = b % e + 4 / e   // 3


// Operadores Relacionais:

5 > 2    // true
7 < 4    // false
8 >= 8   // true
9 <= 7   // false
5 == 5   // true
4 != 4   // false

// Operadores de Identidade:

5 == 5      // true 
5 == '5'    // true
5 === '5'   // false
5 === 5     // true

// Operadores Lógico:

!            // negação
&&           // conjunção
||           // disjunção

// Negação:

! true   // false
! false  // true


// Conjunção:

true  && true     // true
true  && false    // false
false && true     // false
false && false    // false

// Disjunção:

true  || true     // true
true  || false    // true
false || true     // true
false || false    // false


// EXEMPLOS:

idade >= 15 && idade <= 17         // A IDADE ESTÁ ENTRE 15 E 17?

estado == 'RJ' || estado == 'SP'   // O ESTADO É RJ OU SP?

salário > 1500 && sexo != 'M'      // O SÁLARIO É ACIMA DE 1500 E NÃO É HOMEM?


/* 

Ordem de Precedência:

() ** /      // Aritméticos

> < >=       // Relacionais

! && ||       // Lógicos

*/

// Operadores Ternários: ? :

teste ? true : false

// EXEMPLO TESTE LÓGICO: MÉDIA = 5.5

media >= 7.0 ? "APROVADO" : "REPROVADO"   // "REPROVADO"

// EXEMPLO TESTE LÓGICO: MÉDIA = 8

media >= 7.0 ? "APROVADO" : "REPROVADO"   // "APROVADO"

