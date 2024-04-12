// I . 랜덤 숫자 생성
guessSubmit.addEventListener("click", checkGuess); //(6)

export let randomNumber = Math.floor(Math.random() * 100) + 1;

// 랜덤한 숫자 1~100 을 만드려고 함.
//
// Math.floor() : 소숫점 버림
// Math.random() : 0~1 사이의 소수 만드는 함수
// + 1 => 0~1 사이 이므로 0.00의 경우 0으로 출력될 가능성이 있으므로 1 표기.
//
// 함수의 알고리즘
// 1. Math.random을 통해 0.000xxx ~ 1.000xxx 사이의 숫자를 만듦
// 2. * 100을 통해 0.xxx ~ 100.xxx을 만듦
// 3. + 1을 통해 0이 될 경우 1로 만듦
// 4. Math.floor을 통해 .xxx부분 제거하여 정수로 만듦

// II. 변수 추가

export const guesses = document.querySelector(".guesses");
export const lastResult = document.querySelector(".lastResult");
export const lowOrHi = document.querySelector(".lowOrHi");

export const guessSubmit = document.querySelector(".guessSubmit");
export const guessField = document.querySelector(".guessField");

export let guessCount = 1;
export let resetButton;
// 데이터를 저장할 변수를 추가.

// III. 함수 생성

export function checkGuess() {
  const userGuess = Number(guessField.value);
  if (userGuess === 1) {
    guesses.textContent = "Previous guesses : ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++; //(3)
  guessField.value = ""; //(4)
  guessField.focus(); //(5)
}

// 1. checkGuess 함수 만들기
//
// 1) 함수 내에 userGuess 변수 선언 , 변수는 숫자열, guessField의 guessField의 value
// 2) userGuess의 값에 따른 조건문 생성
// - userGuess의 값이 randomNumber와 같은 경우 축하문구와 함께 background의 색상이 초록색으로 변함
// - userCount의 값이 10번에 도달하면 Game over 문구를 출력
// - userGuess와 randomNumber와 다른 경우
//      i) randomNumber보다 작은 경우 제출한 숫자가 작다는 문구를 출력
//      ii) randomNumber보다 큰 경우 제출한 숫자가 크다는 문구를 출력
// 3) 함수가 실행될 때 count가 1씩 추가 됨
// 4) guessField 초기화(input에 들어가는 숫자 초기화)
// 5) guessField에 focus (활성화된 상태)
// 6) 이벤트 수신기를 통해 제출 시 checkGuess함수를 실행
//      !! EventListener는 첫 번째 인자를 이벤트의 유형 ex. (click), 두 번쩨 인자는 사용하게 될 함수를 불러온다. 이때 함수에 "()"를 붙이지 않는다.

export function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

// 2. setGameOVer 함수 만들기
//
// 1) guessField, guessSubmit에 disabled 속성을 설정하여 두 행위에 대한 비활성화를 진행, 비활성화를 하지 않으면 사용자가 정답을 추가적으로 입력해 게임이 망가질 수 있기 떼문
// 2) button을 생성하여 새로운 게임을 시작하도록 설정
// 3) 마지막은 resetGame이라는 함수를 불러오기 위함.

export function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// 3. resetGame 함수 만들기
//
// 1) guessCount 값 초기화
// 2) 함수 내에 resetParas 변수 선언.
//    - 모든 정보 텍스트 문단의 내용을 지운다. <div class="resultParas"></div> 안의 모든 문단 요소를 선택, 하나씩 순회하면서 각각의 textContent를 ''(빈 문자열)로 설정하는 방식입니다.
// 3) html에서 초기화 버튼을 제거
// 4) 양식 요소를 다시 활성화, 입력칸을 비운 후 포커스 상태를 부여,
// 5) 설정되었던 배경색 제거
// 6) 무작위 숫자 재생성
