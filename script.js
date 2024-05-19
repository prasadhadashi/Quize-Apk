console.log('Welcome to Quiz');

const questions = [
    {
        question: 'What is the capital of india?',
        answers:[
            {text: "New Delhi", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Jaipur", correct: false},
            {text: "Bhopal", correct: false},
        ]
    },
    {
        question: 'What is the capital of russia?',
        answers:[
            {text: "New Delhi", correct: false},
            {text: "Moscow", correct: true},
            {text: " Petersburg", correct: false},
            {text: "Sergey Sobyanin", correct: false},
        ]
    },
    {
        question: 'What is the capital of japan?',
        answers:[
            {text: "Tokyo", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Jaipur", correct: false},
            {text: "Bhopal", correct: false},
        ]
    },
    {
        question: 'What is the capital of Afghanistan?',
        answers:[
            {text: " Kabul", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Jaipur", correct: false},
            {text: "Bhopal", correct: false},
        ]
    },
    {
        question: 'What is the capital of  Albania?',
        answers:[
            {text: "Tirana", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Jaipur", correct: false},
            {text: "Bhopal", correct: false},
        ]
    },
    {
        question: 'What is the capital of Algeria?',
        answers:[
            {text: "Algiers", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Jaipur", correct: false},
            {text: "Bhopal", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = ()=>{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

const showQuestion = ()=>{
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

const resetstate = ()=>{
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
}};

const selectAnswer = (e)=>{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore(){
    resetstate();
    questionElement.innerHTML = `You got ${score} Out Of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "Block";
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();