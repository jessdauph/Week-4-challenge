var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionsContainerEl = document.getElementById('options');
var questionTitle = document.getElementById ('Question-title')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var countdownEl = document.getElementById('countdown')
var timeBoxEl = document.getElementById ('timeBox')
var timeLeft = 5;
var buttonContainer= document.getElementById("button-container")

function countdown () {
    
    var timerInterval= setInterval(timer, 1000)
     function timer() { 
    // timeLeft--;
    timeLeft= timeLeft -1;
    // console.log (timeLeft)
    countdownEl.textContent = `${timeLeft} second(s)`;
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        timeBoxEl.innerHTML = "Time's up!";
        
         }
    } 
}
var score = 0;

// let shuffledQuestions;
var currentQuestionIndex=0;

var questions = [
    {
        question: 'What color was Marilyn Monroes natural hair color?',
        answers: ['red', 'brown', 'blonde', 'black' ],
        correct: 'red'
    
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
    // shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    showQuestion();
    nextButton.classList.remove('hide')
    countdown()
}
function showQuestion() {
    
    buttonContainer.innerHTML = ""
    questionTitle.innerHTML = questions[currentQuestionIndex].question;

// console.log (questions[currentQuestionIndex].answers) 

var currentQuestionChoices= questions[currentQuestionIndex].answers

for(var i=0; i<currentQuestionChoices.length;i++){
    console.log (currentQuestionChoices[i])
    var newButton= document.createElement("button")
    newButton.setAttribute("class", "option")
    newButton.setAttribute("value", currentQuestionChoices[i])
    newButton.innerHTML = currentQuestionChoices[i]
    buttonContainer.append(newButton)
}
}
function nextQuestion(event) {
   
    var answerButton = event.target;
    console.log (answerButton.value)
    if (!answerButton.matches(".option")){
        return
    }
    if(answerButton.value !== questions[currentQuestionIndex].correct){
        console.log  ("It's working!")
    }
    currentQuestionIndex++
    showQuestion();
}
// nextButton.addEventListener('click', nextQuestion);
    buttonContainer.onClick= nextQuestion
