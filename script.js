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
];

// Select a random element from an array of objects (verbs).
// Store the current verb object in a variable.
// Apply the string value of the object property as text in the h2 element.
let randomIndex;
randomItem = (array) => {
  randomIndex = Math.floor(Math.random() * array.length);
  let item = array[randomIndex];
  return item;
};

let current = randomItem(verbs);

document.getElementById("question-verb").innerHTML = `${current.word}`;

// For the given verb, select a random tense from the tense property array
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

  // Add a new property to the current tense object to distinguish it as correct
  current.tense[index].correct = true;
}

// Filter correct and incorrect answers
let correctAnswer;
let incorrectAnswers = [];

current.tense.filter((answer) => {
  if (answer.correct === false) {
    incorrectAnswers.push(answer.conjugation);
  } else {
    correctAnswer = answer.conjugation;
  }
});

console.log(incorrectAnswers);
console.log(`The correct answer is: ${correctAnswer}`);

// Filll the button text content with the correct answer and three incorrect answers
let answers = document.getElementById("answers").children;
console.log(answers);

// Replace the text of all 4 buttons with incorrect answers
let getIndex = (length) => {
  return Math.floor(Math.random() * length);
};

applyText = () => {
  let buttonText = incorrectAnswers[getIndex(incorrectAnswers.length)];
  answers[i].innerHTML = buttonText;

  //Keep track of what very is being used, which is being removed, and which are still available for use.
  console.log("The button text is ", buttonText);
  console.log(
    "The element being removed is: ",
    incorrectAnswers.splice(incorrectAnswers.indexOf(buttonText), 1)
  );
  console.log("The remaining elements are: ", incorrectAnswers);

  // I don't know why I some buttons were getting there text set to 'undefined', this just to stop that happening
  if (buttonText === undefined) {
    answers[i].innerHTML = incorrectAnswers[getIndex(incorrectAnswers.length)];
  }
};

// Loop over the button elements and apply text
let i = 0;
while (i < answers.length) {
  applyText();
  //Apply class of 'incorrect-answer' to all buttons
  answers[i].setAttribute("class", "incorrect-answer");
  i++;
}

// Replace the text of 1 button with the correct answer
let answerIndex = Math.floor(Math.random() * answers.length);

answers[answerIndex].innerHTML = `${correctAnswer}`;
//Set an id of correct, and remove the incorrect class from the correct answer
answers[answerIndex].setAttribute("id", "correct-answer");
answers[answerIndex].removeAttribute("class", "incorrect-answer");

let score = 0;
let scoreCount = document.getElementById("score-count");
let correctAnswerButton = document.getElementById("correct-answer");
console.log(correctAnswerButton);
console.log(`The correct answer is: ${correctAnswer}`);

correctAnswerButton.addEventListener("click", function () {
  score++;
  document.querySelector("#question-sentence").setAttribute("id", "correct");
  document.querySelector("#score-count").innerHTML = score;
});
