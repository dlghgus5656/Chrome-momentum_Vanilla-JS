//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 기능을 막음 여기서는 새로고침기능을 막아주고 있다.
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden클래스 추가
  //const username = loginInput.value;
  //console.log(loginInput.value);
  const username = loginInput.value; //입력값을 받는 변수 username 생성
  localStorage.setItem(USERNAME_KEY, username); // 입력 받은 값을 locakstorage에 저장
  //greeting.innerText = "Hello " + username;
  //greeting.innerText = `Hello ${username}`; // 위랑 현재코드랑 기능은 같다/ 옆에 코드는 "" '' 둘다 아니고 `` 백틱으로 묶어줘야한다.
  //greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(); //저장된 입력 값을 가지고 아래 function 명령문 실행
}

//loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //페이지 시작시 가장 먼저 명령 실행 저장된 username이 없으면 if문 명령 실행
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greㄸㄷeting
  paintGreetings();
}
