

// This script is designed to change the border color of the 'input' when it is in 'Focus,' as well as the color of the 'Caret,' to purple.

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input"); 
    inputs.forEach(function (inputElement) {
      inputElement.addEventListener("focus", function () {
        inputElement.style.caretColor = "hsl(259, 100%, 65%)";
        inputElement.style.borderColor = "hsl(259, 100%, 65%)";
      });
  
      inputElement.addEventListener("blur", function () {
        inputElement.style.caretColor = "";
        inputElement.style.borderColor = "";
      });
    });
  });
  
  


