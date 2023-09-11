document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector("button[type='submit']");
    submitBtn.addEventListener("click", calculateAge);
});

// Function that verify if the date is a valid date

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

// Function that verify if the day/month/year is a number and has no other characters

function isPositiveInteger(value) {
    return /^[1-9]\d*$/.test(value);
}

// Function that verify if the day is a valid day from the month

function isValidDay(day, month, year) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= lastDayOfMonth;
}

// Function that calculate the age

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

    const textDay = document.getElementById("day-text");
    const textMonth = document.getElementById("month-text");
    const textYear = document.getElementById("year-text");



    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    const birthYear = Number(birthYearInput.value);
    const birthMonth = Number(birthMonthInput.value);
    const birthDay = Number(birthDayInput.value);


    let hasError = false;


    // Function to change the colors to red in case to Error
    function date_hasError(alert, birthInput, alertText) {
        alert.style.color = "hsl(0, 100%, 67%)";
        birthInput.style.borderColor = "hsl(0, 100%, 67%)";
        alertText.style.color = "hsl(0, 100%, 67%)";
    }

    // Function to change the colors to default in case to NO Error

    function date_hasNoError(alert, birthInput, alertText) {
        alert.style.color = "rgb(255, 255, 255)";
        birthInput.style.borderColor = "hsl(0, 0%, 86%)";
        alertText.style.color = "hsl(0, 1%, 44%)";
    }


    // Verify the day input    

    // Verify if the day isn't a negative number.
    if (birthDay < 0) {
        alertDay.textContent = "Must be a valid day";
        hasError = true;
        date_hasError(alertDay, birthDayInput, textDay);

    }

    // Verify if the day is number and has no other characters.

    else if (!isPositiveInteger(birthDay)) {
        alertDay.textContent = "This field is required";
        hasError = true;
        date_hasError(alertDay, birthDayInput, textDay);
    }

    // Verify if the month is between 1 and 31 (The amount of day from the month).
    // Verify too if the day is valid from the month using the function 'isValidDay'

    else if (birthDay < 1 || birthDay > 31 || !isValidDay(birthDay, birthMonth, birthYear)) {
        alertDay.textContent = "Must be a valid day";
        hasError = true;
        date_hasError(alertDay, birthDayInput, textDay);
    }



    // Verify the month input


    // Verify if the month isn't a negative number.

    if (birthMonth < 0) {
        alertMonth.textContent = "Must be a valid month";
        hasError = true;
        date_hasError(alertMonth, birthMonthInput, textMonth);
    }

    // Verify if the month is number and has no other characters.

    else if (!isPositiveInteger(birthMonth)) {
        alertMonth.textContent = "This field is required";
        hasError = true;
        date_hasError(alertMonth, birthMonthInput, textMonth);
    }

    // Verify if the month is between 1 and 12 (The amount of months from the year).

    else if (birthMonth < 1 || birthMonth > 12) {
        alertMonth.textContent = "Must be a valid month";
        hasError = true;
        date_hasError(alertMonth, birthMonthInput, textMonth);
    }




    // Verify the year input

    // Verify if the year is number and has no other characters.
    if (!isPositiveInteger(birthYear)) {
        alertYear.textContent = "This field is required";
        hasError = true;
        date_hasError(alertYear, birthYearInput, textYear);
    }

    // Calculate age
    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth + 1;
    let ageDay = currentDay - birthDay;



    // Adjust for negative ageMonth or ageDay
    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(currentYear, currentMonth, 0).getDate();
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }


    // Returns an error if the date is greater than the current date.

    if (ageYear < 0) {
        alertYear.textContent = "Must be in the past";
        alertMonth.textContent = "Must be in the past";
        alertDay.textContent = "Must be in the past";
        hasError = true;
        date_hasError(alertYear, birthYearInput, textYear);
        date_hasError(alertMonth, birthMonthInput, textMonth);
        date_hasError(alertDay, birthDayInput, textDay);
    }

    // Reset all previously displayed results.

    if (hasError) {
        resultYear.textContent = "--";
        resultMonth.textContent = "--";
        resultDay.textContent = "--";
        return;
    }

    // If has no error, reset all inputs to default

    if (!hasError) {
        date_hasNoError(alertDay, birthDayInput, textDay);
        date_hasNoError(alertMonth, birthMonthInput, textMonth);
        date_hasNoError(alertYear, birthYearInput, textYear);
    }

    


    // Display the age
    resultYear.textContent = ageYear;
    resultMonth.textContent = ageMonth;
    resultDay.textContent = ageDay;

}



