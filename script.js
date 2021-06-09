const audio = document.querySelector('audio');
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = "container";
body.appendChild(container);
let botaoReset = document.getElementById('botao_resetar')
let modalReset = document.getElementById('ganhou')
let winnerText = document.getElementById('ganhouTexto')
let acabou = false

const board = [
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB",
    "BBBBBB"
];

let jogada = 'vermelho'
let horizontalCompare = 2 // Times needed to compare horizontally
let verticalCompare = 3 // Times needed to compare vertically

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

function swapPlayer(event) {
    audio.volume = 0.1
    audio.play();

    let torre = event.currentTarget.children

    for (let i = 0; i < torre.length; i++) {
        if (!torre[i].hasChildNodes()) {

            if (jogada === 'vermelho' && acabou === false) {
                let disco = document.createElement('div')
                disco.classList.remove('disco-black')
                disco.classList.add('disco-red')
                torre[i].appendChild(disco)
                jogada = 'preto'
                break

            } else if (jogada === 'preto' && acabou === false) {
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
    draw()
}

const getTowers = () => {
    let array = document.querySelectorAll('.coluna')

    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", swapPlayer)
    }
}
getTowers()

function winCompare(item, firstNextItem, secondNextItem, thirdNextItem) {
    if (item !== undefined &&
        firstNextItem !== undefined &&
        secondNextItem !== undefined &&
        thirdNextItem !== undefined) {

        if (item.className === firstNextItem.className &&
            item.className === secondNextItem.className &&
            item.className === thirdNextItem.className) {
            
            // Modal Display //
            if (item.className === 'disco-red') {
                acabou = true
                winnerText.innerText = 'Petter Quill Ganhou!'
                modalReset.classList.add('petterWin')
            }
            else if (item.className === 'disco-black') {
                acabou = true
                winnerText.innerText = 'Rocket Raccoon Ganhou!'
                modalReset.classList.add('raccoonWin')
            }

            setTimeout(mostrarVitorioso, 700);
            //setTimeout()
        }
    }
}

// Vertical Win Condition //
function verticalWin() {
    for (let i = 0; i < container.children.length; i++) {
        for (let j = 0; j <= horizontalCompare; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i].children[j + 1].children[0]
            let secondNextItem = container.children[i].children[j + 2].children[0]
            let thirdNextItem = container.children[i].children[j + 3].children[0]

            winCompare(item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

// Horizontal Win Condition //
function horizontalWin() {
    for (let i = 0; i <= verticalCompare; i++) {
        for (let j = 0; j < container.children[i].children.length; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i + 1].children[j].children[0]
            let secondNextItem = container.children[i + 2].children[j].children[0]
            let thirdNextItem = container.children[i + 3].children[j].children[0]

            winCompare(item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

// First Diagonal Win Condition //
function firstDiagonalWin() {
    for (let i = 0; i <= verticalCompare; i++) {
        for (let j = 0; j <= horizontalCompare; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i + 1].children[j + 1].children[0]
            let secondNextItem = container.children[i + 2].children[j + 2].children[0]
            let thirdNextItem = container.children[i + 3].children[j + 3].children[0]

            winCompare(item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

// Second Diagonal Win Condition //
function secondDiagonalWin() {
    for (let i = container.children.length - 1; i >= verticalCompare; i--) {
        for (let j = 0; j <= horizontalCompare; j++) {

            let item = container.children[i].children[j].children[0]
            let firstNextItem = container.children[i - 1].children[j + 1].children[0]
            let secondNextItem = container.children[i - 2].children[j + 2].children[0]
            let thirdNextItem = container.children[i - 3].children[j + 3].children[0]

            winCompare(item, firstNextItem, secondNextItem, thirdNextItem)
        }
    }
}

// Draw Condition //
function draw() {
    let primeiraLinha = document.querySelectorAll('[data-index="5"]')
    let contagem = 0

    for (let i = 0; i < primeiraLinha.length; i++) {
        if (i !== 5) {
            if (primeiraLinha[i].hasChildNodes()) {
                contagem += 1
            }
        }
    }
    // Modal Display //
    if (contagem === 7) {

        winnerText.innerText = 'Empatou!'
        modalReset.classList.add('draw')
        setTimeout(mostrarVitorioso, 700);
    }

}

// Reset Game Function //
const gameReset = () => {
    container.innerHTML = ''
    modalReset.classList.remove('draw')
    modalReset.classList.remove('petterWin')
    modalReset.classList.remove('raccoonWin')
    modalReset.style.display = 'none'
    acabou = false
    
    criarBoard()
    getTowers()
}

const mostrarVitorioso = () => {
    container.style.display = 'none'
    modalReset.style.display = 'flex'
}


botaoReset.addEventListener("click", gameReset);

