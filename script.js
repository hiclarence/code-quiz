//identifies view score and time element
var timeElement = document.querySelector(".time");
var score = document.querySelector(".score");

//identifies html structure including title
var container = document.querySelector(".container");
var innerSection = document.querySelector(".inner");
var pTag = document.querySelector("p");
var titleElement = document.querySelector(".welcome");

//targeting start quiz button. 
//** How do I change color when it hovers? 
var start = document.querySelector("#start");
start.addEventListener("click", setTime);
start.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 10%; color: white; margin: 15px auto; border-radius: 5px; border: none; cursor: pointer; hover: font-family; Arial; font-size: 16px");

//targeting score link
score.addEventListener("click", viewScore);
score.setAttribute("style", "cursor: pointer; text-decoration: none; color: purple");

var listElement = document.createElement("ul");

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
        // Calls function to send message
            sendMessage();
        }
    }, 1000);
}

function question() {
    pTag.textContent = " ";
    start.setAttribute("style", "display:none;");

    titleElement.textContent = "1) How do you write 'Hello World'?";
    titleElement.setAttribute("style", "background-color: white");

    //** is there a more efficient way to store questions / answers and iterate through them? */ 
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
    li3.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 20%; color: white; margin: 5px auto; border-radius: 5px; font-family: Arial; cursor: pointer");

    li2.addEventListener("click", console.log("list item clicked!"));
    //**why is my element not responding correclty when clicked? 
}

function sendMessage() {
    innerSection.textContent = " ";
    titleElement.textContent = "All done!";

    //creates "final score is" text
    var finalText = document.createElement("p");
    finalText.textContent = "Your final score is: ";
    innerSection.appendChild(finalText);

    //creates the form
    var aForm = document.createElement("form");
    innerSection.appendChild(aForm);
    // innerSection.setAttribute("style", "border: 1px solid black")
    // aForm.setAttribute("style", "border: 1px solid black")
    aForm.setAttribute("style", "margin: auto; padding: 20px 20px; background-color: white; display: flex; flex-direction: column; gap: 10px")
    // event.preventDefault();

    //creates the label for the form
    var aLabel = document.createElement("label");
    aLabel.textContent = "Enter initials: ";
    aLabel.setAttribute("style", "background-color: white; font-family: Arial; font-size: 20px")
    aForm.appendChild(aLabel);

    //creating the input
    //**why is my inpput not being registered? */
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
    var name = document.getElementById("name").value;
    aSubmit.addEventListener("click", viewScore);
    console.log(name);


}

function viewScore () {
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
    //**needs to get name value correct */
    var nameBoard = document.createElement("p");
    nameBoard.textContent = "Winner Winner Chicken Dinner - 23 points";
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
    innerSection.setAttribute("style", "border: solid 1px black; display: flex; flex-direction: row; width: 50%; margin: 0px auto")

    //**how do you reset back to original state
    
}