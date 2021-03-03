
/**********************************/

/********  If else **********/

// se a hora estiver entre as 6 horas até 12 horas
// entao vamos exibir: bom dia.
// se estiver entre as 12 até as 18 horas: boa tarde!
// caso contrario boa noite!

let hora = 10;
if (hora > 6 && hora < 12) {
    // codigo a ser executado
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");

}
else {
    console.log("Boa noite!");
}
*

    /************************************/

    /******** Switch Case ***************/


    let permissao; // comum, gerente, diretor

switch (permissao) {
    case 'comum':
        console.log("usúario comum");
        break;

    case 'gerente':
        console.log("usúario gerente");
        break;

    case 'diretor':
        console.log("usúario diretor");
        break;

    default:
        console.log("Usúario não conhecido!");

}

/**********************************/

/********* Laço For / Loop For ***********/
// 1.For
// 2.While
// 3.Do..While
// 4.For..In
// 5.For..of

//1.For
for (let i = 1; i < 5; i++) {
    if (i % 2 !== 0) { // operador modulos
        console.log(i);
    }
    console.log('Estou aprendendo!', i);
}

//2.While Loop
let i = 5;

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//3.Do While
let i = 0;
do {
    console.log('digitando');
    i++;
    while (i < 10);
}

//4.For..In

const pessoa = {
    nome: 'jhonatam',
    idade: 25
};
//key-value
for (let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//5.For..of
for (let cor of cores) {
    console.log(cor);
}

/**********************************/



/**********************************/
// Natureza Dinamica dos objetos //
const mouse = {
    cor: 'red',
    marca: 'daz'
}
mouse.velocidade = 5000;
mouse.trocaDPI = function () {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocaDPI;
console.log(mouse);



