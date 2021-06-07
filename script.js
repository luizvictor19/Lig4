// Arthur //


// Caroline //


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
