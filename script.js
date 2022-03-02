let order = []
let clickedOrder = []
let score = 0

//Select colored blocks

const blueBlock = document.querySelector('.block-blue')
const yellowBlock = document.querySelector('.block-yellow')
const greenBlock = document.querySelector('.block-green')
const redBlock = document.querySelector('.block-red')

// Logic - Create random color sequence

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) +1)
    }
}

// Highlight next color
let lightColor = (element, rnumber) =>{
    let number = rnumber * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected')
    });
}

// Check if the clicked buttons against the ramdon order displayed

let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }

    if(clickedOrder.length == order.length){
       alert(`Pontuação: ${score}\n Você acertou!!! Iniciando o próximo nivel!`)
       nextLevel()
    }
}

// User click function

let click = (color) =>{
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)

    
}


// Return color function

let createColorElement = (color) =>{

    if(color == 0){
        return greenBlock
    } else if(color == 1){
        return redBlock
    } else if(color == 2){
        return yellowBlock
    } else if(color == 3){
        return blueBlock
    }
}


// Forward to next level

let nextLevel = () =>{
    score++
    shuffleOrder()
}


// Game over/Restart game function

let gameOver = () =>{
    alert(`Pontuação: ${score}! \n Você perdeu o jogo! \n Clique em Ok para iniciar um novo jogo` )
    order = []
    clickedOrder = []
    playGame()
}



// Starting Game
let playGame = ()=>{

    alert('Bem vindo ao Genesis! \n Iniciando novo jogo!')
    score = 0
    nextLevel()
}

greenBlock.addEventListener('click', click(0))
redBlock.addEventListener('click', click(1))
yellowBlock.addEventListener('click', click(2))
blueBlock.addEventListener('click', click(3))

// Actions for clicking
greenBlock.onclick = () => click(0)
redBlock.onclick = () => click(1)
yellowBlock.onclick = () => click(2)
blueBlock.onclick = () => click(3)



playGame()