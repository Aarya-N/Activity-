function back() {
    window.location="activity_2.html";
}

function getscore() {
    x= localStorage.getItem("A");
    document.getElementById("output").innerHTML="score="+x;
}
