const quizData = [
    {
        question: "HTML Stands for : ",
        a: "Hyper Text Markup Language",
        b: "Hundai Text Manage Language",
        c: "Hero Text Maintain Lanugage",
        d: "Application Programming Interface",
        correct: 'a'
    },
    {
        question: "Web Development Language : ",
        a: "Kotlin",
        b: "Flutter",
        c: "React Js",
        d: "React Native",
        correct: 'c'
    },
    {
        question: "SQL Stands for : ",
        a: "Standart Query Language",
        b: "Script Query Language",
        c: "Script Qutation Markup Language",
        d: "Scripting High Query Language",
        correct: 'b'
    },
    {
        question: "Famous Library of JavaScript : ",
        a: ".Net",
        b: "JQuery",
        c: "Angular",
        d: "Laravel",
        correct: 'b'
    },
    {
        question: "In Android Development does not use : ",
        a: "React Native",
        b: "Java",
        c: "Flutter",
        d: "None of above",
        correct : 'd'
    }
]

let currentQuizQuestion = 0, score = 0;
const question = document.getElementById("question");
const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");
const subButton = document.getElementById("subButton");
let currentQuestion, ans = undefined;
loadQuestionAnswer();
function loadQuestionAnswer(){
    uncheckedInput();
    currentQuestion = quizData[currentQuizQuestion];
    question.innerText = currentQuestion.question;
    a_txt.innerText = currentQuestion.a;
    b_txt.innerText = currentQuestion.b;
    c_txt.innerText = currentQuestion.c;
    d_txt.innerText = currentQuestion.d;
    currentQuizQuestion++;
}
function getSelectedEl(){
    const answersEl = document.querySelectorAll(".answer");
    answersEl.forEach(item => {
        if(item.checked){
            ans = item.id;
        }
    });
    return ans;
}
function uncheckedInput(){
    const unCheck = document.querySelectorAll(".answer");
    unCheck.forEach(item =>{
        item.checked = false;
    });
}

subButton.addEventListener("click", () => {

    const ans = getSelectedEl();
    if(ans === currentQuestion.correct){
        score = score + 1;
    }
    if(currentQuizQuestion < quizData.length){
        loadQuestionAnswer();
    }else{
        document.getElementById("quiz_box").innerHTML = `<h2>Total Score : ${score}/${quizData.length}</h2> <button onclick="location.reload();">Reload</button>`;
    }
})
