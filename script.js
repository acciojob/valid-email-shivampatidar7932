function validEmail(str) {
  // Define a regular expression for a valid email address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email matches the regular expression
  return emailRegex.test(str);
}

// Test the function
const emailInput = prompt("Enter an email address:");
alert(validEmail(emailInput));
