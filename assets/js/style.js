document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input"); 
    inputs.forEach(function (inputElement) {
      inputElement.addEventListener("focus", function () {
        inputElement.style.caretColor = "hsl(259, 100%, 65%)";
        inputElement.style.borderColor = "hsl(259, 100%, 65%)";
      });
  
      inputElement.addEventListener("blur", function () {
        inputElement.style.caretColor = "";
      });
    });
  });
  
  


