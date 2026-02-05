// Function to update the status text
function updateStatus() 
    {
    // 1. Select the paragraph
    const statusPara = document.getElementById("status-text");

    // 2. Change the text
    statusPara.innerText = "Task completed! Notification sent.";
    statusPara.style.color = "green";
    }


// Function to read input and display a greeting
    function greetUser() 
    {
    const inputField = document.getElementById("user-name");
    const name = inputField.value;
    const msgPara = document.getElementById("greeting-msg");
    msgPara.innerText = "Hello, " + name + "!";
    }


    function greetUser() 
    {
    const inputField = document.getElementById("user-name");
    const msgPara = document.getElementById("greeting-msg");
    const name = inputField.value.trim();
        if (name === "") {
        inputField.classList.add("input-error");
        msgPara.innerText = "Please enter your name.";
        msgPara.style.color = "red";
        } else {
        // Success: Remove red border and show greeting
        inputField.classList.remove("input-error");
        msgPara.innerText = "Hello, " + name + "!";
        msgPara.style.color = "black";
        }
    }


    function checkAge() 
    {
    const ageInput = document.getElementById("user-age");
    const ageMsg = document.getElementById("age-msg");
    const age = Number(ageInput.value);
        if (age >= 18) 
            {
        ageMsg.innerText = "Access Granted.";
        ageMsg.style.color = "green";
            } 
        else 
            {
        ageMsg.innerText = "You are too young.";
        ageMsg.style.color = "red";
        }
    }