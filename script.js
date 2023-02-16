//identifies view score and time element
var timeElement = document.querySelector(".time");
var score = document.querySelector(".score");

//creates an array for high scores
const highScoreArray = JSON.parse(localStorage.getItem("highScores")) || [];

//identifies html structure including title
var container = document.querySelector(".container");
var questions = document.querySelector(".questions");
var response = document.querySelector(".response");
var innerSection = document.querySelector(".inner");
var pTag = document.querySelector("p");
var titleElement = document.querySelector(".welcome");

//targeting start quiz button. 
var start = document.querySelector("#start");
start.addEventListener("click", setTime);
start.setAttribute("style", "padding: 20px; width: 10%; color: white; margin: 15px auto; border-radius: 5px; border: none; cursor: pointer; font-family; Arial; font-size: 16px;");

//targeting score link
score.setAttribute("style", "cursor: pointer; text-decoration: none; color: purple");
score.addEventListener("click", function() {
    if (highScoreArray.length == 0) {
        alert("You need to play a game first!")
    } else {
        viewScore();
    }
});

var listElement = document.createElement("ul");
// console.log(highScoreArray.length);

var points = 0;

let firstQuestion = {
    prompt: "How do you write 'hello world?",
    choices: ['console.log("Hello World")' , 
    'print "hello world!', 
    '"hello world!"'],
    answer: 'console.log("Hello World")',
};

let secondQuestion = {
    prompt: "Which script do we put in the HTML to reference Javascript?",
    choices: ["scripting" , 
    'js', 
    'script.js'],
    answer: 'script.js',
};

let thirdQuestion = {
    prompt: "What is the correct place to put javascript?",
    choices: ["the body section" , 
    'the head section', 
    'both are valid'],
    answer: 'both are valid',
};

let questionBank = [firstQuestion, secondQuestion, thirdQuestion]
let questionCount = 0;

questions.setAttribute("style", "display:none;");

//setting how many seconds to run
var secondsLeft = 30;

function setTime() {
    loadQuestion();
    // Sets interval in variable

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = "Time: " + secondsLeft;
  
        if(secondsLeft <= 0) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
        // Calls function to send message
            sendMessage();
        }
    }, 1000);
}

function validateAnswer(event) {
    var responseText = document.createElement("h2");
    response.textContent = " ";
    if (questionBank[questionCount].answer == event.target.textContent) {
        points += 10;
        responseText.textContent = "Correct!";
        questionCount += 1;
        if (questionCount == 3) {
            secondsLeft = 0;
            sendMessage();
        } else {
            loadQuestion();
        }
    } else {
        secondsLeft -= 3;
        console.log("wrong hit")
        responseText.textContent = "Wrong!";
    }
    response.appendChild(responseText);
}


function loadQuestion() {
    innerSection.textContent = " ";
    pTag.textContent = " ";
    start.setAttribute("style", "display:none;");
    titleElement.setAttribute("style", "background-color: white");
    questions.setAttribute("style", "display:block; background-color: white;");
    
    //sets the title and questions
    titleElement.textContent = questionBank[questionCount].prompt;

    for (var i = 0; i<3; i++) {
        questions.children[i].textContent = questionBank[questionCount].choices[i];
        questions.children[i].addEventListener("click", validateAnswer);
    }

};


function sendMessage() {
    innerSection.textContent = " ";
    questions.setAttribute("style", "display:none;");
    response.remove();
    titleElement.textContent = "All done!";

    //creates "final score is" text
    var finalText = document.createElement("p");
    finalText.textContent = "Your final score is: ".concat(points, " points.");
    innerSection.appendChild(finalText);

    //creates the form
    var aForm = document.createElement("form");
    innerSection.appendChild(aForm);
    aForm.setAttribute("style", "margin: auto; padding: 20px 20px; background-color: white; display: flex; flex-direction: column; gap: 10px")
    // event.preventDefault();

    //creates the label for the form
    var aLabel = document.createElement("label");
    aLabel.textContent = "Enter initials: ";
    aLabel.setAttribute("style", "background-color: white; font-family: Arial; font-size: 20px")
    aForm.appendChild(aLabel);

    //creating the input box
    var formInput = document.createElement("input");
    formInput.setAttribute("style", "height: 30px")
    formInput.id = "name";
    aForm.appendChild(formInput);

    //creates the submit button
    var aSubmit = document.createElement("button");
    aSubmit.textContent = "Submit";
    aForm.appendChild(aSubmit);
    aSubmit.setAttribute("style", "padding: 10px; margin: 20px; width: 80%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");

    //clicking the submit button redirects to the view score
    aSubmit.addEventListener("click", addScore);

}

function addScore() {

    //inputs name and points into local storage for a new entry
    var userName = document.getElementById("name").value;
    userEntry = {
        name : userName,
        points : points
    };
    
    highScoreArray.push(userEntry);
    localStorage.setItem("highScores", JSON.stringify(highScoreArray));
    viewScore();
}

function viewScore() {

    // clears the screen
    questions.textContent = " ";
    response.textContent = " ";
    pTag.textContent = " ";
    innerSection.textContent = " ";
    start.setAttribute("style", "display:none;");
    timeElement.setAttribute("style", "display:none;");
    // score.setAttribute("style", "display:none;");

    //creates high score text
    titleElement.textContent = "High Score";
    titleElement.setAttribute("style", "background-color: white;");

    //creates the name board section
    var nameBoard = document.createElement("section");
    titleElement.appendChild(nameBoard);
    nameBoard.setAttribute("style", "background-color: white;")


    if (highScoreArray.length != 0) {
        for (var i=0 ; i<highScoreArray.length; i++) {
            var entry = document.createElement("p");
            var name = highScoreArray[i].name;
            var score = highScoreArray[i].points;
            entry.textContent =  name.concat(" - ", score, " points" );
            entry.setAttribute("style", "padding: 10px 10px; margin: 10px auto; background-color: #d6cefb; color: black; border: none; text-align: left")
            nameBoard.appendChild(entry);
                      
        }
    }

    //creates go back button
    var backButton = document.createElement("button");
    backButton.textContent = "Go Back";
    backButton.setAttribute("style", "padding: 10px; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");
    backButton.addEventListener("click", function() { window.location.reload();});  

    //creates clear score button
    var clearScore = document.createElement("button");
    clearScore.textContent = "Clear Score";
    clearScore.setAttribute("style", "padding: 10px; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");
    clearScore.addEventListener("click", function() {
        nameBoard.textContent = " ";
        localStorage.clear()
    });

    //appends and styles both buttons
    innerSection.appendChild(backButton);
    innerSection.appendChild(clearScore);
    innerSection.setAttribute("style", "display: flex; flex-direction: row; width: 50%; margin: 20px auto")

}