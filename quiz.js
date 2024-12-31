const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which programming language is known as the language of the web?",
      choices: ["Python", "JavaScript", "Java", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What is 2 + 2?",
      choices: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "George Orwell", "J.K. Rowling", "Jane Austen"],
      answer: "Harper Lee",
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "South Korea", "India"],
      answer: "Japan",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "O2", "CO2", "H2"],
      answer: "H2O",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the smallest prime number?",
      choices: ["0", "1", "2", "3"],
      answer: "2",
    },
    {
      question: "Which planet is closest to the sun?",
      choices: ["Mercury", "Venus", "Earth", "Mars"],
      answer: "Mercury",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result");
  const questionCounter = document.getElementById("question-counter");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice");
      button.addEventListener("click", () => handleChoiceSelection(button, currentQuestion.answer));
      choicesContainer.appendChild(button);
    });
  
    nextButton.disabled = true;
  }
  
  function handleChoiceSelection(button, correctAnswer) {
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice) => {
      choice.disabled = true;
      if (choice.textContent === correctAnswer) {
        choice.classList.add("correct");
      } else if (choice === button) {
        choice.classList.add("wrong");
      }
    });
  
    if (button.textContent === correctAnswer) {
      score++;
    }
  
    nextButton.disabled = false;
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  restartButton.addEventListener("click", restartQuiz);
  
  loadQuestion();
  