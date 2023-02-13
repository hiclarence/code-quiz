//identifies view score and time element
var timeElement = document.querySelector(".time");
var score = document.querySelector(".score");

//identifies html structure including title
var container = document.querySelector(".container");
var questions = document.querySelector(".questions");
var innerSection = document.querySelector(".inner");
var pTag = document.querySelector("p");
var titleElement = document.querySelector(".welcome");

//targeting start quiz button. 
var start = document.querySelector("#start");
start.addEventListener("click", setTime);
start.setAttribute("style", "padding: 20px; width: 10%; color: white; margin: 15px auto; border-radius: 5px; border: none; cursor: pointer; font-family; Arial; font-size: 16px;");

//targeting score link
score.addEventListener("click", viewScore);
score.setAttribute("style", "cursor: pointer; text-decoration: none; color: purple");

var listElement = document.createElement("ul");

var points = 0;

questions.setAttribute("style", "display:none;");

//setting how many seconds to run
var secondsLeft = 5;

function setTime() {
    startQuiz();
    // Sets interval in variable

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = "Time: " + secondsLeft;
  
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
        // Calls function to send message
            sendMessage();
        }
    }, 1000);
}

let questionBank = {
    prompt: "1) How do you write 'hello world?'",
    choices: ['console.log("Hello World")' , 
    'print "hello world!"', 
    '"hello world!"'],
    answer: 'console.log("Hello World")',

};

function startQuiz() {
    pTag.textContent = " ";
    start.setAttribute("style", "display:none;");

    titleElement.textContent = "1) How do you write 'Hello World'?";
    titleElement.setAttribute("style", "background-color: white");
    
    for (var i = 0; i<questionBank.choices.length; i++) {
        questions.children[i].textContent = questionBank.choices[i];
        questions.setAttribute("style", "display:block; background-color: white;");
    };

    

    // for loop here
    //  - insert text
    //  - append container
    //  - stylize
    //  - event listener - if statement within the event listener
}

function points() {
    
    points += 10;
    console.log(event.target);
    var correctText = document.createElement("h2");
    correctText.textContent = "Correct!";
    innerSection.appendChild(correctText);
};

function sendMessage() {
    innerSection.textContent = " ";
    questions.setAttribute("style", "display:none;");

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

    //creating the input
    var aInput = document.createElement("input");
    aInput.setAttribute("style", "height: 30px")
    aInput.id = "name";
    aForm.appendChild(aInput);

    //creates the submit button
    var aSubmit = document.createElement("button");
    aSubmit.textContent = "Submit";
    aForm.appendChild(aSubmit);
    aSubmit.setAttribute("style", "padding: 10px; margin: 20px; background-color: #9F2B68; width: 80%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");

    //clicking the submit button redirects to the view score
    aSubmit.addEventListener("click", viewScore);
    
}

function viewScore () {
    var userName = document.getElementById("name").value;

    // clears the screen
    pTag.textContent = " ";
    innerSection.textContent = " ";
    start.setAttribute("style", "display:none;");
    timeElement.setAttribute("style", "display:none;");
    score.setAttribute("style", "display:none;");

    //creates high score text
    titleElement.textContent = "High Score";
    titleElement.setAttribute("style", "background-color: white;");

    //creates a name
    var nameBoard = document.createElement("p");
    nameBoard.textContent =  userName.concat(" - ", points);
    nameBoard.setAttribute("style", "padding: 10px 10px; margin: 10px auto; background-color: #d6cefb; color: black; border: none; text-align: left")
    titleElement.appendChild(nameBoard);

    //creates go back button
    var backButton = document.createElement("button");
    backButton.textContent = "Go Back";
    backButton.setAttribute("style", "padding: 10px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");

    //creates clear score button
    var clearScore = document.createElement("button");
    clearScore.textContent = "Clear Score";
    clearScore.setAttribute("style", "padding: 10px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");

    //appends and styles both buttons
    innerSection.appendChild(backButton);
    innerSection.appendChild(clearScore);
    innerSection.setAttribute("style", "display: flex; flex-direction: row; width: 50%; margin: 20px auto")
    //**how do you reset back to original state when go back or clear is clicked?
    
}