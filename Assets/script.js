var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionsContainerEl = document.getElementById('options');
var questionTitle = document.getElementById ('Question-title')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

function countdown () {
    var timeLeft = 5;
    var timeInterval = setInterval
     {
    timeLeft--;
    timerInterval.textContent = `${timeLeft} second(s)`;
    if(timeLeft === 0) {
        clearInterval(timeInterval);
        timerInterval.textContent = "";
        displayMessage();
         }
    } 1000;
}
var score = 0;

let shuffledQuestions;
var currentQuestionIndex=0;

var questions = [
    {
        question: 'What color was Marilyn Monroes natural hair color?',
        answers: [
            { text: 'red ()', correct: true},
            { text: 'brown ()', correct: false},
            { text: 'blonde ()', correct: false},
            { text: 'black ()', correct: false},
        ]
    
    },
{
        question: 'How many teeth do an aardvark have?',
        answers: [
        { text: '30', correct: false },
        { text: '0', correct: true },
        { text: '50', correct: false },
        { text: '80', correct: false }
        ]
},
{
        question: 'What was Walt Disney afraid of?',
        answers: [
        { text: 'Children', correct: false },
        { text: 'Mice', correct: true },
        { text: 'Heights', correct: false },
        { text: 'Dogs', correct: false }
        ]
},
{
        question: 'On Sunday, in Columbus, Ohio, it is illegal to sell what?',
        answers: [
        { text: 'Chocolate', correct: false },
        { text: 'Alcohol', correct: false },
        { text: 'Gas', correct: false },
        { text: 'Cornflakes', correct: true }
    ]
}
]
startButton.addEventListener('click',startGame);

function startGame() {
    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    showQuestion();
    nextButton.classList.remove('hide')

}
function showQuestion() {
    var buttonContainer= document.getElementById("button-container")
    buttonContainer.innerHTML = ""
    questionTitle.innerHTML = questions[currentQuestionIndex].question;
console.log (questions[currentQuestionIndex].answers) 
var currentQuestionChoices= questions[currentQuestionIndex].answers
for(var i=0; i<currentQuestionChoices.length;i++){
    console.log (currentQuestionChoices[i])
    var newButton= document.createElement("button")
    newButton.innerHTML = currentQuestionChoices[i].text
    buttonContainer.append(newButton)
}
}
function nextQuestion() {
    currentQuestionIndex++
    showQuestion();
}
nextButton.addEventListener('click', nextQuestion);

