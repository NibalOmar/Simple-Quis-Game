const quizData = [
    {
        quastion: "What is the capital of france?",
        options:["Paris" , "London" , "Berlin" , "Madrird"],
        answer: 0

},

{
    quastion: "What is the largest country in the world?",
    options:["Germany" , "Japan" , "Russia" , "Spain"],
    answer: 2

},

{
    quastion: "What is the curency of japan?",
    options:["Yuan" , "Yen" , "Dolar" , "Euro"],
    answer: 1

},

{
    quastion: "What is the highst mountain in the world?",
    options:["K2" , "Mount everest" , "Makalu" , "Dhouled"],
    answer: 1

},

{
    quastion: "What Is the largest ocean in the world?",
    options:[
        "Atlantic",
         "Indian ocean",
          "Antarcatica ocean",
           "Pacific ocean",
        ],
    answer: 3
},
];

const quastionElemnt = document.querySelector("#quastion");
const optionElemnts = document.querySelectorAll(".options .option");
const scoreElemnt = document.querySelector("#score");

let quastionIndex = 0;
let score = 0;

function setquastion() {
    const currentquastion = quizData[quastionIndex];
    quastionElemnt.innerHTML = currentquastion.quastion
    optionElemnts.forEach((optionElemnt, index) => {
        optionElemnt.innerHTML = currentquastion.options[index]
    });
}
setquastion();

function checkAnswer(optionIndex) {
    const currentquastion = quizData[quastionIndex];
    if(optionIndex === currentquastion.answer) {
        score++
    }
    quastionIndex++ 

    if ( quastionIndex < quizData.length) {
        setquastion()
    }
    else {
        showResults()
    }

}

function showResults() {
    quastionElemnt.style.display = "none";
         optionElemnts.forEach((optionElemnt) => {
             optionElemnt.style.display = "none";
});

scoreElemnt.innerHTML = ` your scored ${score} out of ${quizData.length}`
scoreElemnt.style.display = " block";

}

optionElemnts.forEach((optionElemnts, index) => {
    optionElemnts.addEventListener("click" , () => {
        checkAnswer(index);
    });
});
setquastion();