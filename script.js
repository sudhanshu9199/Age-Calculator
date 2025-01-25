const dateInput = document.getElementById("date-input");
const calculateButton = document.querySelector(".cal-btn");
const result = document.querySelector(".jsControl");

calculateButton.addEventListener("click", () => {
  const db = dateInput.value;
  if (!db) {
    alert("Please select your date of birth!");
    return;
  }
  const age = calculateAge(db);
  result.textContent = `${age.years} years ${age.months} months`;
});

// Function
function calculateAge(dob) {
  const today = new Date(); // current date
  const birthDate = new Date(dob); // date of birth
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();

  // Adjust if the birth month hasn't occurred yet this year
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months }; // Return an obj. with years and months
}
