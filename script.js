const result = document.getElementById('result');
const copyBtn = document.getElementById('clipboard');
const passwordLength = document.getElementById('length');
const generatePassBtn = document.getElementById('generate');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const generateAndDisplayPassword = () => {
  const password = generatePassword(
    Number(passwordLength.value),
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked
  );
  result.textContent = password;
};

const copyPasswordToClipboard = () => {
  if (result.textContent !== '') {
    navigator.clipboard
      .writeText(result.textContent)
      .then(() => {
        alert('password copied to clipboard');
      })
      .catch((err) => {
        alert('unable to copy password', err);
      });
  }
};

function generatePassword(
  passwordLength,
  isUpperCase,
  islowercase,
  isNumber,
  isSymbol
) {
  if (passwordLength <= 0) {
    alert('Password length should be greater than 0');
    return '';
  }
  // Define character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // include chars to passwordList if checked
  let allChars = '';

  if (isUpperCase) allChars += uppercaseChars;
  if (islowercase) allChars += lowercaseChars;
  if (isNumber) allChars += numberChars;
  if (isSymbol) allChars += symbolChars;

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

document.addEventListener('DOMContentLoaded', generateAndDisplayPassword);
generatePassBtn.addEventListener('click', generateAndDisplayPassword);
copyBtn.addEventListener('click', copyPasswordToClipboard);
