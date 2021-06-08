
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = "container";
body.appendChild(container);
let botaoReset = document.getElementById('botao_resetar')
let modalReset = document.getElementById('ganhou')

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
    container.style.display = 'flex'
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

let jogada = 'vermelho'

function swapPlayer(event){

    let torre = event.currentTarget.children


    for(let i = 0; i < torre.length; i++){
        if(!torre[i].hasChildNodes()){
            if(jogada === 'vermelho'){
                let disco = document.createElement('div')
                disco.classList.remove('disco-black')
                disco.classList.add('disco-red')
                torre[i].appendChild(disco)
                jogada = 'preto'
                break
            } else if(jogada === 'preto'){
                let disco = document.createElement('div')
                disco.classList.remove('disco-red')
                disco.classList.add('disco-black')
                torre[i].appendChild(disco)
                jogada = 'vermelho'
                break
            }
            
        }
    }
    horizontalWinCondition()
    verticalWinCondition()
}

const getTowers = () => {
    let array = document.querySelectorAll('.coluna')

for(let i = 0; i < array.length; i++){
    array[i].addEventListener("click", swapPlayer)
}
    
}
getTowers()


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
                    container.style.display = 'none'
                    modalReset.style.display = 'flex'
                    
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
                    container.style.display = 'none'
                    modalReset.style.display = 'flex'
                }
            }
        }
    }
}


const gameReset = () => {
    container.innerHTML = ''
    modalReset.style.display = 'none'
    criarBoard()
    getTowers()
}
botaoReset.addEventListener("click", gameReset);
