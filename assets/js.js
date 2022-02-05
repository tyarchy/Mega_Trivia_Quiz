var questions = [
  {
    id: 1,
    question: "What will the James Webb telescope tell us about the Universe?",
    answers: [
      { text: "A: That it is not as bad as we thought", correct: false },
      { text: "B: Its worse than we could possibly imagine", correct: false },
      { text: "C: More space and more galaxies", correct: true },
      { text: "D: ALIENS", correct: false },
    ],
  },

  {
    id: 2,
    question: "Who was James Webb anyway?",
    answers: [
      { text: "A: A Mechanic", correct: false },
      { text: "B: A bean counter", correct: true },
      { text: "C: An astrophyscist", correct: false },
      { text: "D: An astronomer", correct: false },
    ],
  },
  {
    id: 3,
    question: "When was the Hubble Telescope launched?",
    answers: [
      { text: "A: 2011", correct: false },
      { text: "B: 1982", correct: false },
      { text: "C: 1990", correct: true },
      { text: "D: 2001", correct: false },
    ],
  },
  {
    id: 4,
    question: "How far back in time will the James Webb Telescope look?",
    answers: [
      { text: "A: 13.5 billion years", correct: true },
      { text: "B: It cannot see back in time", correct: false },
      { text: "C: All the way back to the beginning", correct: false },
      { text: "D: 22 billion years", correct: false },      
    ],
  },
  {
    id: 5,
    question: "Game Over Man, GAME OVER!",
    answers: [
      { text: "THE", correct: false },
      { text: "GAME", correct: false },
      { text: "IS", correct: true },
      { text: "OVER!", correct: false },
    ],
  },
];

//The Quiz Pseudocode

//When the user pushes the start button:
//a timer begins
//the first question is presented

//When the user chooses an answer:
// the page indicates "WRONG" or "RIGHT" for the chosen button

//When the user chooses a wrong answer time is removed
//When the user is correct they get 1 point

//The User can click the next button or try and answer again

// The quiz is over when the user answers all the questions
// The quiz is over when the timer equals zero

//When the quiz is over the users score is shown
// the user can then save their score and initials

var nextButton = document.getElementById("next-btn");
var answerButtons = document.getElementById("answer-buttons");
var answerbtns = document.querySelector(".btn");
var nextBtn = document.getElementById("next-btn");
var qCount = 0;
var qId = 1;
var time = 100;
var counter;
var score = 0;

document.querySelector("#qText").innerHTML = questions[qCount].question;


// wrong or right answers
function here(arg) {
  if (arg == true) {
    document.body.setAttribute("style", "background-color: #08ff00c2;");
    score += time
  } else {
    document.body.setAttribute("style", "background-color: #ff0000c2;");
    time = time - 5;
  }

  console.log(qCount);
  if (qCount < questions.length - 1) {
    qCount++;
    qId++;
    setPage();
    
    // End of quiz questions
    if(qCount==4){
      clearInterval(counter)
    };
  }

}

function setPage() {
  for (
    let i = 0;
    i < document.getElementById("answer-buttons").children.length;
    i++
  ) {
    document
      .getElementById("answer-buttons")
      .children[i].setAttribute(
        "onclick",
        `here(${questions[qCount].answers[i].correct})`
      );

    document.getElementById("answer-buttons").children[i].innerHTML =
      questions[qCount].answers[i].text;

    document.querySelector("#qText").innerHTML = questions[qCount].question;
  }

  document.getElementById("score").innerHTML = score;

}

// Starting the game
var startButton = document
  .getElementById("start-btn")
  .addEventListener("click", function () {
    this.disabled = true;
    setPage();

    counter = setInterval(function () {
      document.getElementById("time").innerHTML = time;

      if (time <= 0) {
        console.log("TIMES UP");
        

        



        clearInterval(counter);

        
    if(qCount==0){
      clearInterval(counter)
    };

      }

      time--;
    }, 1000);

    const nextBtn = document.getElementById("next-btn");
    // if next btn q button
    nextBtn.onclick = () => {
     
    };

    
  });

// setInterval(function () { console.log("YOU LOSE!"); }, 30000);
