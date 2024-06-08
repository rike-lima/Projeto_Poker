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
        question: "Pergunta 1/10 - ",
        answers: [
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },
    {
        question: "Pergunta 2/10 - ",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false }
        ]
    },
    {
        question: "Pergunta 3/10 - ",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },
    {
        question: "Pergunta 4/10 - ",
        answers: [
            { text: " ", correct: false },
            { text: " ", correct: true },
            { text: " ", correct: false },
            { text: " ", correct: false }
        ]
    },
    {
        question: "Pergunta 5/10 - ",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "Pergunta 6/10 - ",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false }
        ]
    },
    {
        question: "Pergunta 7/10 - ",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },
    {
        question: "Pergunta 8/10 - ",
        answers: [
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },
    {
        question: "Pergunta 9/10 - ",
        answers: [
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: true }
        ]
    },
    {
        question: "Pergunta 10/10 - ",
        answers: [
            { text: "", correct: false },
            { text: "", correct: true },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    },
]