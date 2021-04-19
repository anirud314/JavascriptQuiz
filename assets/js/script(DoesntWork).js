var quiz = [
    {
        question:"What does JSON stand for",
        choices: 
        [
            "JavaScript Object Notation",
            "Java Syntax Object Notation",
            "Jenkins Semantic Oriented Nodes",
            "Jenny Smith Owns Nothing"
        ],
        answer: 0
    },

    {
        question:"2",
        choices: 
        [
            "",
            "",
            "",
            ""
        ],
        answer: 0
    },

    {
        question:"3",
        choices: 
        [
            "",
            "",
            "",
            ""
        ],
        answer: 0
    },

    {
        question:"4",
        choices: 
        [
            "",
            "",
            "",
            ""
        ],
        answer: 0
    },

    {
        question:"5",
        choices: 
        [
            "",
            "",
            "",
            ""
        ],
        answer: 0
    },

];
var userScore = 0;
var timerEl = document.getElementById("timer");
var quizStartEl = document.getElementById("quiz-start");
var quizBoardEl = document.getElementById("quiz-board");
var quizStartBtn = document.getElementById("init-btn");
var pageContentEl = document.getElementById("page-content");
var quizCountdown = function(){
    var quizTimer = 60;
    //var timeInterval = setInterval(/*InsertGameFunctionHere*/, 1000)
}

var checkAns = function(choiceId, questionId){
    console.log("question id is "+ questionId);
    console.log("Choice Id is " +choiceId);
    console.log("Answer is " + quiz[questionId].answer);
    if(choiceId == quiz[questionId].answer){
        userScore++;
        console.log("Correct");
        return;
    }
    else {
        console.log("incorrect");
        return;
    }
    

}

var createQuestionEl = function(event){
    event.preventDefault();
    quizStartEl.innerHTML = "";
    for (var i = 0; i < quiz.length; i++){
        quizBoardEl.innerHTML = "";
        var quizQuestion = document.createElement("h2");
        console.log(quizQuestion);
        quizQuestion.className = "quiz-question";
        quizQuestion.setAttribute("questionId", i);
        quizBoardEl.appendChild(quizQuestion);
        quizQuestion.textContent = quiz[i].question;

        var choiceContainerEl = document.createElement("div")
        choiceContainerEl.className = "answer-box";
        for(var j = 0; j < quiz[i].choices.length; j++){
            var quizChoice = document.createElement("button");
            quizChoice.className = "quiz-choice";
            quizChoice.setAttribute("choiceId", j);
            quizChoice.setAttribute("questionId", i);
            quizChoice.textContent = quiz[i].choices[j];
            choiceContainerEl.appendChild(quizChoice);
        }
        quizBoardEl.appendChild(choiceContainerEl);
        return answerButtonHandler;
        

    }
    return;
}

var answerButtonHandler = function(event) {
    console.log(event.target);
    if(event.target.matches(".quiz-choice")){
        var choiceId = event.target.getAttribute("choiceId");
        var questionId = event.target.getAttribute("questionId");
        console.log(choiceId , questionId);
        checkAns(choiceId, questionId);
        //return (choiceId, questionId);
    }
    return;

    

}
var createHighScoreEl = function(){

}

quizStartBtn.addEventListener("click", createQuestionEl);

pageContentEl.addEventListener("click", answerButtonHandler);
