function showMessage(button, message) {
  // Clear previous messages
  document.querySelectorAll('.show').forEach(el => el.textContent = '');

  // Find the h3 element within the clicked item's parent div and set the message
  const messageElement = button.parentElement.querySelector('h3.show');
  messageElement.textContent = message;
}
const sidebar = document.querySelector(".sidebar");
const sidebarToggler=document.querySelector(".sidebar-toggler");

sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

});