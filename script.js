
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
            } else if(jogada === 'preto'){
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
    horizontalWinCondition()
    verticalWinCondition()
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


    // Horizontal Win Condition //

function horizontalWinCondition () {
    for (let i = 0; i < container.children.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (container.children[i].children[j].innerHTML !== "" &&
                container.children[i].children[j + 1].innerHTML !== "" &&
                container.children[i].children[j + 2].innerHTML !== "" &&
                container.children[i].children[j + 3].innerHTML !== "") {
                 
                    // Horizontal //
                if (container.children[i].children[j].children[0].className === container.children[i].children[j + 1].children[0].className &&
                    container.children[i].children[j].children[0].className === container.children[i].children[j + 2].children[0].className &&
                    container.children[i].children[j].children[0].className === container.children[i].children[j + 3].children[0].className) {
                    alert(container.children[i].children[j].children[0].className + ' win')
                }
            }
        }
    }
}

    // Vertical Win Condition //

function verticalWinCondition () {
    for (let i = 0; i < container.children.length; i++) {
        for (let j = 0; j <= 3; j++) {
            if (container.children[i].children[j].innerHTML !== "" &&
                container.children[i + 1].children[j].innerHTML !== "" &&
                container.children[i + 2].children[j].innerHTML !== "" &&
                container.children[i + 3].children[j].innerHTML !== "") {
                 
                    // Vertical //
                if (container.children[i].children[j].children[0].className === container.children[i + 1].children[j].children[0].className &&
                    container.children[i].children[j].children[0].className === container.children[i + 2].children[j].children[0].className &&
                    container.children[i].children[j].children[0].className === container.children[i + 3].children[j].children[0].className) {
                    alert(container.children[i].children[j].children[0].className + ' win')
                }
            }
        }
    }
}