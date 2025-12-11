function calculatePersonality() {
    let scoreIntrovert = 0;
    let scoreLogical = 0;
    let scoreLeader = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions!");
        return;
    }

    // Introvert/Extrovert
    if (q1.value === "introvert") scoreIntrovert++;
    
    // Logical/Creative
    if (q2.value === "logical") scoreLogical++;

    // Leader/Support
    if (q3.value === "leader") scoreLeader++;

    let result = "";

    result += scoreIntrovert > 0 ? "Introvert<br>" : "Extrovert<br>";
    result += scoreLogical > 0 ? "Logical<br>" : "Creative<br>";
    result += scoreLeader > 0 ? "Leader<br>" : "Support<br>";

    document.getElementById("result").innerHTML = result;
}