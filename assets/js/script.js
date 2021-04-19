
/*A object called quiz that is constructed after passing in a questions variable*/
var quiz = function(questions){
    //this.name = "";
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
};
/*utilizing a prototype based on w3 school documentation*/
quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

quiz.prototype.guess = function(answer){
    if(this.getQuestion().isCorrect(answer)){
        this.score++;
    }
    this.questionIndex++;
}

quiz.prototype.isDone = function() {
    return this.questionIndex === this.questions.length;
}


var questions = function(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
}

questions.prototype.isCorrect = function(choice){
    return this.answer === choice;
}

var localStorage = window.localStorage;
var highScores = localStorage.getItem('highScores') ? JSON.parse(localStorage.getItem('highscores')): [];
var timerId;
var quizStartBtn = document.getElementById("init-btn");
var highScoreBtn = document.getElementById("hs-button");
var quizBoardEl = document.getElementById("quiz-board");
var timeLeft = document.getElementById("timer");
var timeEl = 60;



var getQuestion = function() {
    console.log(quizAttempt.isDone());
    if (quizAttempt.isDone()) {
        //save scores
        saveScores()
        console.log("Final Score is ", quizAttempt.score, " / ", qArray.length);
    }
    else {
        quizBoardEl.innerHTML = "";
        var qnaCard = document.createElement("div");
        console.log("Creating qnaCard: ", qnaCard);
        //qnaCard.setAttribute("id", "qna-card");
        var qQuestion = document.createElement("h2");
        //quizQuestion.setAttribute("id", "quiz-questions");
        qQuestion.textContent = quizAttempt.getQuestion().question;
        qnaCard.appendChild(qQuestion);
        var mcOptions = quizAttempt.getQuestion().options
        for(var i = 0; i< mcOptions.length ; i++) {
            console.log("Im in here");
            var qAnswers = document.createElement("button");
            //qAnswers.setAttribute("id", "quiz-answers");
            qAnswers.textContent = quizAttempt.getQuestion().options[i];

            //qAnswers.setAttribute("questionId", quiz.questionIndex);
            qAnswers.setAttribute("mcChoiceId", i);
            console.log("Button Element being made: ", qAnswers);
            qAnswers.addEventListener("click", checkAns);
            qnaCard.appendChild(qAnswers);

        }
        quizBoardEl.appendChild(qnaCard);
    }


}

var checkAns = function(event) {
    //var qNum = event.target.getAttribute('questionId');
    var choiceSelection = event.target.getAttribute('mcChoiceId');
    var option = quizAttempt.getQuestion().options;
    quizAttempt.guess(option[choiceSelection]);
    getQuestion();
}

var setAttributes = function(el, options) {
    Object.keys(options).forEach(function(attr) {
        el.setAttribute(attr, options[attr]);
    })
};

var saveScores = function() {
    clearInterval(timerId);
    quizBoardEl.innerHTML = "";
    var score = quizAttempt.score;
    console.log("Your initial Score " + score);
    var bonus = 0;
    if(quizAttempt.isDone()) {
        var congratsMsg = document.createElement("h1");
        congratsMsg.textContent = "Congrats You Finished";
        quizBoardEl.appendChild(congratsMsg);
    }
    else {
        var loserMsg = document.createElement("h1")
        loserMsg.textContent = "Too bad You could not finish";
        quizBoardEl.appendChild(loserMsg);
    }
    bonus = timeLeft.textContent;
    bonus = parseInt(bonus);
    console.log(timeLeft);
    score = score + bonus;
    console.log("Your score after your bonus " + score);

    var formInput = document.createElement("form");

    var divNameInput = document.createElement("div");
    var nameInput = document.createElement("input");
    setAttributes(nameInput, {"class": "userNameInput", "id": "initialsInput", "type": "text", "name": "Initials", "placeholder": "Enter your initials" ,"maxlength":"3"});
    divNameInput.appendChild(nameInput);
    formInput.appendChild(divNameInput);

    var divScoreInput = document.createElement("div");
    var scoreInput = document.createElement("h3");
    //scoreInput.innerHTML = quizAttempt.score + "/" + qArray.length;
    scoreInput.textContent = score;
    divScoreInput.appendChild(scoreInput);
    formInput.appendChild(divScoreInput);

    var divButtonInput = document.createElement("div");
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save Score";
    saveButton.setAttribute("type", "submit");
    saveButton.addEventListener("submit", setScore);
    divButtonInput.appendChild(saveButton);

    var resetButton = document.createElement("button");
    resetButton.textContent = "Reset Quiz";
    resetButton.addEventListener("click", resetQuiz);
    divButtonInput.appendChild(resetButton);
    formInput.appendChild(divButtonInput);

    quizBoardEl.appendChild(formInput);


}

var setScore = function(event){
    event.preventDefault();
    console.log("IAMHERE");
    var initials = event.target.previousElementSibling;
    console.log("Should be something " + initials);
    if(initials.value != null) {
        var userScore = {
            user: initials.value,
            score: score
        }

        console.log("Should be another thing " + userScore);

        highScores.push(userScore);
        highScores.sort(function (a,b){
            return b.score - a.score;
        });
        console.log("High Score array "+ highScore);
        highScores = highScores.slice(0,5);
        localStorage.setItem('highScores',JSON.stringify(highScores));
    }
    else {
        alert("User must enter initials to save high score");
    }

}


var resetQuiz = function() {
    location.reload();
}


var clockTick = function() {
    if (timeEl >= 0) {
        timeLeft.textContent = timeEl;
        timeEl--
    }
    else if (timeEl == 0){
        timerEl.textContent = "00";
        
        saveScores();

    }
}

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.innerHTML = "";
    // un-hide questions section

    //questionsEl.removeAttribute("class");
    // start timer
    timerId = setInterval(clockTick, 1000);
    // show starting time
    timeLeft.textContent = timeEl;

    /*var qnaCard = document.createElement("div");
    qnaCard.setAttribute("id", "qna-card");
    var quizQuestion = document.createElement("h2");
    quizQuestion.setAttribute("id", "quiz-questions");*/


    getQuestion();
}

var seeHighScore = function(){
    quizBoardEl.innerHTML = "";
    var scoreBoardTitle = document.createElement("h1")
    scoreBoardTitle.textContent = "High Scores";
    quizBoardEl.appendChild(scoreBoardTitle);
    var highScoreList = document.createElement("ul");
    highScoreList.setAttribute("id","high-score-list");
    for (var i = 0; i < highScores.length; i++){
        var highScore = document.createElement("li");
        highScore.textContent = i+1 + " - " + highScores[i];
        highScoreList.appendChild(highScore);
    };
    quizBoardEl.appendChild(highScoreList);

    var back2quizBtn = document.createElement("button");
    back2quizBtn.addEventListener("click", resetQuiz);
    quizBoardEl.appendChild(back2quizBtn);
}

var qArray = [
    new questions("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new questions("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new questions("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new questions("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new questions("What does JSON stand for", ["JavaScript Object Notation", "Java Syntax Object Notation", "Jenkins Semantic Oriented Nodes", "Jenny Smith Owns Nothing"], "JavaScript Object Notation")
];

var quizAttempt = new quiz(qArray);
highScoreBtn.addEventListener("click", seeHighScore)
quizStartBtn.addEventListener("click", startQuiz);

