document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector("button[type='submit']");
    submitBtn.addEventListener("click", calculateAge);
});

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day); // Month is zero-based
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

function isPositiveInteger(value) {
    return /^[1-9]\d*$/.test(value);
}

function isValidDay(day, month, year) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= lastDayOfMonth;
}

function calculateAge(event) {
    event.preventDefault();

    const birthDayInput = document.getElementById("DD");
    const birthMonthInput = document.getElementById("MM");
    const birthYearInput = document.getElementById("YY");

    const resultYear = document.getElementById("result-year");
    const resultMonth = document.getElementById("result-month");
    const resultDay = document.getElementById("result-day");

    const alertDay = document.getElementById("alertDay");
    const alertMonth = document.getElementById("alertMonth");
    const alertYear = document.getElementById("alertYear");

    // Reset previous error messages
    alertDay.textContent = "";
    alertMonth.textContent = "";
    alertYear.textContent = "";

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Month is zero-based
    const currentDay = new Date().getDate();

    const birthYear = birthYearInput.value;
    const birthMonth = birthMonthInput.value;
    const birthDay = birthDayInput.value;

    let hasError = false;

    if (!isPositiveInteger(birthDay)) {
        alertDay.textContent = "This field is required";
        hasError = true;
    } else if (birthDay < 1 || birthDay > 31 || !isValidDay(birthDay, birthMonth, birthYear)) {
        alertDay.textContent = "Must be a valid day";
        hasError = true;
    }

    if (!isPositiveInteger(birthMonth)) {
        alertMonth.textContent = "This field is required";
        hasError = true;
    } else if (birthMonth < 1 || birthMonth > 12) {
        alertMonth.textContent = "Must be a valid month";
        hasError = true;
    }

    if (!isPositiveInteger(birthYear)) {
        alertYear.textContent = "This field is required";
        hasError = true;
    } else if (birthYear > currentYear) {
        alertYear.textContent = "Must be in the past";
        hasError = true;
    }

    if (hasError) {
        resultYear.textContent = "--";
        resultMonth.textContent = "--";
        resultDay.textContent = "--";
        return;
    }

      // Calculate age
      let ageYear = currentYear - birthYear;
      let ageMonth = currentMonth - birthMonth;
      let ageDay = currentDay - birthDay;
    


    // Adjust for negative ageMonth or ageDay
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth += 12;
        ageDay += 30; // Approximate number of days in a month
    }

    // Display the age
    resultYear.textContent = ageYear;
    resultMonth.textContent = ageMonth;
    resultDay.textContent = ageDay;

}


