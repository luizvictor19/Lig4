
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
    "BBBBBB"
];


// Arthur //


// Caroline //
//criar um array com todas as posições das div's:
const criarBoard = () => {
    for (let i = 0; i < board.length; i++) {
        let coluna = document.createElement('div');
        coluna.classList = "coluna"
        coluna.dataset.index = i
        container.appendChild(coluna);
        for (let j = 0; j < board[i].length; j++) {
            let linha = document.createElement('div');
            linha.classList = "linha"
            linha.dataset.index = j
            coluna.appendChild(linha);
        }
    }
}

criarBoard()

// Luiz //
document.getElementById("container").addEventListener("click", someFunction);
let torre = ''
function someFunction(event) {
  torre = event.target
//   torre = document.getElementsByClassName(torre)
} 

let jogada = 'vermelho'

function swapPlayer(event){
    torre = event.target
    let teste = event.currentTarget.children


    for(let i = 0; i < teste.length; i++){
        if(!teste[i].hasChildNodes()){
            if(jogada === 'vermelho'){
                let disco = document.createElement('div')
                disco.classList.remove('disco-black')
                disco.classList.add('disco-red')
                // torre.appendChild(disco)
                teste[i].appendChild(disco)
                jogada = 'preto'
                break
            }else if(jogada === 'preto'){
                let disco = document.createElement('div')
                disco.classList.remove('disco-red')
                disco.classList.add('disco-black')
                // torre.appendChild(disco)
                teste[i].appendChild(disco)
                jogada = 'vermelho'
                break
            }
            
        }
    }

}

let array = document.querySelectorAll('.coluna')

for(let i = 0; i < array.length; i++){
    array[i].addEventListener("click", swapPlayer)
}

// function addDisco() {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i].children[i])
//     }
// }
// addDisco()

// Lucas //
