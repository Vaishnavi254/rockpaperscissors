// // Select elements
// let rock = document.querySelector(".rock");
// let paper = document.querySelector(".paper");
// let scissor = document.querySelector(".scissors");
// let computer_marks=document.querySelector(".computer");
// let user_marks=document.querySelector(".user");
// let user="";
// let com="";
// let user_result="";
// let com_result="";
// let marks_user_counter=0;
// let marks_com_counter=0;
// // Function to handle adding and removing border class
// function handleBorder(element) {
//     element.addEventListener("mouseover", () => {
//         element.classList.add("border");  // Add border on mouseover
//     });
    
//     element.addEventListener("mousedown", () => {
//         element.classList.remove("border");  // Remove border on mousedown
//     });
// }

// // Apply the function to all three elements
// handleBorder(rock);
// handleBorder(paper);
// handleBorder(scissor);

// //random function

// function computer(){
//   let arr=["rock","paper","scissor"]
//   const randIdx = Math.floor(Math.random() * 3);
//   console.log(arr[randIdx]);
//   return arr[randIdx];
 
// }
// function user(type){
//    if(type=="rock"){
//      user="rock";
//    }
//    else if(type=="scissor"){
//     user="scissor";
//   }
//   else if(type=="paper"){
//     user="paper";
//   }
// }

// function checkResult(user,com){
//    if(user=='rock'&&com=='paper'){
//     user_result="lose";
//     com_result="win";
//     marks_com_counter++;
//    }
//    else if(user=='rock'&&com=='scissor'){
//     user_result="win";
//     com_result="lose";
//    marks_com_counter++;
//    }
//    else if(user=='rock'&&com=='rock'){
//     user_result="draw";
//     com_result="draw";
//    }
//    else if(user=='paper'&&com=='paper'){
//     user_result="draw";
//     com_result="draw";
//    }
//    else if(user=='paper'&&com=='scissor'){
//     user_result="lose";
//     com_result="win";
//     marks_com_counter++;
//    }
//    else if(user=='paper'&&com=='rock'){
//     user_result="win";
//     com_result="lose";
//     marks_user_counter++;
//    }
//    else if(user=='scissor'&&com=='scissor'){
//     user_result="draw";
//     com_result="draw";
//    }
//    else if(user=='scissor'&&com=='rock'){
//     user_result="lose";
//     com_result="win";
//     marks_com_counter++;
//    }
//    else if(user=='scissor'&&com=='paper'){
//     user_result="win";
//     com_result="lose";
//     marks_user_counter++;
//    }
// }

// rock.addEventListener("click",()=>{
//     com=computer();
//     user("rock");
//     checkResult(user,com);
//   computer_marks.innerText=marks_com_counter;
//   user_marks.innerText=marks_user_counter;
// })
// paper.addEventListener("click",()=>{
//     com=computer();
//     user("paper");
//     checkResult(user,com);
//     computer_marks.innerText=marks_com_counter;
//     user_marks.innerText=marks_user_counter;
//   })
// scissor.addEventListener("click",()=>{
//     com=computer();
//     user("scissor");
//     checkResult(user,com);
//     computer_marks.innerText=marks_com_counter;
//     user_marks.innerText=marks_user_counter;
//   })
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissor = document.querySelector(".scissors");
    let computer_marks = document.querySelector("#computer");
    let user_marks = document.querySelector("#user");
    let msg = document.querySelector("#msg");

    let user = "";
    let com = "";
    let user_result = "";
    let com_result = "";
    let marks_user_counter = 0;
    let marks_com_counter = 0;
    let game_over = false;  // Track if the game is over

    // Function to handle adding and removing border class
    function handleBorder(element) {
        element.addEventListener("mouseover", () => {
            element.classList.add("border");  // Add border on mouseover
        });

        element.addEventListener("mousedown", () => {
            element.classList.remove("border");  // Remove border on mousedown
        });
    }

    // Apply the function to all three elements
    handleBorder(rock);
    handleBorder(paper);
    handleBorder(scissor);

    // Random function for computer choice
    function computer() {
        let arr = ["rock", "paper", "scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return arr[randIdx]; // Return the randomly selected choice for the computer
    }

    // Function to store the user's choice
    function userChoice(type) {
        user = type; // Store user's choice
    }

    // Function to check the result of the game
    function checkResult(user, com) {
        if (user == 'rock' && com == 'paper') {
            user_result = "lose";
            com_result = "win";
        } else if (user == 'rock' && com == 'scissor') {
            user_result = "win";
            com_result = "lose";
        } else if (user == 'rock' && com == 'rock') {
            user_result = "draw";
            com_result = "draw";
        } else if (user == 'paper' && com == 'paper') {
            user_result = "draw";
            com_result = "draw";
        } else if (user == 'paper' && com == 'scissor') {
            user_result = "lose";
            com_result = "win";
        } else if (user == 'paper' && com == 'rock') {
            user_result = "win";
            com_result = "lose";
        } else if (user == 'scissor' && com == 'scissor') {
            user_result = "draw";
            com_result = "draw";
        } else if (user == 'scissor' && com == 'rock') {
            user_result = "lose";
            com_result = "win";
        } else if (user == 'scissor' && com == 'paper') {
            user_result = "win";
            com_result = "lose";
        }

        // Increment the scores based on the result
        if (user_result === "win") {
            marks_user_counter++;
        } else if (com_result === "win") {
            marks_com_counter++;
        }
    }

    // Function to check if anyone reached 10 points
    function checkGameWinner() {
        if (marks_user_counter >= 10) {
            alert("User wins the game!"); // Show alert when user wins
            game_over = true;
            disableButtons(); // Disable buttons after game ends
        } else if (marks_com_counter >= 10) {
            alert("Computer wins the game!"); // Show alert when computer wins
            game_over = true;
            disableButtons(); // Disable buttons after game ends
        }
    }

    // Disable all game buttons when the game is over
    function disableButtons() {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }

    // Reset the game when someone wins
    function resetGame() {
        // Wait for a brief moment (e.g., 2 seconds) before resetting the game
        setTimeout(() => {
            marks_user_counter = 0;
            marks_com_counter = 0;
            computer_marks.innerText = marks_com_counter;
            user_marks.innerText = marks_user_counter;
            game_over = false;
            enableButtons(); // Re-enable the buttons for a new game
        }, 2000);
    }

    // Enable game buttons
    function enableButtons() {
        rock.disabled = false;
        paper.disabled = false;
        scissor.disabled = false;
    }

    // Event listeners for user selection
    rock.addEventListener("click", () => {
        if (game_over) return;  // Prevent further action if the game is over

        com = computer(); // Get computer's choice
        userChoice("rock"); // Store user's choice
        checkResult(user, com); // Check the result

        // Update the scores
        computer_marks.innerText = marks_com_counter;
        user_marks.innerText = marks_user_counter;

        // Display the result message
        if (user_result === "win") {
            msg.innerText = "User wins!";
        } else if (com_result === "win") {
            msg.innerText = "Computer wins!";
        } else {
            msg.innerText = "It's a draw!";
        }

        console.log(`User: ${user}, Computer: ${com} -> ${user_result} | ${com_result}`);

        // Check if someone won the game
        checkGameWinner();

        // Reset the game if someone won
        if (game_over) {
            resetGame();
        }
    });

    paper.addEventListener("click", () => {
        if (game_over) return;  // Prevent further action if the game is over

        com = computer(); // Get computer's choice
        userChoice("paper"); // Store user's choice
        checkResult(user, com); // Check the result

        // Update the scores
        computer_marks.innerText = marks_com_counter;
        user_marks.innerText = marks_user_counter;

        // Display the result message
        if (user_result === "win") {
            msg.innerText = "User wins!";
        } else if (com_result === "win") {
            msg.innerText = "Computer wins!";
        } else {
            msg.innerText = "It's a draw!";
        }

        console.log(`User: ${user}, Computer: ${com} -> ${user_result} | ${com_result}`);

        // Check if someone won the game
        checkGameWinner();

        // Reset the game if someone won
        if (game_over) {
            resetGame();
        }
    });

    scissor.addEventListener("click", () => {
        if (game_over) return;  // Prevent further action if the game is over

        com = computer(); // Get computer's choice
        userChoice("scissor"); // Store user's choice
        checkResult(user, com); // Check the result

        // Update the scores
        computer_marks.innerText = marks_com_counter;
        user_marks.innerText = marks_user_counter;

        // Display the result message
        if (user_result === "win") {
            msg.innerText = "User wins!";
        } else if (com_result === "win") {
            msg.innerText = "Computer wins!";
        } else {
            msg.innerText = "It's a draw!";
        }

        console.log(`User: ${user}, Computer: ${com} -> ${user_result} | ${com_result}`);

        // Check if someone won the game
        checkGameWinner();

        // Reset the game if someone won
        if (game_over) {
            resetGame();
        }
    });
});
