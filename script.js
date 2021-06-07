
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = "container";
body.appendChild(container);

const board = [
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
];


// Arthur //


// Caroline //
//criar um array com todas as posições das div's:
const criarBoard = () => {
    for (let i = 0; i < board.length; i++) {
        let linha = document.createElement('div');
        linha.classList = "linha"
        linha.dataset.index = i
        container.appendChild(linha)
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


// Lucas //
