const result = document.getElementById('result');
const passwordLength = document.getElementById('length');
const generatePassBtn = document.getElementById('generate');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

generatePassBtn.addEventListener('click', () => {
  const password = generatePassword(
    Number(passwordLength.value),
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked
  );
  result.textContent = password;
});

function generatePassword(
  passwordLength,
  isUpperCase,
  islowercase,
  isNumber,
  isSymbol
) {
  let password = '';
  // Define character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // include chars to passwordList if checked
  let allChars = '';

  if (isUpperCase) {
    allChars += uppercaseChars;
  }
  if (islowercase) {
    allChars += lowercaseChars;
  }
  if (isNumber) {
    allChars += numberChars;
  }
  if (isSymbol) {
    allChars += symbolChars;
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}
