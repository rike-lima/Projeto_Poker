function ativarMenu() {
    var menuHamburguer = document.getElementById('menuHamburguer');
    if (menuHamburguer.style.display === 'none') {
        menuHamburguer.style.display = 'block';
    } else {
        menuHamburguer.style.display = 'none';
    }
}

const $startGameButton = document.querySelector(".start_quiz");
const $questionsContainer = document.querySelector(".questions_container");
const $answersContainer = document.querySelector(".answers_container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next_question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0


function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnwer = document.createElement("button")
        newAnwer.classList.add("button", "answer")
        newAnwer.textContent = answer.text
        if (answer.correct) {
            newAnwer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnwer)

        newAnwer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $nextQuestionButton.classList.add("hide")
}

var controle_acertos = 0
function selectAnswer(event) {
    var answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++
    } else {
        answerClicked.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        }
        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions.length
    const acertos = Math.floor(totalCorrect * 100 / totalQuestion)

    let mensagem = ""

    switch (true) {
        case (acertos == 100):
            mensagem = ''
            break
        case (acertos == 90):
            mensagem = ''
            break
        case (acertos == 80):
            mensagem = ''
            break
        case (acertos == 70):
            mensagem = ''
            break
        case (acertos == 60):
            mensagem = ''
            break
        case (acertos == 50):
            mensagem = ''
            break
        case (acertos == 40):
            mensagem = ''
            break
        case (acertos == 30):
            mensagem = ''
            break
        case (acertos == 20):
            mensagem = ''
            break
        case (acertos == 10):
            mensagem = ''
            break
        default:
            mensagem = ''
    }

    $questionsContainer.innerHTML =
        `
    <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestion} questões!
        <span style=''>Você é: ${mensagem}</span>
    </p>
    <div class="last_buttons">
    <button onclick="window.location.reload()" class="button">
    Refazer
    </button>
    </div>
    `
}

const questions = [
    {
        question: "Pergunta 1/10 - Qual dessas combinações é a melhor? ",
        answers: [
            { text: "Straigth Flush", correct: false },
            { text: "Royal Straigth Flush", correct: true },
            { text: "Full House", correct: false },
            { text: "Quadra", correct: false }
        ]
    },
    {
        question: "Pergunta 2/10 - Como se chama uma mão composta por cinco cartas todas do mesmo naipe?",
        answers: [
            { text: "Straight", correct: false },
            { text: "Full House", correct: false },
            { text: "Flush", correct: true },
            { text: "River", correct: false }
        ]
    },
    {
        question: "Pergunta 3/10 - Quantas cartas de cada naipe há no baralho?",
        answers: [
            { text: "13", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "11", correct: false }
        ]
    },
    {
        question: "Pergunta 4/10 - Qual o nome da aposta obrigatória que os jogadores devem colocar no inicio da rodada?",
        answers: [
            { text: "Button ", correct: false },
            { text: "Blind", correct: true },
            { text: "Dealer", correct: false },
            { text: "Under the Gun (UTG)", correct: false }
        ]
    },
    {
        question: "Pergunta 5/10 - Qual a mão vencedora no seguinte board: A♠ | K♠ | 2♥ | 3♣ | Q♠ ",
        answers: [
            { text: "A♥|A♦", correct: false },
            { text: "J♠|T♥", correct: false },
            { text: "4♦|5♠", correct: false },
            { text: "T♠|9♠ ", correct: true }
        ]
    },
    {
        question: "Pergunta 6/10 -Qual a mão vencedora no seguinte board: A♠ | 2♠ | A♥ | A♣ | 7♠ ",
        answers: [
            { text: "2♦|3♦", correct: false },
            { text: "T♠|9♠", correct: false },
            { text: "8♥|7♣", correct: true },
            { text: "2♥|2♣", correct: false }
        ]
    },
    {
        question: "Pergunta 7/10 - Qual o melhor combo de mão Pré-Flop ",
        answers: [
            { text: "K|K", correct: false },
            { text: "K|A", correct: false },
            { text: "T|T", correct: false },
            { text: "A|A", correct: true }
        ]
    },
    {
        question: "Pergunta 8/10 -Qual o nome de um board com 3 cartas comunitárias abertas: A♠ | K♠ | 2♥ ",
        answers: [
            { text: "Flop", correct: true },
            { text: "River", correct: false },
            { text: "Turn", correct: false },
            { text: "Dealer", correct: false }
        ]
    },
    {
        question: "Pergunta 9/10 - Qual a melhor opção abaixo que se refere aos esportes da mente?",
        answers: [
            { text: "Xadrez", correct: false },
            { text: "Poker", correct: false },
            { text: "Todas as opções", correct: true },
            { text: "Bridge", correct: false }
        ]
    },
    {
        question: "Pergunta 10/10 - Qual a mão vencedora no seguinte board: K♠ | 2♠ | K♥ | A♣ | 3♠ ",
        answers: [
            { text: "A♠|7♠", correct: false },
            { text: "K♣|K♦", correct: true },
            { text: "4♥|5♠", correct: false },
            { text: "3♥|3♦", correct: false }
        ]
    },
]