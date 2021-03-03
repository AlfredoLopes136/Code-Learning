/******** Factory Function ************/
// 

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

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar: function () {
            console.log("Fazendo ligação...")
        }
    }

}
//Pascal Case UmDoisTresQuuatro -- onde todo o começo de uma palavra é maiuscula
//O this é usado para referenciar o objeto
// Constructory Function

function Celular() {
    this.marcaCelular = this.marcaCelular,
        this.tamanhoTela = this.tamanhoTela,
        this.capacidadeBateria = this.capacidadeBateria,
        this.ligar = function () {
            console.log("Fazendo Ligação...");
        }

}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);

// exercise
const Notebook = {
    marcaNotebook: 'thinkpad',
    tamanhoTela: {
        vertival: 144,
        horizontal: 70
    },
    capacidadeBate: 5000,
    ligar: function () {
        console.log('ligando notebook, por favor aguarde')
    }
}

/*********************************/
// Constructor function

//Criar um objeto postagem

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = false
}
let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);