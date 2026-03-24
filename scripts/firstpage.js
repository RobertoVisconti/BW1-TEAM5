const buttonProceed = document.getElementById("button-proceed");
const checkbox = document.getElementById("checkbox");

buttonProceed.addEventListener("click", function () {
  if (checkbox.checked) {
    event.preventDefault();
    window.location.href = "questions.html";
  }
});
