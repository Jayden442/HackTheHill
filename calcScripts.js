function getOption() {
    selectElement = document.querySelector('.selectOption');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}




function waterIntake() {
    let userWeight = parseFloat(prompt("Please enter your body weight:"));
    while (isNaN(userWeight) || userWeight <= 0 || userWeight > 1500) {
        userWeight = parseFloat(prompt("Invalid input. Please enter a valid body weight:"));
    }

    const waterRec = userWeight * 0.5;
    console.log("Valid weight entered:", userWeight);
    console.log("Recommended water intake (in ml):", waterRec);
    document.querySelector('#waterCalculator').innerText = "Recommended water intake: " + waterRec + " oz";
}

function requiredCalories() {
    let userGender = prompt("Please enter your gender (male/female):").toLowerCase();
    while (userGender !== "male" && userGender !== "female") {
        userGender = prompt("Invalid input. Please enter your gender (male/female):").toLowerCase();
    }

    // Continue with the rest of your function here
    console.log(userGender);
}


function foodCal() {
    let selectElement = document.querySelector('#gender');
    let userGender = selectElement.value;

    let userWeight = parseFloat(prompt("Please enter your body weight (lbs)"));

    while (isNaN(userWeight) || userWeight <= 0 || userWeight > 1500) {
        userWeight = parseFloat(prompt("Invalid input. Please enter a valid body weight:"));
    }

    let recCal;

    if (userGender === "male") {
        recCal = 900 + 10 * (userWeight * 0.453592);
    } else {
        recCal = 800 + 7 * (userWeight * 0.453592);
    }   

    document.querySelector("#calorieOutput").innerText = "Recommended Calorie Intake: " + Math.round(recCal) + " kcal";
}






