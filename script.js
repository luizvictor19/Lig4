
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = "container";
body.appendChild(container);

const board = [
    "BBBBBBB",
    "BBBBBBB",
    "BBBBBBB",
    "BBBBBBB",
    "BBBBBBB",
    "BBBBBBB",
];


// Arthur //


// Caroline //
//criar um array com todas as posições das div's:
const criarBoard = () => {
    for (let i = 0; i < board.length; i++) {
        let linha = document.createElement('div');
        linha.classList = "linha"
        linha.dataset.index = i
        container.appendChild(linha);
        for (let j = 0; j < board[i].length; j++) {
            let coluna = document.createElement('div');
            coluna.classList = "coluna"
            coluna.dataset.index = j
            linha.appendChild(coluna);
        }
    }
}

criarBoard()

// Luiz //
let jogada = 'vermelho'
let torre = document.createElement('div')
torre.className = 'torre-teste'
document.body.appendChild(torre)
let disco = document.createElement('div')
torre.onclick = function() {
    swapPlayer()
}
function swapPlayer(){
    if(jogada === 'vermelho'){
        disco.classList.remove('disco-black')
        disco.classList.add('disco-red')
        torre.appendChild(disco)
        jogada = 'preto'
    }else if(jogada === 'preto'){
        disco.classList.remove('disco-red')
        disco.classList.add('disco-black')
        torre.appendChild(disco)
        jogada = 'vermelho'
    }
}


// Lucas //
