const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1 : ${name}`;
}

// function createParagragh() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked th Button!";
//   document.body.appendChild(para);
// }
//
// <button onclick="createParagraph()">Click me!</button> => html 적용 구문
//
// JS 함수를 HTML에 직접 적용시키는 방법은 비효율적, 가급적 모든 JS 구문은 JS에서 처리되도록 할 것
// https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript

function createParagraph() {
  const para2 = document.querySelector("p");
  para2.textContent = "You clicked the Button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
