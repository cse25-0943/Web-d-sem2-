function calculateResult() {

    let n =
    parseInt(
    document.getElementById("subjects").value);

    if (n <= 0 || isNaN(n)) {

        alert("Please enter valid number of subjects");
        return;

    }

    let total = 0;

    // Loop to take marks

    for (let i = 1; i <= n; i++) {

        let marks =
        parseFloat(
        prompt("Enter marks for subject " + i));

        total = total + marks;

    }

    // Calculate average

    let average = total / n;

    let grade;
    let result;

    // Grade using if-else

    if (average >= 90)
        grade = "A";

    else if (average >= 75)
        grade = "B";

    else if (average >= 60)
        grade = "C";

    else if (average >= 50)
        grade = "D";

    else
        grade = "F";

    // Pass / Fail

    if (average >= 50)
        result = "PASS";

    else
        result = "FAIL";

    // Display result

    document.getElementById("output").innerHTML =

        "Total Marks: " + total +
        "<br>Average Marks: " + average.toFixed(2) +
        "<br>Grade: " + grade +
        "<br>Result: " + result;

}