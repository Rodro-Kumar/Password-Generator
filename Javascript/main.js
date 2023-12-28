// const input = document.querySelector("#input");
// const generateBtn = document.querySelector("#generate");
// const copyBtn = document.querySelector("#copy");

// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercase = uppercase.toLowerCase();
// const number = "1234567890";
// const specialCha = "!@#$%^&*+_.?-";

// const allItem = uppercase + lowercase + number + specialCha;
// const passwordLength = 10;

// generateBtn.addEventListener("click", function () {
//   const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
//   const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
//   const num = number[Math.floor(Math.random() * number.length)];
//   const special = specialCha[Math.floor(Math.random() * specialCha.length)];
//   let password = upper + lower + special + num;
//   while (password.length <= passwordLength) {
//     password += allItem[Math.floor(Math.random() * allItem.length)];
//   }
//   input.value = password;
// });

// copyBtn.addEventListener("click", function () {
//   navigator.clipboard.writeText(input.value);
//   copyBtn.innerHTML = "Copied";
//   input.value = "copied";
//   input.style.color = "#FF9800";
// });

const output = document.querySelector("#input");
const genBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLocaleLowerCase();

const number = "1234567890";
const special = "!@#$%&*_+=-?.";

const allItem = uppercase + lowercase + number + special;
const passLength = 10;

genBtn.addEventListener("click", function () {
  const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
  const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
  const num = number[Math.floor(Math.random() * number.length)];
  const specialcha = special[Math.floor(Math.random() * special.length)];
  let password = upper + lower + num + specialcha;
  while (password.length <= passLength) {
    password += allItem[Math.floor(Math.random() * allItem.length)];
  }
  output.value = password;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
  output.value = "copied";
  copyBtn.innerHTML = "Copied";
});
