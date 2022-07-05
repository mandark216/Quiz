let start = document.getElementById('mx')
let quiz = document.getElementById('quiz')
let timer = document.getElementById('timer')
let question = document.getElementById('question')
let counter = document.getElementById('counter')
let choiceA = document.getElementById('A')
let choiceB = document.getElementById('B')
let choiceC = document.getElementById('C')

let progess = document.getElementById("progess")

let scorecontainer = document.getElementById('scorecontainer')
let scorer = document.getElementById('score')

let questions = [
    {
        question: "Who is CM of Maharashtra ?",
        choiceA: "Devendra Fadnavis",
        choiceB: "Eknath Shinde",
        choiceC: "Uddhav Thakre ",
        correct: "B"

    },
    {
        question: "City of Gates ?",
        choiceA: "Aurangabad",
        choiceB: "Pune",
        choiceC: "Mumbai",
        correct: "A"

    },

    {
        question: "What was the old name of VJTI ?",
        choiceA: "Veermata Jijabai Technological Institute",
        choiceB: "Veerbai Jijamata Technical Institute",
        choiceC: "Victoria Jublee Technical Institue ",
        correct: "C"

    },
    {
        question: "Richest Area in Mumbai",
        choiceA: "Malbar hills",
        choiceB: "Dharavi",
        choiceC: "Ghatkopar ",
        correct: "A"

    },
    {
        question: "Where we got peace in Mumbai",
        choiceA: "marine Drive",
        choiceB: "Dadar market",
        choiceC: "Malls ",
        correct: "A"

    }

]


let lastquestion = questions.length ;
let runningquestion = 0;

// render question 
function renderquestion() {
    let q = questions[runningquestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

start.addEventListener("click", startquiz);

function startquiz() {
    start.style.display = "none";
    quiz.style.display = "flex"
    renderquestion();
    TIME = setInterval(updatetime, 1000)
    Submit();
    
}


// render progess




// render counter


let TIME;
let count = 0;
const timeq = 15;

function updatetime() {
    if (count <= timeq) {

        counter.innerHTML = count;
        count++;
    }
    else {
        count = 0;
        if (runningquestion < lastquestion) {
            runningquestion++;
            renderquestion()
        }
        else{
            clearInterval(TIME)
            scorerender();
        }
    }
    
}
let score=0;

function checkans(answer) {
    if (answer === questions[runningquestion].correct) {

        score++;
        // ans is correct
    }
    else {
        // ans is correct
        score = 0;
    }
    count = 0;
    if (runningquestion <= lastquestion) {
        runningquestion++;
        renderquestion()

    }
    else{
        clearInterval(TIME)
        scorerender();

    }

}


function scorerender(){

scorecontainer.style.display="flex"
scorer.innerHTML="Corrected :"+score;
document.getElementById('perc').innerHTML="Score : "+Math.round(score*100/questions.length)+"%";

clearInterval(TIME)
quiz.style.display='none'
}

function submit(){
clearInterval(TIME);
quiz.style.display="none";
scorecontainer.style.display="flex";
scorer.innerHTML="Corrected :"+score;
document.getElementById('perc').innerHTML="Score : "+Math.round(score*100/questions.length)+"%";


}