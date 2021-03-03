/********************/
// Criando Objeto //

let nome = 'Rafael';
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
};
/**********************************/
// Clonando Objetos //

const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertival: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function () {
        console.log("Fazendo ligação...")
    }
}
// forma 1
const novoObjeto = Object.assign({}, celular)
console.log(novoObjeto);

// forma 2
const objeto2 = { ...celular };
console.log(objeto2);

//exercise

const livro = {
    capa: 'black',
    contraCapa: 'red',
}

const objClone = Object.assign({}, livro)
console.log(objClone);

/*********************************/
// Function Math // 
Math.random()
Math.max()
Math.min()
Math.pow(9, 2)

/*********************************/
// String //
// Tipo Primitivo 
const mensagem = 'minha primeira mensagem';

// Tipo objeto 
const outraMensagem = new String('bom dia');

/*********************************/
// Template literal //
const mensagem =
    'Oi isso é a minha\n' +
    '\'primeira\' mensagem';

// Object {}
// Boolean true, false
// String '', ""
// Template ``
const outra = `Oi isso é minha 'primeira' mensagem`;

/*********************************/
// Date lidando com datas
const data1 = new Date();
const date2 = new Date('March 06 2019 09:30');
const date3 = new Date(2020, 03, 06, 9, 30);