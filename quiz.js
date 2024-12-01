function checkAnswer(questionNumber, answer) {
  let feedbackElement = document.getElementById("feedback" + questionNumber);

  // Correct answers for recyclable and non-recyclable items
  const correctAnswers = {
    1: ['a', 'b', 'd'], // Paper, Plastic Bottle, Aluminum Can
    2: ['a', 'b', 'd'], // Cardboard, Glass Bottle, Aluminum Foil
    3: ['a', 'c', 'd'], // Paper Bag, Milk Carton, Tin Can
    4: ['d'], // Pizza Box
    5: ['c'], // Plastic Grocery Bag
    // Add more answers for remaining questions
  };

  if (correctAnswers[questionNumber].includes(answer)) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.className = "correct";
  } else {
    feedbackElement.textContent = "Incorrect. Please try again.";
    feedbackElement.className = "incorrect";
  }
}


const sidebar = document.querySelector(".sidebar");
const sidebarToggler=document.querySelector(".sidebar-toggler");

sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

});
