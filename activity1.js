score=0;

function update() {
    score= score + 1;
    document.getElementById("output").innerHTML="score="+score;
}

function save() {
    localStorage.setItem("A",score);
}

function next() {
    window.location="activity_2.html";
}