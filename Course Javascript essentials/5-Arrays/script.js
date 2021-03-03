/********************* */
// Introdução a Arrays
// add novos elementos
// Encontrar elementos
// Remover elementos
// Dividir elementos
// Dividir arrays
// Combinar Arrays

//1 add elementos

const numeros = [1, 2, 3];

// inicio
numeros.unshift(0);
console.log(numeros);
// meio
numeros.splice(1, 0, 'a');
console.log(numeros);
// final
numeros.push(5);
console.log(numeros);

/************************/
// Encontrando elementos(primitivos)
const numeros = [1, 2, 3, 4];
//console.log(numeros.lastIndexOf(1));
//console.log( numeros.indexOf(2) !== -1);
console.log(numeros.includes(2));

// Encontrando elementos (tipo de referencia)

const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' },
];

const marca = marcas.find(function (marca) {
    return marca.nome === 'a';
});

console.log(marca);

/************************/
// Arrow functions 
const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];

console.log(marcas.find((marca) => marca.nome === 'a'));

/****************************/
// Removendo elementos do array 

const numeros = [1, 2, 3, 4, 5, 6];
numeros.push();
numeros.unshift();
numeros.splice();

// final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// inicio
const primeiro = numero.shift();
console.log(primeiro);
console.log(numeros);

// meio
const meio = numeros.splice(2, 1);
console.log(meio);

/***********************/
// Esvaziando um array
let numeros = [1, 2, 3, 4, 5, 6];
let outros = numeros;
// Solução 1 reinstanciar
//numeros = [];
//console.log(outros);

// Solução 2
numeros.length = 0;
console.log(numeros);
console.log(outros);

// Solução 3
numeros.splice(0, numeros.length);
console.log(numeros);
console.log(outros);

// Solução 4 / Menos indicada
while (numeros.length > 0)
    numeros.pop();


/*******************************/
// Combinando e cortando arrays
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];
// Combinado
const combunado = primeiro.concat(segundo);
console.log(combinado);

// Dividir
const cortado = combinado.slice(1, 3);
console.log(cortado);

/*********************/
// Operador spread
// Clonagem de array
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro, 'a', ...segundo, '#'];
console.log(combinado);
//const cortado = combinado.slice();
const clonado = [...combinado];
console.log(clonado);

// ForEach

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, indice) => console.log(numero, indice));


/********************/
// Combinando Arrays

const numero = [1, 2, 3, 4, 5];

const Combinado = numero.join('.');
console.log(combinado);

const frase = "olá bem vindo ao curso";
const resultado = frase.split('.');
console.log(resultado);

console.log(resultado.join('.'));
//slug

// Exemplo join, split, replicar com o join

/**********************************/
// Input - Como receber dados do usuario

// Introdução manipulação do DOM