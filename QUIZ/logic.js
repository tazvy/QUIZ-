const questions = {
    topic1: [
        {
            question: "What is the capital of France?",
            options: ["A. London", "B. Berlin", "C. Paris", "D. Madrid"],
            correctAnswer: "C. Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
            correctAnswer: "B. Mars",
        },
        {
            question: "How many continents are there on Earth?",
            options: ["A. 5", "B. 6", "C. 7", "D. 8"],
            correctAnswer: "C. 7",
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["A. Elephant", "B. Whale Shark", "C. Giraffe", "D. Blue Whale"],
            correctAnswer: "D. Blue Whale",
        },
        {
            question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
            options: ["A. Carbon dioxide", "B. Oxygen", "C. Nitrogen", "D. Hydrogen"],
            correctAnswer: "A. Carbon dioxide",
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["A. Go", "B. Gl", "C. Au", "D. Ag"],
            correctAnswer: "C. Au",
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["A. 1912", "B. 1918", "C. 1920", "D. 1931"],
            correctAnswer: "A. 1912",
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["A. Vincent van Gogh", "B. Leonardo da Vinci", "C. Pablo Picasso", "D. Michelangelo"],
            correctAnswer: "B. Leonardo da Vinci",
        },
        {
            question: "What is the currency of Brazil?",
            options: ["A. Peso", "B. Euro", "C. Dollar", "D. Real"],
            correctAnswer: "D. Real",
        },
        {
            question: "Who was the first person to step on the moon?",
            options: ["A. Yuri Gagarin", "B. John Glenn", "C. Neil Armstrong", "D. Buzz Aldrin"],
            correctAnswer: "C. Neil Armstrong",
        },
    ],
    topic2: [
        {
            question: "Who is the current Chancellor of Germany?",
            options: ["A. Angela Merkel", "B. Olaf Scholz", "C. Jens Spahn", "D. Sigmar Gabriel"],
            correctAnswer: "B. Olaf Scholz",
        },
        {
            question: "What international organization is headquartered in New York and maintains international peace and security?",
            options: ["A. UNICEF", "B. WHO", "C. NATO", "D. UN"],
            correctAnswer: "D. UN",
        },
        {
            question: "Who is the President of the United States as of 2021?",
            options: ["A. Joe Biden", "B. Donald Trump", "C. Barack Obama", "D. George W. Bush"],
            correctAnswer: "A. Joe Biden",
        },
        {
            question: "What country is known as the 'Land of the Rising Sun'?",
            options: ["A. South Korea", "B. China", "C. Japan", "D. Vietnam"],
            correctAnswer: "C. Japan",
        },
        {
            question: "What is the capital of Russia?",
            options: ["A. St. Petersburg", "B. Moscow", "C. Novosibirsk", "D. Vladivostok"],
            correctAnswer: "B. Moscow",
        },
        {
            question: "In which year did the European Union (EU) officially adopt the euro as its currency?",
            options: ["A. 1992", "B. 1999", "C. 2001", "D. 2004"],
            correctAnswer: "B. 1999",
        },
        {
            question: "Who is the current Prime Minister of Canada?",
            options: ["A. Justin Trudeau", "B. Stephen Harper", "C. Jean Chrétien", "D. Brian Mulroney"],
            correctAnswer: "A. Justin Trudeau",
        },
        {
            question: "What organization's headquarters is located in Geneva and focuses on global health issues?",
            options: ["A. World Bank", "B. IMF", "C. UNICEF", "D. WHO"],
            correctAnswer: "D. WHO",
        },
        {
            question: "What country is often referred to as the 'Emerald Isle'?",
            options: ["A. Scotland", "B. England", "C. Ireland", "D. Wales"],
            correctAnswer: "C. Ireland",
        },
        {
            question: "Which country is often referred to as the 'Land of a Thousand Lakes'?",
            options: ["A. Finland", "B. Norway", "C. Sweden", "D. Denmark"],
            correctAnswer: "A. Finland",
        },
    ],
    topic3: [
        {
            question: "Who is often credited with inventing the World Wide Web (WWW)?",
            options: ["A. Tim Berners-Lee", "B. Linus Torvalds", "C. Mark Zuckerberg", "D. Larry Page"],
            correctAnswer: "A. Tim Berners-Lee",
        },
        {
            question: "In what year was the first personal computer, the Altair 8800, released?",
            options: ["A. 1965", "B. 1970", "C. 1975", "D. 1980"],
            correctAnswer: "C. 1975",
        },
        {
            question: "What was the name of the first successful mass-produced computer with a graphical user interface (GUI)?",
            options: ["A. IBM PC", "B. Macintosh", "C. Commodore 64", "D. ENIAC"],
            correctAnswer: "B. Macintosh",
        },
        {
            question: "Who co-founded Apple Inc. along with Steve Jobs and Ronald Wayne?",
            options: ["A. Bill Gates", "B. Steve Wozniak", "C. Paul Allen", "D. Larry Ellison"],
            correctAnswer: "B. Steve Wozniak",
        },
        {
            question: "What programming language, created by Bjarne Stroustrup, is often used for developing system software and games?",
            options: ["A. Java", "B. Python", "C. C++", "D. Ruby"],
            correctAnswer: "C. C++",
        },
        {
            question: "What was the first commercially available computer, introduced in 1951?",
            options: ["A. UNIVAC I", "B. ENIAC", "C. Colossus", "D. Altair 8800"],
            correctAnswer: "A. UNIVAC I",
        },
        {
            question: "Who is known for developing the first high-level programming language, FORTRAN?",
            options: ["A. Grace Hopper", "B. Ada Lovelace", "C. Alan Turing", "D. John von Neumann"],
            correctAnswer: "A. Grace Hopper",
        },
        {
            question: "What computer operating system was developed by Linus Torvalds and is based on the Unix operating system?",
            options: ["A. Windows", "B. macOS", "C. Linux", "D. Android"],
            correctAnswer: "C. Linux",
        },
        {
            question: "In what year was the first iPhone released by Apple Inc.?",
            options: ["A. 2005", "B. 2007", "C. 2010", "D. 2013"],
            correctAnswer: "B. 2007",
        },
        {
            question: "Who is often considered the 'father of the computer' and is known for his work on the Analytical Engine?",
            options: ["A. Charles Babbage", "B. Alan Turing", "C. John von Neumann", "D. Konrad Zuse"],
            correctAnswer: "A. Charles Babbage",
        },
    ],
    topic4: [
        {
            question: "What is the largest desert in the world?",
            options: ["A. Sahara Desert", "B. Arabian Desert", "C. Gobi Desert", "D. Antarctic Desert"],
            correctAnswer: "D. Antarctic Desert",
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            options: ["A. Lion", "B. Elephant", "C. Tiger", "D. Gorilla"],
            correctAnswer: "A. Lion",
        },
        {
            question: "What is the longest river in the world?",
            options: ["A. Nile River", "B. Amazon River", "C. Yangtze River", "D. Mississippi River"],
            correctAnswer: "A. Nile River",
        },
        {
            question: "What is the only mammal capable of flight?",
            options: ["A. Bat", "B. Bird", "C. Flying Squirrel", "D. Eagle"],
            correctAnswer: "A. Bat",
        },
        {
            question: "Which natural phenomenon is known as the 'Northern Lights'?",
            options: ["A. Aurora Australis", "B. Solar Eclipse", "C. Comet", "D. Aurora Borealis"],
            correctAnswer: "D. Aurora Borealis",
        },
        {
            question: "What is the smallest bone in the human body?",
            options: ["A. Stapes (in the ear)", "B. Femur (in the leg)", "C. Radius (in the arm)", "D. Patella (kneecap)"],
            correctAnswer: "A. Stapes (in the ear)",
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
            correctAnswer: "B. Mars",
        },
        {
            question: "What is the deepest point in the ocean?",
            options: ["A. Mariana Trench", "B. Puerto Rico Trench", "C. Philippine Trench", "D. Tonga Trench"],
            correctAnswer: "A. Mariana Trench",
        },
        {
            question: "Which is the only planet known to support life?",
            options: ["A. Mars", "B. Venus", "C. Earth", "D. Mercury"],
            correctAnswer: "C. Earth",
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["A. Gold", "B. Iron", "C. Diamond", "D. Quartz"],
            correctAnswer: "C. Diamond",
        },
    ],
    topic5: [
        {
            question: "Who is the king of the gods in Greek mythology?",
            options: ["A. Apollo", "B. Zeus", "C. Poseidon", "D. Hades"],
            correctAnswer: "B. Zeus",
        },
        {
            question: "Who is the goddess of wisdom and warfare?",
            options: ["A. Artemis", "B. Athena", "C. Hera", "D. Aphrodite"],
            correctAnswer: "B. Athena",
        },
        {
            question: "Who is the messenger of the gods in Greek mythology?",
            options: ["A. Hermes", "B. Dionysus", "C. Ares", "D. Hephaestus"],
            correctAnswer: "A. Hermes",
        },
        {
            question: "Which hero is known for slaying the Minotaur?",
            options: ["A. Perseus", "B. Theseus", "C. Hercules", "D. Jason"],
            correctAnswer: "B. Theseus",
        },
        {
            question: "Who is the goddess of love and beauty?",
            options: ["A. Demeter", "B. Athena", "C. Hera", "D. Aphrodite"],
            correctAnswer: "D. Aphrodite",
        },
        {
            question: "Which titan is the father of Zeus, Poseidon, and Hades?",
            options: ["A. Hyperion", "B. Cronus", "C. Atlas", "D. Prometheus"],
            correctAnswer: "B. Cronus",
        },
        {
            question: "Who is the goddess of the harvest?",
            options: ["A. Demeter", "B. Persephone", "C. Artemis", "D. Hestia"],
            correctAnswer: "A. Demeter",
        },
        {
            question: "Which hero is known for his invulnerability except for his heel?",
            options: ["A. Achilles", "B. Odysseus", "C. Hector", "D. Perseus"],
            correctAnswer: "A. Achilles",
        },
        {
            question: "Who is the queen of the underworld in Greek mythology?",
            options: ["A. Hecate", "B. Persephone", "C. Medusa", "D. Eurydice"],
            correctAnswer: "B. Persephone",
        },
        {
            question: "Which mythical creature has the head of a bull and the body of a man?",
            options: ["A. Hydra", "B. Centaur", "C. Minotaur", "D. Cyclops"],
            correctAnswer: "C. Minotaur",
        },
    ],
};



const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score-value');
const timerElement = document.getElementById('timer');
const topicSelect = document.getElementById('topic');

let currentTopic = topicSelect.value;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 420; // 7 minutes (7 * 60 seconds)
let timer; // Store the timer interval

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    showQuestion(currentQuestionIndex);
    startTimer();
}

// Function to display a question
// Function to display a question
function showQuestion(index) {
    currentTopic = topicSelect.value;
    if (index < questions[currentTopic].length) {
        const question = questions[currentTopic][index];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        for (let i = 0; i < question.options.length; i++) {
            const option = document.createElement('div'); // Use a div for each option
            option.classList.add('option-item'); // Optional: Add a class for styling

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'option';
            input.value = question.options[i];

            const label = document.createElement('label');
            label.textContent = question.options[i];

            option.appendChild(input);
            option.appendChild(label);
            optionsElement.appendChild(option);
        }

        nextButton.style.display = 'block'; // Show the "Next" button
    } else {
        endQuiz();
    }
}


// Function to start the timer
function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// Function to handle the "Next" button click
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const question = questions[currentTopic][currentQuestionIndex];

        if (userAnswer === question.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        selectedOption.checked = false;
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timer);
    questionElement.textContent = 'Quiz Complete!';
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';

    const totalQuestions = questions[currentTopic].length;
    const percentage = (score / totalQuestions) * 100;

    const passMessage = percentage >= 50 ? 'Congratulations, you passed!' : 'You did not pass.';
    scoreElement.textContent = `Score: ${score} out of ${totalQuestions}`;
    scoreElement.style.display = 'block';
    const percentageElement = document.createElement('p');
    percentageElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;
    percentageElement.classList.add('percentage');
    scoreElement.insertAdjacentElement('afterend', percentageElement);
    const resultElement = document.createElement('p');
    resultElement.textContent = `Result: ${passMessage}`;
    resultElement.classList.add(percentage >= 50 ? 'pass' : 'fail');
    percentageElement.insertAdjacentElement('afterend', resultElement);
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
topicSelect.addEventListener('change', startQuiz);

// Start the quiz
startQuiz();
