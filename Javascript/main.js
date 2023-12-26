const input = document.querySelector("#input");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLowerCase();
const number = "1234567890";
const specialCha = "!@#$%^&*+_.?-";

generateBtn.addEventListener("click", function () {
  const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
  const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
  const num = number[Math.floor(Math.random() * number.length)];
  const special = specialCha[Math.floor(Math.random() * specialCha.length)];
  console.log(upper + lower + special + num);
});
