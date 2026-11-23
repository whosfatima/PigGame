// 'گرفتن المنت ها از اچ تی ام ال
const scoreOne = document.getElementById('score--0')
const scoreTwo = document.getElementById('score--1')
const dice = document.getElementById('dice')
const btnRoll = document.getElementById('btn--roll')
const btnHold = document.getElementById('btn--hold')
const btnNew = document.getElementById('btn--new')
const currentOne = document.getElementById('current--0')
const currentTwo = document.getElementById('current--1')
const playerOne = document.getElementById('player--0')
const playerTwo = document.getElementById('player--1')
const currentLabel = document.getElementById('current-label')
const currentLabelTwo = document.getElementById('current-label-two')

// معلوم کردن مقدار های اولیه
scoreOne.textContent = 0
scoreTwo.textContent = 0
currentOne.textContent = 0
currentTwo.textContent = 0
let randomNumOne = 0
let randomNumTwo = 0
let scorePlayerOne = 0
let scorePlayerTwo = 0

// معلوم کردن وضعیت تاس و ساختن عدد رندوم بین 1 تا 6
dice.classList.add('hidden')
let randomNumber = () => Math.trunc(Math.random() * 6) + 1

btnRoll.addEventListener('click', (e) => {
    e.preventDefault()
    // انداختن تاس به صورت گلوبال
    let getRandom = randomNumber()
    dice.src = `./assests/dice-${getRandom}.png`

    // شروع کردن شروط
    if (playerOne.classList.contains('player--active')) {
        if (getRandom === 1) {
            playerOne.classList.remove('player--active')
            playerTwo.classList.add('player--active')
            randomNumOne = 0
            currentOne.textContent = randomNumOne
// باید به این قسمت بیشتر برسم چون برام مهمه
            // randomNum(randomNumOne, currentOne)
        }
        else {
            randomNumOne = getRandom + randomNumOne

            currentOne.textContent = + randomNumOne
            dice.classList.remove('hidden')
        }
    }
    else if (playerTwo.classList.contains('player--active')) {

        if (getRandom === 1) {
            playerOne.classList.add('player--active')
            playerTwo.classList.remove('player--active')
            randomNumTwo = 0
            currentTwo.textContent = randomNumTwo
        }
        else {
            randomNumTwo = getRandom + randomNumTwo

            currentTwo.textContent = randomNumTwo
            dice.classList.remove('hidden')
        }
    }
})


btnHold.addEventListener('click', (e) => {
    e.preventDefault()
    if (playerOne.classList.contains('player--active')) {
        scorePlayerOne = randomNumOne + scorePlayerOne
        scoreOne.textContent = scorePlayerOne
        randomNumOne = 0
        currentOne.textContent = randomNumOne
        playerOne.classList.remove('player--active')
        playerTwo.classList.add('player--active')
    }
    else if (playerTwo.classList.contains('player--active')) {
        scorePlayerTwo = randomNumTwo + scorePlayerTwo
        scoreTwo.textContent = scorePlayerTwo
        randomNumTwo = 0
        currentTwo.textContent = randomNumTwo
        playerOne.classList.add('player--active')
        playerTwo.classList.remove('player--active')
    }
    if (scorePlayerOne >= 100) winner(playerOne, currentOne, currentLabel)
    else if (scorePlayerTwo >= 100) winner(playerTwo, currentTwo, currentLabelTwo)
})

// فانکشن گرفتن برنده
function winner(player, current, currentLabel) {
    player.classList.add('player--winner')
    btnRoll.disabled = true
    btnHold.disabled = true
    current.style.display = 'none'
    currentLabel.textContent = 'winner'
    dice.classList.add('hidden')
}

// عملیات با موفقیت شکست خورد
// // فانکشن شروع کردن شرط
// function getCondition(getRandom, playerOne, playerTwo, randomNum, current) {
//     if (getRandom === 1) {
//         playerOne.classList.remove('player--active')
//         playerTwo.classList.add('player--active')
//         randomNum = 0
//         current.textContent = randomNum
//     }
//     else {
//         randomNum = getRandom + randomNum

//         current.textContent = + randomNum
//         dice.classList.remove('hidden')
//     }
// }

// رسیدگی به این فانکشن
// فانکشن قسمت if
// function randomNum(randomNum, current) {
//     playerOne.classList.remove('player--active')
//     playerTwo.classList.add('player--active')
//     randomNum = 0
//     current.textContent = randomNumOne
// }

// دکمه شروع از اول
btnNew.addEventListener('click', () => window.location.reload())