function checkAnswers() {
    let score = 0;

    // Get student name
    const studentName = document.getElementById("studentName").value;
    document.getElementById("displayName").innerText = `Student Name: ${studentName}`;
    const selectedOptions = [];
    if (document.getElementById("inclusiveness").checked) {
        selectedOptions.push("inclusiveness");
    }
    if (document.getElementById("opinionatedness").checked) {
        selectedOptions.push("opinionatedness");
    }
    if (document.getElementById("reliability and safety").checked) {
        selectedOptions.push("reliability and safety");
    }

    // Correct answers for Question 14
    const correctAnswers = ["inclusiveness", "reliability and safety"];

    // Calculate score for Question 14
    const correctSelected = correctAnswers.filter(option => selectedOptions.includes(option)).length;
    
    if (correctSelected === 2) {
        score += 10; // Full score if both correct answers are selected
    } else if (correctSelected === 1) {
        score += 5; // Partial score if only one correct answer is selected
    }
//question2
 
 if (document.getElementById("SetPrimarymetrictoaccuracy").checked) {
    score += 5;
}

 // Question 3
 const question3Answer = document.getElementById("question3").value;
 if (question3Answer === "inclusiveness") {
     score += 5;
 }
 const question4Answer = document.getElementById("question4").value;
 if (question4Answer === "reliability and safety") {
     score += 6;
 }
//question 5
  // Question 4
  if (document.querySelector('input[name="train"]:checked')?.value === "VALUE1") {
    score += 5;
}
// Question 6
if (document.querySelector('input[name="model"]:checked')?.value === "CNN") {
    score += 10;
}

 // Question 7
 const question7Answer = document.getElementById("question7").value;
 if (question7Answer === "ObjectDetection") {
     score += 5;
 }
 // Question 8
 const question8Answer = document.getElementById("question8").value;
 if (question8Answer === "fairness") {
     score += 5;
 }
// Question 9
if (document.querySelector('input[name="AI"]:checked')?.value === "CNN") {
    score += 5;
}
// Question 10
if (document.querySelector('input[name="images"]:checked')?.value === "Detect individual objects in an image") {
    score += 5;
}
// Question 11
if (document.querySelector('input[name="At"]:checked')?.value === "Building AI systems that require no human oversight") {
    score += 5;
}
 // Question 12
 if (document.querySelector('input[name="image"]:checked')?.value === "OCR") {
    score += 5;
}
// Question 13
const selectOption = [];
if (document.getElementById("speech1").checked) {
    selectOption.push("speech1");
}
if (document.getElementById("speech2").checked) {
    selectOption.push("speech2");
}
if (document.getElementById("speech3").checked) {
    selectOption.push("speech3");
}

// Correct answers for Question 13
const correctAnswer = ["speech1", "speech3"];

// Calculate score for Question 13
const correctSelect = correctAnswer.filter(option => selectOption.includes(option)).length;
if (correctSelect === 2) {
    score += 10; // Full score if both correct answers are selected
} else if (correctSelect === 1) {
    score += 5; // Partial score if only one correct answer is selected
}
//QUESTION 14
if (document.querySelector('input[name="Angle"]:checked')?.value === "6") {
    score += 5;
}
//question 15
if (document.querySelector('input[name="Angl"]:checked')?.value === "6") {
    score += 5;
}
//question 16
if (document.querySelector('input[name="test"]:checked')?.value === "6") {
    score += 5;
}
//question 17
if (document.querySelector('input[name="SIM"]:checked')?.value === "2") {
    score += 5;
}
//question 18
if (document.getElementById("video1").checked) {
    selectOption.push("video1");
}
if (document.getElementById("video2").checked) {
    selectOption.push("video2");
}
if (document.getElementById("video3").checked) {
    selectOption.push("video3");
}

// Correct answers for Question 18
const correct = ["video1", "video3"];

// Initialize score


// Calculate score for Question 18
const corrected = correct.filter(option => selectOption.includes(option)).length;
if (corrected === 2) {
    score += 10; // Full score if both correct answers are selected
} else if (corrected === 1) {
    score += 5; // Partial score if only one correct answer is selected
}
//question 19

if (document.querySelector('input[name="S"]:checked')?.value === "3") {
    score += 5;
}
//question 20
if (document.querySelector('input[name="Sw"]:checked')?.value === "1") {
    score += 5;
}
//question 21
if (document.querySelector('input[name="Sp"]:checked')?.value === "4") {
    score += 4;
}
//question 22

if (document.getElementById("vide1").checked) {
    selectOption.push("vide1");
}
if (document.getElementById("vide2").checked) {
    selectOption.push("vide2");
}
if (document.getElementById("vide3").checked) {
    selectOption.push("vide3");
}

// Correct answers for Question 22
const correctes = ["vide1", "vide2"];

// Initialize score


// Calculate score for Question 22
const correc = correctes.filter(option => selectOption.includes(option)).length;
if (correc === 2) {
    score += 10; // Full score if both correct answers are selected
} else if (correc === 1) {
    score += 5; // Partial score if only one correct answer is selected
}
//question 23

if (document.querySelector('input[name="Sm"]:checked')?.value === "1") {
    score += 5;
}
//question 24
if (document.getElementById("vde1").checked) {
    selectOption.push("vde1");
}
if (document.getElementById("vde2").checked) {
    selectOption.push("vde2");
}
if (document.getElementById("vde3").checked) {
    selectOption.push("vde3");
}

// Correct answers for Question 22
const correcte = ["vde1", "vde3"];

// Initialize score


// Calculate score for Question 22
const corre = correcte.filter(option => selectOption.includes(option)).length;
if (corre === 2) {
    score += 10; // Full score if both correct answers are selected
} else if (corre === 1) {
    score += 5; // Partial score if only one correct answer is selected
}
//question 25

if (document.querySelector('input[name="ww"]:checked')?.value === "1") {
    score += 5;
}
//question 26

if (document.querySelector('input[name="qu"]:checked')?.value === "2") {
    score += 5;
}
 // Question 27
 const question27Answer = document.getElementById("question27").value;
 if (question27Answer === "reliability and safety") {
     score += 5;
 }
 // Question 28
 const question28Answer = document.getElementById("question28").value;
 if (question28Answer === "transparency") {
     score += 5;
 }
 //question 29

if (document.querySelector('input[name="GE"]:checked')?.value === "3") {
    score += 5;
}
//question 30

if (document.querySelector('input[name="GEn"]:checked')?.value === "1") {
    score += 5;
}
// Question 31
const question31Answer = document.getElementById("question31").value;
if (question31Answer === "inclusiveness") {
    score += 5;
}
// Question 32
const question32Answer = document.getElementById("question32").value;
if (question32Answer === "inclusiveness") {
    score += 5;
}
// Question 33
const question33Answer = document.getElementById("question33").value;
if (question33Answer === "inclusiveness") {
    score += 5;
}
//question 34

if (document.querySelector('input[name="prin"]:checked')?.value === "3") {
    score += 5;
}
//question 35

if (document.querySelector('input[name="pri"]:checked')?.value === "1") {
    score += 10;
}

 const resultPage = `result.html?name=${encodeURIComponent(studentName)}&marks=${encodeURIComponent(score)}`;
 window.location.href = resultPage;
}
