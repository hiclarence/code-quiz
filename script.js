var points = 0;

var timeElement = document.querySelector(".time");
var container = document.querySelector(".container");
var button = document.querySelector(".btn");
var pTag = document.querySelector("p");

//targeting start button
var start = document.querySelector("#start");
start.addEventListener("click", question);

var listElement = document.createElement("ol");


// Selects element by id
var titleElement = document.querySelector(".welcome");

var secondsLeft = 5;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        // question();

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
    pTag.textContent = " ";
    button.setAttribute("style", "display:none;");

    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    li1.textContent = "Apple";
    li2.textContent = "Pizza";
    li3.textContent = "Dumplings";
    li4.textContent = "Cupcakes";

    listElement.append(li1);
    listElement.append(li2);
    listElement.append(li3);
    listElement.append(li4);

    container.appendChild(listElement);
    
    li1.setAttribute("style", "padding: 20px; background-color: #9F2B68; width: 10%; color: white; margin: 5px; border-radius: 5px");
    listElement.setAttribute("style", "border: 1px solid black;");
}

function sendMessage() {
    titleElement.textContent = "Time's Up!";
}
