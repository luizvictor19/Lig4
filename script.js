
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
    verticalWin()
    horizontalWin()
    firstDiagonalWin()
    secondDiagonalWin()
}

const getTowers = () => {
    let array = document.querySelectorAll('.coluna')

for(let i = 0; i < array.length; i++){
    array[i].addEventListener("click", swapPlayer)
}
    
}
getTowers()

// Lucas //


    // Compare Function //
function winCompare (item, firstNextItem, secondNextItem, thirdNextItem) {
    if (item !== undefined &&
        firstNextItem !== undefined &&
        secondNextItem !== undefined &&
        thirdNextItem !== undefined) {
         
        if (item.className === firstNextItem.className &&
            item.className === secondNextItem.className &&
            item.className === thirdNextItem.className) {
            // alert(item.className + ' win')
            container.style.display = 'none'
            modalReset.style.display = 'flex'
        }
    }
}

let horizontalCompare = 2
let verticalCompare = 3

    // Vertical Win Condition //
function verticalWin () {
    for (let i = 0; i < container.children.length; i++) {
        for (let j = 0; j <= horizontalCompare; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i].children[j + 1].children[0]
            let secondNextItem = container.children[i].children[j + 2].children[0]
            let thirdNextItem = container.children[i].children[j + 3].children[0]

            winCompare (item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

    // Horizontal Win Condition //
function horizontalWin () {
    for (let i = 0; i <= verticalCompare; i++) {
        for (let j = 0; j < container.children[i].children.length; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i + 1].children[j].children[0]
            let secondNextItem = container.children[i + 2].children[j].children[0]
            let thirdNextItem = container.children[i + 3].children[j].children[0]

            winCompare (item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

    // First Diagonal Win Condition //
function firstDiagonalWin () {
    for (let i = 0; i <= verticalCompare; i++) {
        for (let j = 0; j <= horizontalCompare; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i + 1].children[j + 1].children[0]
            let secondNextItem = container.children[i + 2].children[j + 2].children[0]
            let thirdNextItem = container.children[i + 3].children[j + 3].children[0]

            winCompare (item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

    // Second Diagonal Win Condition //
function secondDiagonalWin () {
    for (let i = container.children.length - 1; i >= verticalCompare; i--) {
        for (let j = 0; j <= horizontalCompare; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i - 1].children[j + 1].children[0]
            let secondNextItem = container.children[i - 2].children[j + 2].children[0]
            let thirdNextItem = container.children[i - 3].children[j + 3].children[0]

            winCompare (item, firstNextItem, secondNextItem, thirdNextItem)
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
