let employees = [];

function addEmployee() {

    let emp = {

        name:
        document.getElementById("name").value,

        id:
        document.getElementById("id").value,

        salary:
        parseFloat(
        document.getElementById("salary").value),

        department:
        document.getElementById("department").value
    };

    employees.push(emp);

    alert("Employee Added Successfully");

}

function displayEmployees() {

    let text = "";

    for (let e of employees) {

        text +=
        "Name: " + e.name +
        " | Salary: " + e.salary +
        "<br>";
    }

    document.getElementById("output").innerHTML = text;

}

function filterSalary() {

    let text = "";

    let filtered =
    employees.filter(e => e.salary > 50000);

    for (let e of filtered) {

        text +=
        e.name +
        " - " + e.salary +
        "<br>";
    }

    document.getElementById("output").innerHTML = text;

}

function totalSalary() {

    let total = 0;

    for (let e of employees) {

        total += e.salary;

    }

    document.getElementById("output").innerHTML =

    "Total Salary = " + total;

}

function averageSalary() {

    let total = 0;

    for (let e of employees) {

        total += e.salary;

    }

    let avg =
    total / employees.length;

    document.getElementById("output").innerHTML =

    "Average Salary = " + avg.toFixed(2);

}

function countDepartment() {

    let dept =
    prompt("Enter Department Name:");

    let count = 0;

    for (let e of employees) {

        if (e.department == dept)

        count++;

    }

    document.getElementById("output").innerHTML =

    "Employees in " +
    dept +
    " = " + count;

}