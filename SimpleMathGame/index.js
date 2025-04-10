var answer = 0;
let timerId;
let timeLeft = 10;
let score = 0;
let highScore = 0;

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
       sessionStorage.setItem('highscore', highScore);
        document.getElementById('highscore').innerHTML = "High Score: " + highScore;
    }
}




function questionAdd() {
    var x = Math.floor(Math.random() * 10 + 1);
    var y = Math.floor(Math.random() * 10 + 1);
    answer = x + y;
    return {
        question: x + " + " + y,
        answer: answer
    };
}

document.addEventListener('DOMContentLoaded', function() { 
    var question = questionAdd();
    document.getElementById('question').innerText = question.question;
});

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === answer) {
        document.getElementById('result').innerText = "Correct!";
        timeLeft = timeLeft + 1;
        score = score + 1;
        document.getElementById('score').innerHTML = "Score: " + score;
      
        document.getElementById('timer').innerText = timeLeft + ' seconds remaining';
        updateHighScore();
// generate new equation // 

            var question = questionAdd();
            document.getElementById('question').innerText = question.question;
            document.getElementById('answer').value = '';


 

    } else {
        document.getElementById('result').innerText = "Incorrect!";
    }

    // attempt to change game to hard mode if user gets 5 questions correct // 

if (score === 5) {
    questionAdd = function() {
        var x = Math.floor(Math.random() * 50 + 1);
        var y = Math.floor(Math.random() * 50 + 1);
        answer = x + y;
        return {
            question: x + " + " + y,
            answer: answer
        };
    }
        document.getElementById('harder').innerText = "Warming up...now it's getting harder.";
        var question = questionAdd();
        document.getElementById('question').innerText = question.question;
        timeLeft = timeLeft + 10;    }



    if (score === 10) {
        questionAdd = function() {
            var x = Math.floor(Math.random() * 100 + 1);
            var y = Math.floor(Math.random() * 100 + 1);
            answer = x + y;
            return {
                question: x + " + " + y,
                answer: answer
            };
        };
        document.getElementById('harder').innerText = "Level Up! Numbers are now between 0 and 100.";
        var question = questionAdd();
        document.getElementById('question').innerText = question.question;
    }
}

    









function changeToSubtraction() {
    var question = questionSubtract();
    document.getElementById('question').innerText = question.question;
}

function questionSubtract() {
    var x = Math.floor(Math.random() * 10 + 10);
    var y = Math.floor(Math.random() * 10 + 1);
    answer = x - y;
    return {
        question: x + " - " + y,
        answer: answer
    };
}

function changeToAddition() {
    var question = questionAdd();
    document.getElementById('question').innerText = question.question;
}


// timer
// create function of start timer, insert into dom
// create '+'

document.getElementById('startTimerButton').addEventListener('click', function() {

var element = document.getElementById('timer');

timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) 
    {document.getElementById('timer').innerHTML = "Time's up, bruh. Game Over";
    clearTimeout(timerId);
    }
    else  (
        element.innerHTML = timeLeft + ' seconds remaining');
        timeLeft--;
    }
})


function resetGame() {
    timeLeft = 10;
    score = 0;
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('answer').value = '';
    document.getElementById('timer').innerText = timeLeft + ' seconds remaining';
}
