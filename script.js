var timeElement = document.querySelector(".time");
var score = document.querySelector(".score");
var container = document.querySelector(".container");
var innerSection = document.querySelector(".inner");
var button = document.querySelector(".btn");
var pTag = document.querySelector("p");

//targeting start button
var start = document.querySelector("#start");
start.addEventListener("click", setTime);

//targeting score link
score.addEventListener("click", viewScore);
score.setAttribute("style", "cursor: pointer; text-decoration: none; color: purple");

var listElement = document.createElement("ul");

button.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 10%; color: white; margin: 15px auto; border-radius: 5px; cursor: pointer; hover: background-color: white; font-family; Arial; font-size: 16px");

// Selecting title element
var titleElement = document.querySelector(".welcome");


//setting how many seconds to run
var secondsLeft = 3;

function setTime() {
    var points = 0;
    question();
    // Sets interval in variable

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = "Time: " + secondsLeft;
  
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
        // Calls function to create and append image
            sendMessage();
        }
  
    }, 1000);
}

function question() {
    titleElement.textContent = "1) How do you write 'Hello World'?";
    titleElement.setAttribute("style", "background-color: white");
    pTag.textContent = " ";
    button.setAttribute("style", "display:none;");

    // Create ordered list items??
    var firstQuestionArray = [
        "console.log('Hello World')",
        "print('Hello World')",
        'hello world!'
    ]
    
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");

    li1.textContent = "console.log('Hello World')";
    li2.textContent = "print('Hello World')";
    li3.textContent = "hello world!";

    listElement.append(li1);
    listElement.append(li2);
    listElement.append(li3);
    listElement.setAttribute("style", "background-color: white");

    innerSection.appendChild(listElement);

    li1.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; cursor: pointer");
    li2.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; cursor: pointer");
    li3.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial");

    li2.addEventListener("click", console.log("list item clicked!"));
    //why is my element not registering correclty? 
}

function sendMessage() {
    innerSection.textContent = " ";
    titleElement.textContent = "All done!";

    var finalText = document.createElement("p");
    finalText.textContent = "Your final score is: ";
    innerSection.appendChild(finalText);

    var initialText = document.createElement("p");
    intialText.textContent = "Enter intials: ";
    innerSection.appendChild(initialText);

    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");
    innerSection.appendChild(submitButton);

    //why are my buttons not appearing?
}

function viewScore () {
    // only visible is go back and clear high score
    titleElement.textContent = "High Score";
    titleElement.setAttribute("style", "background-color: white");
    pTag.textContent = " ";
    innerSection.textContent = " ";
    button.setAttribute("style", "display:none;");
    timeElement.setAttribute("style", "display:none;");
    score.setAttribute("style", "display:none;");

    var backButton = document.createElement("button");
    backButton.textContent = "Go Back";
    backButton.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");

    var clearScore = document.createElement("button");
    clearScore.textContent = "Clear Score";
    clearScore.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; font-size: 16px; cursor: pointer; border: none");

    innerSection.appendChild(backButton);
    innerSection.appendChild(clearScore);
    innerSection.setAttribute("style", "border: solid 1px black; display: flex; flex-direction: row; width: 50")

    //how do you reset back to original state??
    
}