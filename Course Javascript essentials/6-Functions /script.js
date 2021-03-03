// Funcoes ** Ordem: Verbo + Substantivo para nomear as funcoes//


let corSite = "azul";

function resetaCor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);


/**** Tipos De Funcoes ****/
// 1: Realiza uma tarefa e não devolve nada //

function dizerNome() {
    console.log('jhonatan');
}

dizerNome();

function MultiplicarPorDois(valor) {
    return valor * 2;

}

console.log(MultiplicarPorDois(5));


/**** Operadores Aritiméticos ****/
// +, -, *, /, ** 
// ++ -- 
let salario = 100;
let idade = 5;
console.log(++ idade);

// Operadores De atribuição //
let valorTeclado = 100;
console.log(valorTeclado);

// Operadores de igualdade //
// restrita //
console.log( === 1);

// solta ignora aspas //
console.log(1 == 1);

//Operador ternario //
// tem um cliente, 100 pontos = premium, 

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comun';
console.log(tipo);


// Lógicos //
// (&&)
// retorna True se os dois operandos forem True //

console.log(true && true);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

// Operador lógico ou (||)
// retorna true se um dos operandos forem true

// Operador not (!)
let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);

// Comparadores lógicos com valores não booleanos //
// falsy //

//undefined
//null
//0
//false
//''
//NaN = not an number

// Truthy //
// Bitwise //
