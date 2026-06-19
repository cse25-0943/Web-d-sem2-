function changeText() {

    let message =
    document.getElementById("message").value;

    document.getElementById("heading").innerHTML =
    message;

}

function changeBackground() {

    document.body.style.backgroundColor =
    "lightblue";

}

function increaseFont() {

    document.getElementById("heading").style.fontSize =
    "40px";

}

function toggleParagraph() {

    let para =
    document.getElementById("paragraph");

    if (para.style.display === "none")

        para.style.display = "block";

    else

        para.style.display = "none";

}

function resetPage() {

    location.reload();

}