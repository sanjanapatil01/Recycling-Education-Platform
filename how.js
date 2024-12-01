// Show the next step and hide the previous one
function nextStep(step) {
  // Hide the current step
  document.getElementById(`step-${step}`).style.display = 'none';
  
  // Show the next step
  if (step < 5) {
    document.getElementById(`step-${step + 1}`).style.display = 'block';
  }
}

// End the tutorial and show a completion message
function endTutorial() {
  // Hide the last step
  document.getElementById('step-5').style.display = 'none';
  
  // Show the completion message
  document.getElementById('completion-message').textContent = 'Congratulations! You have learned how to recycle. Thank you for doing your part!';
}

// Initial step display
document.getElementById('step-1').style.display = 'block';
const sidebar = document.querySelector(".sidebar");
const sidebarToggler=document.querySelector(".sidebar-toggler");

sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

});