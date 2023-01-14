let verbs = [
  (estar = {
    word: "estar",
    root: "est",

    tense: [
      (firstPersonSingular = {
        suffix: "oy",
        conjugation: "estoy",
        sentenceSpanish: "Yo _____ feliz.",
        sentenceEnglish: "I am happy.",
        correct: false,
      }),
      (secondPersonSingular = {
        suffix: "as",
        conjugation: "estas",
        sentenceSpanish: "Tu _____ feliz.",
        sentenceEnglish: "You are happy.",
        correct: false,
      }),
      (thirdPersonSingular = {
        suffix: "a",
        conjugation: "esta",
        sentenceSpanish: "El/Ella _____ feliz.",
        sentenceEnglish: "He/She/It is happy.",
        correct: false,
      }),
      (firstPersonPlural = {
        suffix: "amos",
        conjugation: "estamos",
        sentenceSpanish: "Nosotros _____ felices.",
        sentenceEnglish: "We are happy",
        correct: false,
      }),
      (secondPersonPlural = {
        suffix: "ais",
        conjugation: "estais",
        sentenceSpanish: "Vosotros _____ felices.",
        sentenceEnglish: "You all are happy",
        correct: false,
      }),
      (thirdPersonPlural = {
        suffix: "an",
        conjugation: "estan",
        sentenceSpanish: "Ellos/Ellas _____ felices.",
        sentenceEnglish: "They all are happy",
        correct: false,
      }),
    ],
  }),
  (trabajar = {
    word: "trabajar",
    root: "trabaj",
    tense: [
      (firstPersonSingular = {
        suffix: "o",
        conjugation: "trabajo",
        sentenceSpanish: "Yo _____",
        sentenceEnglish: "I work.",
        correct: false,
      }),
      (secondPersonSingular = {
        suffix: "as",
        conjugation: "trabajas",
        sentenceSpanish: "Tu _____",
        sentenceEnglish: "You work",
        correct: false,
      }),
      (thirdPersonSingular = {
        suffix: "a",
        conjugation: "trabaja",
        sentenceSpanish: "El/Ella _____",
        sentenceEnglish: "He/She/It works",
        correct: false,
      }),
      (firstPersonPlural = {
        suffix: "amos",
        conjugation: "trabajamos",
        sentenceSpanish: "Nosotros _____.",
        sentenceEnglish: "We work.",
        correct: false,
      }),
      (secondPersonPlural = {
        suffix: "ais",
        conjugation: "trabajais",
        sentenceSpanish: "Vosotros _____.",
        sentenceEnglish: "You all work.",
        correct: false,
      }),
      (thirdPersonPlural = {
        suffix: "an",
        conjugation: "trabajan",
        sentenceSpanish: "Ellos/Ellas _____.",
        sentenceEnglish: "They all work.",
        correct: false,
      }),
    ],
  }),
  (estudiar = {
    word: "estudiar",
    root: "estud",
    tense: [
      (firstPersonSingular = {
        suffix: "o",
        conjugation: "estudio",
        sentenceSpanish: "Yo _____",
        sentenceEnglish: "I study.",
        correct: false,
      }),
      (secondPersonSingular = {
        suffix: "as",
        conjugation: "estudias",
        sentenceSpanish: "Tu _____",
        sentenceEnglish: "You study",
        correct: false,
      }),
      (thirdPersonSingular = {
        suffix: "a",
        conjugation: "estudia",
        sentenceSpanish: "El/Ella _____",
        sentenceEnglish: "He/She/It studies",
        correct: false,
      }),
      (firstPersonPlural = {
        suffix: "amos",
        conjugation: "estudiamos",
        sentenceSpanish: "Nosotros _____.",
        sentenceEnglish: "We study.",
        correct: false,
      }),
      (secondPersonPlural = {
        suffix: "ais",
        conjugation: "estudais",
        sentenceSpanish: "Vosotros _____.",
        sentenceEnglish: "You study. (plural)",
        correct: false,
      }),
      (thirdPersonPlural = {
        suffix: "an",
        conjugation: "estudian",
        sentenceSpanish: "Ellos/Ellas _____.",
        sentenceEnglish: "They study.",
        correct: false,
      }),
    ],
  }),
];

// Select a random element from an array of objects
// Set innerHTML as text value

randomItem = (array) => {
  let randomElement;
  randomElement = Math.floor(Math.random() * array.length);
  let item = array[randomElement];
  return item;
};

newVerb = () => {
  current = randomItem(verbs);
  document.getElementById("question-verb").innerHTML = `${current.word}`;
};

let current = randomItem(verbs);

document.getElementById("question-verb").innerHTML = `${current.word}`;

// Select random tense
setSentence = () => {
  if (current) {
    // Create an index number
    let index = Math.floor(Math.random() * 6);
    //Fill the h2 text with an incomplete sentence
    document.getElementById(
      "question-sentence"
    ).innerHTML = `${current.tense[index].sentenceSpanish}`;

    document.getElementById(
      "question-sentence-english"
    ).innerHTML = `${current.tense[index].sentenceEnglish}`;

    current.tense[index].correct = true;
  }
};

setSentence();

// Filter correct from incorrect answer
let correctAnswer;
let incorrectAnswers = [];

sortAnswers = () => {
  current.tense.filter((answer) => {
    if (answer.correct === false) {
      incorrectAnswers.push(answer.conjugation);
    } else {
      correctAnswer = answer.conjugation;
      correctAnswer;
    }
    incorrectAnswers;
    console.log(incorrectAnswers);
    console.log(`The correct answer is: ${correctAnswer}`);
  });
};

// Fill the button text content with the correct answer and three incorrect answers
let answers = document.getElementById("answers").children;
console.log(answers);

sortAnswers();

// Replace the text of all 4 buttons with incorrect answers
let getIndex = (length) => {
  return Math.floor(Math.random() * length);
};

applyText = () => {
  let buttonText = incorrectAnswers[getIndex(incorrectAnswers.length)];
  answers[i].innerHTML = buttonText;

  console.log("The button text is ", buttonText);
  console.log(
    "The element being removed is: ",
    incorrectAnswers.splice(incorrectAnswers.indexOf(buttonText), 1)
  );
  console.log("The remaining elements are: ", incorrectAnswers);

  // Stop buttons recieving 'undefined' for innerHTML
  if (buttonText === undefined) {
    answers[i].innerHTML = incorrectAnswers[getIndex(incorrectAnswers.length)];
  }
};

// Loop and apply text
let i = 0;
while (i < answers.length) {
  applyText();
  //Apply class of 'incorrect-answer' to all buttons
  answers[i].setAttribute("class", "incorrect-answer");
  i++;
  newVerb();
}

// Distinguish 1 correct answer
let answerIndex = Math.floor(Math.random() * answers.length);
answers[answerIndex].innerHTML = `${correctAnswer}`;
answers[answerIndex].setAttribute("id", "correct-answer");
answers[answerIndex].removeAttribute("class", "incorrect-answer");

let score = 5;
let scoreCount = document.getElementById("score-count");
let correctAnswerButton = document.getElementById("correct-answer");

let correctSign = document.getElementById("correct-sign");
console.log(correctSign);

console.log(correctAnswerButton);
console.log(`The correct answer is: ${correctAnswer}`);

correctAnswerButton.addEventListener("click", function () {
  score++;
  document.querySelector("#question-sentence").setAttribute("id", "correct");
  document.querySelector("#score-count").innerHTML = score;
});

let buttons = document.querySelectorAll(".incorrect-answer");
let incorrectSign = document.getElementById("incorrect-sign");
const incorrectBanner = document.getElementById("incorrect-sign-container");
console.log(buttons);

// Display text message on incorrect click
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    // let incorrectSign = document.getElementById("incorrect-sign");
    incorrectSign.style.display = "block";
    score--;
    document.querySelector("#score-count").innerHTML = score;
    newVerb();
    setSentence();
    console.log(current);
  });
}
