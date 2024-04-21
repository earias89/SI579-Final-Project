// Hard-coded quiz data form Section A drop-down menu to fetch from
const quizData = {
    "Healthy vs. Unhealthy Relationships": [
        {
            questionText: "Everyone deserves to have a partner(s) listen to what they want and need.",
            options: [

                { answer: 'True', correct: true, explanation: 'Correct! Everyone deserves to have a partner(s) listen to their needs.' },
                { answer: 'False', correct: false, explanation: 'While someone may have made you feel like you or someone else does not deserve to be heard, this is not the case. The correct answer is "true." Everyone deserves to have a partner(s) listen to their needs.' },

            ]
        },

        {
            questionText: "Which of the following are indicators of being in an unhealthy relationship?",
            options: [

                { answer: 'Being controlling and demanding', correct: false, explanation: 'While being controlling and demanding is an indication of being in an unhealthy relationship, there are some more signs to be aware of. The correct answer is "All of the above."' },
                { answer: 'Ignoring each others feelings and boundaries', correct: false, explanation: 'While ignoring each others feelings and boundaries is an indication of being in an unhealthy relationship, there are some more signs to be aware of. The correct answer is "All of the above."' },
                { answer: 'Being disrespectful of my choices', correct: false, explanation: 'While being disrespectful of my choices is an indication of being in an unhealthy relationship, there are some more signs to be aware of. The correct answer is "All of the above."' },
                { answer: 'Restricting my interactions with other people', correct: false, explanation: 'While restricting interactions with other people is an indication of being in an unhealthy relationship, there are some more signs to be aware of. The correct answer is "All of the above."' },
                { answer: 'All of the above', correct: true, explanation: 'Correct, all of these are indications of being in an unhealthy relationship.' }

            ]
        },

        {
            questionText: "1 in 4 women is hurt by a partner in their lifetime.",
            options: [
                { answer: 'True', correct: true, explanation: 'This is correct. More information can be found at the links below under section "Community Resources and Support"' },
                { answer: 'False', correct: false, explanation: '1 in 4 women is hurt by a partner in their lifetime. More information can be found at the links below under section "Community Resources and Support"' },

            ]
        },
        {
            questionText: "How can being in an unhealthy relationship affect your health?",
            options: [
                { answer: 'Being in an unhealthy relationship can contribute to stress, poor physical health, chronic pain, and negatively impact mental health.', correct: true, explanation: 'Correct! Being in an unhealthy relationship can contribute to all of these health outcomes.' },
                { answer: 'Being in an unhealthy relationship can negatively affect mental health and increase stress.', correct: false, explanation: 'While being in an unhealthy relationship can negatively affect mental health and increase stress, there are some more health outcomes to be aware of. The correct answer is "Being in an unhealthy relationship can contribute to stress, poor physical health, chronic pain, and negatively impact mental health."' },
                { answer: 'Being in an unhealthy relationship can contribute to poor physical health outcomes.', correct: false, explanation: 'While being in an unhealthy relationship can contribute to poor physical health outcomes, there are some more health outcomes to be aware of. The correct answer is "Being in an unhealthy relationship can contribute to stress, poor physical health, chronic pain, and negatively impact mental health."' },
                { answer: 'Ignoring each others feelings and boundaries', correct: false, explanation: 'While ignoring each others feelings and boundaries is an indication of being in an unhealthy relationship, there are some more health outcomes to be aware of. The correct answer is "Being in an unhealthy relationship can contribute to stress, poor physical health, chronic pain, and negatively impact mental health."' },
                { answer: 'None of the above', correct: false, explanation: 'This is not the correct answer. The correct answer is "Being in an unhealthy relationship can contribute to stress, poor physical health, chronic pain, and negatively impact mental health."' },
            ]
        },

        {
            questionText: "My Partner(s) or the person(s) I am dating should NOT:",
            options: [
                { answer: 'Make me feel bad about myself', correct: false, explanation: 'While making you feel bad about yourself is something that your partner(s) or the person(s) you are dating should not do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Control where I go', correct: false, explanation: 'While controlling where you go is something that your partner(s) or the person(s) you are dating should not do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Hurt, scare, or threaten me with their words or actions', correct: false, explanation: 'While hurting, scaring, or threatening you with their words or actions is something that your partner(s) or the person(s) you are dating should not do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Pressure or make me do anything when I do not want to', correct: false, explanation: 'While pressuring or making you do anything when you do not want to is something that your partner(s) or the person(s) you are dating should not do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Make me feel guilty when I do not want to do something they want me to do', correct: false, explanation: 'While making you feel guilty when you do not want to do something they want you to do is something that your partner(s) or the person(s) you are dating should not do, there are s to be aware of. The correct answer is "All of the above."' },
                { answer: 'All of the above', correct: true, explanation: 'Correct! Your partner(s) or the person(s) you are dating should not do any of these things.' },

            ]
        },
    ],

    "Intimate Partner Violence": [
        {
            questionText: "Intimate Partner Violence can take the form of emotional, physical, and/or sexual violence.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! Intimate Partner Violence can take any of these forms.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. Intimate Partner Violence can take the form of emotional, physical, and/or sexual violence.' },
            ]
        },

        {
            questionText: "The person(s) you are dating should never:",
            options: [
                { answer: 'Hit you', correct: false, explanation: 'While hitting you is something that the person(s) you are dating should never do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Push you', correct: false, explanation: 'While pushing you is something that the person(s) you are dating should never do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Physically harm you', correct: false, explanation: 'While physically harming you is something that the person(s) you are dating should never do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Psychologically manipulate you', correct: false, explanation: 'While psychologically manipulating you is something that the person(s) you are dating should never do, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'All of the above', correct: true, explanation: 'Correct! The person(s) you are dating should never do any of these things.' },
            ]
        },

        {
            questionText: "If someone(s) you are or were dating has ever made you do something you did not want to do with the use of force, threats, or psychological manipulation:",
            options: [
                { answer: 'Each of these constitutes an instance of intimate partner violence', correct: true, explanation: 'Correct! Each of these constitutes an instance of intimate partner violence.' },
                { answer: 'None of these are considered instances of intimate partner violence', correct: false, explanation: 'This is not the correct answer. It can be hard to know when intimate partner violence looks like, but each of these constitutes an instance of intimate partner violence.' },
                { answer: 'Using force or threats to make me do something that I do not want to do are instances of intimate partner violence, but not psychological manipulation.', correct: false, explanation: 'While using force or threats to make you do something that you do not want to do are instances of intimate partner violence, there are some more things to be aware of. The correct answer is "Each of these constitutes an instance of intimate partner violence."' },
                { answer: 'Using psychological manipulation to make me do something I do not want to do is an instance of intimate partner violence, but not using force or threats.', correct: false, explanation: 'While using psychological manipulation to make you do something you do not want to do is an instance of intimate partner violence, there are some more things to be aware of. The correct answer is "Each of these constitutes an instance of intimate partner violence."' },
            ]
        },

        {
            questionText: "If you are being hurt by a partner(s), it is not your fault. You deserve to be safe and treated with respect.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! If you are being hurt by a partner(s), it is not your fault. You deserve to be safe and treated with respect.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. If you are being hurt by a partner(s), it is not your fault. You deserve to be safe and treated with respect.' },
            ]
        },

        {
            questionText: "Being cared for by your partner(s) leads to better health, a longer life, and is healthier for your children, if you have children.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! Being cared for by your partner(s) leads to better health, a longer life, and is healthier for your children, if you have children.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. Being cared for by your partner(s) leads to better health, a longer life, and is healthier for your children, if you have children.' },
            ]
        },
    ],

    "Pregnancy Coercion": [
        {
            questionText: "Reproductive coercion can occur in either or both forms—pregnancy coercion and/or birth control sabotage.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! Reproductive coercion can occur in either or both forms—pregnancy coercion and/or birth control sabotage.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. Reproductive coercion can occur in either or both forms—pregnancy coercion and/or birth control sabotage.' },
            ]
        },

        {
            questionText: "Pregnancy coercion can look like:",
            options: [
                { answer: 'Someone(s) you are/were dating forced or pressured you to become pregnant.', correct: false, explanation: 'While this is a form of pregnancy coercion, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Someone(s) you are/were dating told you not to use any birth control (such as pills, shot, ring, etc.).', correct: false, explanation: 'While this is a form of pregnancy coercion, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Someone(s) you are/were dating said he would leave you if you did not get pregnant.', correct: false, explanation: 'While this is a form of pregnancy coercion, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'All of the above are forms of pregnancy coercion.', correct: true, explanation: 'Correct! All of these are forms of pregnancy coercion.' },
            ]
        },

        {
            questionText: "What if someone(s) you are/were dating told you they would have a baby with someone else if you did not get pregnant?",
            options: [
                { answer: 'Walk away forever.', correct: false, explanation: 'While walking away forever is a choice you can make, the correct answer is "This is a form of pregnancy coercion. A loving partner(s) would not pressure you in this way. You should confront someone you can trust and see the section on Community Resources and Support for more information about where to get help."' },
                { answer: 'Consider having a baby to stay with your partner(s).', correct: false, explanation: 'While considering having a baby to stay with your partner(s) is a choice you can make, the correct answer is "This is a form of pregnancy coercion. A loving partner(s) would not pressure you in this way. You should confront someone you can trust and see the section on Community Resources and Support for more information about where to get help."' },
                { answer: 'This is a form of pregnancy coercion. A loving partner(s) would not pressure you in this way. You should confront someone you can trust and see the section below on Community Resources and Support for more information about how to get help.', correct: true, explanation: 'Correct! This is a form of pregnancy coercion. A loving partner(s) would not pressure you in this way. You should confront someone you can trust and see the section on Community Resources and Support for more information about where to get help.' },
                { answer: 'You should tell your partner(s) that you are not ready and hopefully he will understand.', correct: false, explanation: 'While telling your partner(s) that you are not ready is a choice you can make, the correct answer is "This is a form of pregnancy coercion. A loving partner(s) would not pressure you in this way. You should confront someone you can trust and see the section on Community Resources and Support for more information about where to get help."' },
            ]
        },

        {
            questionText: "If someone you are/were dating hurt you physically because you did not agree to get pregnant, what should you do?",
            options: [
                { answer: 'It is never ok for a partner(s) to hurt you physically. Please see section on Community Resources and Support for more information about how to get help', correct: true, explanation: 'Correct! It is never ok for a partner(s) to hurt you physically. Please see section on Community Resources and Support for more information about where to get help.' },
                { answer: 'You should tell your partner(s) that you are going to leave if they do not stop hurting you.', correct: false, explanation: 'While telling your partner(s) that you are going to leave if they do not stop hurting you is a choice you can make, the correct answer is "It is never ok for a partner(s) to hurt you physically. Please see section on Community Resources and Support for more information about where to get help".' },
                { answer: 'You should think about what you are going to do on your own.', correct: false, explanation: 'While thinking about what you are going to do on your own is a choice you can make, the correct answer is "It is never ok for a partner(s) to hurt you physically. Please see section on Community Resources and Support for more information about where to get help".' },
                { answer: 'Consider having a baby to stay with your partner(s).', correct: false, explanation: 'While considering to have a baby to stay with your partner(s) is a choice you can make, the correct answer is "It is never ok for a partner(s) to hurt you physically. Please see section on Community Resources and Support for more information about where to get help".' },
            ]
        },

        {
            questionText: "If you have ever been pregnant, and someone(s) you are/were dating threatened to hurt you if you did not do what they wanted with the pregnancy:",
            options: [
                { answer: 'This is a form of pregnancy coercion', correct: false, explanation: 'While this is a form of pregnancy coercion, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'This is a form of reproductive coercion.', correct: false, explanation: 'While this is a form of reproductive coercion, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Your partner should never threaten or hurt you if you do not do what they want with the pregnancy.', correct: false, explanation: 'While your partner should never threaten or hurt you if you do not do what they want with the pregnancy, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'All of the above.', correct: true, explanation: 'Correct! All of these are true.' },
            ]
        },
    ],

    "Birth Control Sabotage": [
        {
            questionText: "Birth control sabotage is a form of reproductive coercion.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! Birth control sabotage is a form of reproductive coercion.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. Birth control sabotage is a form of reproductive coercion.' },
            ]
        },
        {
            questionText: "Birth control sabotage can include:",
            options: [
                { answer: 'Times in which someone(s) you are/were dating removes the condom during intimacy without your consent.', correct: false, explanation: 'While this is a form of birth control sabotage, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Times in which someone(s) you are/were dating refuses to use a condom during intimacy.', correct: false, explanation: 'While this is a form of birth control sabotage, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'Times in which someone(s) you are/were dating took your birth control away or kept you from going to the clinic to get birth control.', correct: false, explanation: 'While this is a form of birth control sabotage, there are some more things to be aware of. The correct answer is "All of the above."' },
                { answer: 'All of these are instances of birth control sabotage.', correct: true, explanation: 'Correct! All of these are instances of birth control sabotage.' },
            ]
        },
        {
            questionText: "You deserve to make your own pregnancy decisions without being afraid.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! You deserve to make your own pregnancy decisions without being afraid.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. You deserve to make your own pregnancy decisions without being afraid.' },
            ]
        },
        {
            questionText: "A partner(s) may see pregnancy as a way to keep you in their life, but you might feel differently. Maybe you want to wait to have a baby, or maybe you don't want to have a baby at all. You deserve to be with someone(s) who respects your choices.",
            options: [
                { answer: 'True', correct: true, explanation: 'Correct! You deserve to be with someone(s) who respects your choices.' },
                { answer: 'False', correct: false, explanation: 'This is not the correct answer. You deserve to be with someone(s) who respects your choices.' },
            ]
        },
        {
            questionText: "When someone(s) you are/were dating does not support your choice to use birth control, and/or keeps you from using birth control through sabotage, force, or psychological manipulation:",
            options: [
                { answer: 'Its time to tell them "Bye, Felicia!"', correct: false, explanation: 'While it may be time to end the relationship, the correct answer is that this is a form of birth control sabotage, and you deserve to make your own pregnancy decisions without being afraid."' },
                { answer: 'This is a form of birth control sabotage.', correct: false, explanation: 'This is a form of birth control sabotage, but this is only partially correct. You also deserve to make your own pregnancy decisions without being afraid.' },
                { answer: 'You deserve to make your own pregnancy decisions without being afraid.', correct: false, explanation: 'While you do deserve to make your own pregnancy decisions without being afraid, this is only partially correct. This is also a form of birth control sabotage.' },
                { answer: 'This is a form of birth control sabotage, and you deserve to make your own pregnancy decisions without being afraid.', correct: true, explanation: 'Correct!' },
            ],
        },
    ],

};

const dropdown = document.getElementById('list-type');

let currentQuestionIndex = {};

// Default for drop-down menu
const defaultOption = document.createElement('option');
defaultOption.text = 'Select a topic';
defaultOption.disabled = true;
defaultOption.selected = true;
dropdown.add(defaultOption);

// Event listener to the drop-down menu
dropdown.addEventListener('change', function () {
    // Need to reset feedback message, so that it doesn't show up when selecting a new topic
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = '';
    feedbackElement.style.color = 'rgb(128, 0, 128';
    feedbackElement.style.fontWeight = 'bold';

    // Get the selected option value from drop-down menu
    const selectedOption = dropdown.value;

    if (selectedOption === 'Select a topic') {
        const questionElement = document.getElementById('question');
        questionElement.textContent = '';
        const optionsElement = document.getElementById('options');
        optionsElement.innerHTML = '';
        return; 
    }

    // Get the quiz data for the selected option/ See above for quizData object
    const quizQuestions = quizData[selectedOption];
    
    if (!currentQuestionIndex[selectedOption]) {
        currentQuestionIndex[selectedOption] = 0;
    }

    // See the first question
    displayQuestion(selectedOption, quizQuestions, currentQuestionIndex, feedbackElement);
});

function displayQuestion(selectedOption, quizQuestions, currentQuestionIndex, feedbackElement) {
    const questionElement = document.getElementById('question');
    questionElement.style.fontWeight = 'bold';
    questionElement.style.marginBottom = '20px';
    const optionsElement = document.getElementById('options');
    const currentQuestion = quizQuestions[currentQuestionIndex[selectedOption]];

    // Display the current question and options
    questionElement.textContent = currentQuestion.questionText;
    optionsElement.innerHTML = ''; // Need to clear previous options
   

    if (currentQuestion.options.length === 2 && ['True', 'False'].includes(currentQuestion.options[0].answer)) {
        // True or False question
        currentQuestion.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.className = 'btn btn-dark';
            optionButton.style.marginLeft = '3px';
            optionButton.style.marginTop = '5px';
            optionButton.style.marginBottom = '20px';
            optionButton.style.display = 'block';
            optionButton.textContent = option.answer;
            optionButton.addEventListener('click', function () {
                // Handle option click here
                const isCorrect = option.correct;
                if (isCorrect) {
                    feedbackElement.textContent = option.explanation || 'Correct!';
                } else {
                    feedbackElement.textContent = 'Incorrect. ' + option.explanation;
                }
            });
            optionsElement.appendChild(optionButton);
        });
    } else {
        // Multiple choice question
        renderOptions(currentQuestion, optionsElement, feedbackElement);
    }
    if (currentQuestionIndex[selectedOption] === quizQuestions.length - 1) {
        // If this is the last question, add the message
        const doneMessage = document.createElement('p');
        doneMessage.textContent = "Great job! You've answered all of the questions in this section. Choose a new topic.";
        // alert('All done with this section. Choose a new topic.');
        optionsElement.appendChild(doneMessage);
    } else {

    // Add a "Next" button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.className = 'btn btn-success';
    nextButton.style.marginLeft = '3px';
    nextButton.style.marginTop = '5px';
    nextButton.style.marginBottom = '20px';
    nextButton.style.display = 'block';

    nextButton.addEventListener('click', function () {
        // User continues to the next question
        currentQuestionIndex[selectedOption]++;
        if (currentQuestionIndex[selectedOption] < quizQuestions.length) {
            displayQuestion(selectedOption, quizQuestions, currentQuestionIndex, feedbackElement);
            feedbackElement.textContent = ''; // Clear previous explanation message
        } else {
            dropdown.selectedIndex = 0; // Reset the dropdown to the default option
        }
    });
    optionsElement.appendChild(nextButton);
}
}

function renderOptions(question, optionsElement, feedbackElement) {
    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.className = 'btn btn-dark'; 
        optionButton.style.marginLeft = '3px';
        optionButton.style.marginTop = '5px';
        optionButton.style.marginBottom = '20px';
        optionButton.style.display = 'block';
        optionButton.textContent = option.answer;
        optionButton.addEventListener('click', function () {
            // Handle option click here
            const isCorrect = option.correct;
            if (isCorrect) {
                feedbackElement.textContent = option.explanation || 'Correct!';
            } else {
                feedbackElement.textContent = 'Incorrect. ' + option.explanation;
            }
        });
        optionsElement.appendChild(optionButton);
    });
}

let timerElement = document.getElementById('timer');
let seconds = 0;
let intervalId = null;
let messageDisplayed = false;

// Implementation of setInterval -  Made a function for the timer in Section A/ this also shows an encouraging message after 10 seconds
function updateTimer() {
    seconds++;
    if (seconds === 10 && !messageDisplayed) {
        timerElement.innerHTML = "<b>You're doing great! 😊 Try to proceed to the next questions at your own pace.</b>";
        clearInterval(intervalId); // Stop the timer
        console.log('Timer stopped. Total time:', seconds, 'seconds');
        messageDisplayed = true;
    } else {
        timerElement.textContent = `Timer: ${seconds} seconds`;
    }
}

// Start the timer
function startTimer() {
    intervalId = setInterval(updateTimer, 1000); 
}
startTimer();


// Resource box hover effect - Section C
document.querySelectorAll('.resource-box').forEach(box => {
    box.addEventListener('mouseover', () => {
      const infoId = box.getAttribute('data-info');
      const info = document.getElementById(infoId);
      info.style.display = 'block';
    });
  
    box.addEventListener('mouseout', () => {
      const infoId = box.getAttribute('data-info');
      const info = document.getElementById(infoId);
      info.style.display = 'none';
    });
  });

// Local Storage Implementation - top page greeting 
  const nameInput = document.getElementById('nameInput');

nameInput.addEventListener('input', function() {
    // Update the stored name in local storage
    localStorage.setItem('userName', nameInput.value);
  
    // Retrieve name from local storage
    const name = localStorage.getItem('userName');
  
    // Display user's name in a personalized greeting
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Hi ${name}, welcome to C-ARCHES, an application designed to help you understand the connection between your health and your relationships.`;
  });
