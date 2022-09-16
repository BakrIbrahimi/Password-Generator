const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$^&-_()|*=";
let passwordLength;

range.addEventListener("change", () => {
  passwordLength = range.value;
  slidernum.innerText = range.value;
});

function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const x = generateX();
    password += x;
  }
  pass.innerText = password;
}

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function generateX() {
  const xs = [];
  if (uppercase.checked) {
    xs.push(getUppercase());
  }
  if (lower.checked) {
    xs.push(getLowercase());
  }
  if (num.checked) {
    xs.push(getNumber());
  }
  if (symbols.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

// generate btn
gbtn.addEventListener("click", generatePassword);

function alert(message) {
  mymodal.innerHTML = `<div class="alert alert-primary fs-5 alert-dismissible px-4 py-5" role="alert">
  <i class="fa-solid fa-circle-check me-1"></i>
    ${message} 
    <i type="button" class="fa-solid fa-circle-xmark fa-beat" style="--fa-animation-duration: 2s;" data-bs-dismiss="modal" aria-label="Close"></i></div>`;
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(pass.innerText);
  alert(`Nice, you copied this password ${pass.innerText}`);
});
