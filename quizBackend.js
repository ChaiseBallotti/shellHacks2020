/* START: Converting Quiz to Class */
/*
class Answer {
    constructor(answerText) 
    {
        this.answerText = answerText;
    }
}

class Question {
    constructor(questionText, answerList , correctIndex) {
        this.questionText = questionText;
        this.answerList = answerList;
        this.correctIndex = correctIndex;
    }
    
    checkAnswer(AnswerIndex) {
        if (AnswerIndex == correctIndex) {
            return true;
        }
        
        return false;
    }
    
    display()
    {
        document.getElementById("question").innerHTML   =   this.questionText;
        
        for(var i = 0; i < answerList.length() - 1; i++) 
        {
            document.getElementById("answerPos" + i + 1).innerHTML = answerList[i].answerText;
        }
    }
}

Art Quiz {
    constructor(hame, questionlist) {
        this.name = name;
        this.questionList = questionlist;
        this.score = 0;
        this.AskedQuestionList = [];
        this.currentQuestion = 0;
    }
}
*/
/*  END - Converting Quiz to Class */

// Start: Implementing Class

function createQuiz()
{
    //load answers list
    
    //build question list
    var myAnswerList = [];
    myAnswerList[0] = new Answer("art stuff");
    myAnswerList[1] = new Answer("art stuff");
    
    var myQuestionList = [];
    myQuestionList[0] = new Question("Question about art?", myAnswerList, 0 );
    
    var myQuiz = new Quiz("Art personality quiz", myQuestionList);
}

// End: Implementing Class


// start old code
var quiz = [];
var currentQuiz; 
var quizScore;


function init()
{
    quizScore = 0;
    currentQuiz = 0;
    // hide all the things
    document.getElementById("pgQuiz").style.display = "none";
    document.getElementById("QuizResults").style.display = "none";
}

function loadQuiz() {//fix this 
    var Question1 = {qID:"1", questiontext:"Art question?", answer1:"art stuff", answer2:"art stuff", answer3:"art", answer4:"stuff... we can also have just two answers instead of 4", correctAnswer: "1", asked:"false"};
    
    var Question2 = {qID:"2", questiontext:"AQ", answer1:"AS", answer2:"AS", answer3:"AS", answer4:"AS", correctAnswer: "1", asked:"false"};
    
    var Question3 = {qID:"3", questiontext:"AQ", answer1:"blah", answer2:"blah", answer3:"art", answer4:"stuff", correctAnswer: "1", asked:"false"};
    
    var Question4 = {qID:"4", questiontext:"another question", answer1:"...", answer2:"...", answer3:"...", answer4:":)", correctAnswer: "1", asked:"false"};
    
    quiz[0] = Question1;
    quiz[1] = Question2;
    quiz[2] = Question3;
    quiz[3] = Question4;
    
}

function checkAnswer() {
    var answer = document.getElementsByName("answer");
    var selectedAnswer = 0;
    
    for(var i = 0; i < answer.length; i++) {
        if(answer[i].checked)
           selectedAnswer = answer[i].value;
    }    
    if(selectedAnswer == "") {
        alert("You haven't chosen an answer");
        return false;}
    else {
        if(quiz[currentQuiz].correctAnswer == (selectedAnswer)) 
            {++quizScore;}
    }
    quiz[currentQuiz].asked = "true";
    nextQuestion();
}

function nextQuestion() 
{
    //uncheck previous ansewer
    document.getElementById("OptAnswer1").checked = false;
    document.getElementById("OptAnswer2").checked = false;
    document.getElementById("OptAnswer3").checked = false;
    document.getElementById("OptAnswer4").checked = false;
    //count how many questions are true
    var numberAsked = 0;
    // currentQuiz = (Math.floor((Math.random() * 4) + 1)) - 1;
    for(var i = 3;i >= 0; i--) {
        if(quiz[i].asked == "true") {
            numberAsked++;
        } else {
            currentQuiz = i;
        }
    }
    //display question and answers
   if(numberAsked == 4) { // quiz over
       //show results on page
       ResultsInfo();
   } else {
       
    document.getElementById("question").innerHTML=quiz[currentQuiz].questiontext;
    document.getElementById("answerPos1").innerHTML=quiz[currentQuiz].answer1;
    document.getElementById("answerPos2").innerHTML=quiz[currentQuiz].answer2;
    document.getElementById("answerPos3").innerHTML=quiz[currentQuiz].answer3;
    document.getElementById("answerPos4").innerHTML=quiz[currentQuiz].answer4;
    }
}

function resetQuiz() 
{
   init();
   document.getElementById("pgMainMenu").style.display = "inline";
}

function startQuiz()
{
    document.getElementById("pgMainMenu").style.display = "none";
    document.getElementById("pgQuiz").style.display = "inline";
    loadQuiz();
    nextQuestion();
}

function ResultsInfo() {
    document.getElementById("pgQuiz").style.display = "none";
    document.getElementById("QuizResults").style.display = "inline";
    document.getElementById("QuizScore").innerHTML="Score: <b>" + quizScore + "</b>";
}