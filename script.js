// Akan names based on gender and day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to handle the form submission
document.getElementById('akanForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from refreshing the page
  
  const birthdate = new Date(document.getElementById('birthdate').value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  // Ensure a valid date
  if (!birthdate.getTime()) {
    alert('Please enter a valid date.');
    return;
  }

  // Get the day, month, year from the birthdate
  const day = birthdate.getDate();
  const month = birthdate.getMonth() + 1; // Months are 0-indexed in JavaScript
  const year = birthdate.getFullYear();
  const century = Math.floor(year / 100);
  const yearDigits = year % 100;

  // Validate day and month
  if (month <= 0 || month > 12 || day <= 0 || day > 31) {
    alert("Invalid date or month! Please check your input.");
    return;
  }

  // Zeller's congruence formula to calculate the day of the week
  const d = ( ( (century / 4) - 2 * century - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + day ) % 7;
  const dayOfWeek = Math.floor(d);

  // Determine Akan name based on gender and day of the week
  const name = (gender === 'male') ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  // Display the result
  document.getElementById('akanNameResult').textContent = `Your Akan name is ${name}.`;
});
