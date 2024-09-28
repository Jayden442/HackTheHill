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

    const waterRec = userWeight / 0.5;
    console.log("Valid weight entered:", userWeight);
    console.log("Recommended water intake (in ml):", waterRec);
}

function requiredCalories() {
    let userGender = prompt("Please enter your gender (male/female):").toLowerCase();
    while (userGender !== "male" && userGender !== "female") {
        userGender = prompt("Invalid input. Please enter your gender (male/female):").toLowerCase();
    }

    // Continue with the rest of your function here
    console.log(userGender);
}


/*
<!DOCTYPE html>
<html>
<body>

<h1>Select Gender</h1>

<form action="/action_page.php">
  <label for="gender">Enter your biological sex:</label>
  <select name="gender" id="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  <br><br>
  <input type="button" value="Submit" onclick="foodCal()">
</form>

<p id="calorieOutput"></p>

<script>
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

    document.getElementById("calorieOutput").innerText = "Recommended Calorie Intake: " + Math.round(recCal) + " kcal";
}
</script>

</body>
</html>
*/



