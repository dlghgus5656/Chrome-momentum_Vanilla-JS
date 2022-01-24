const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // padStart: 길이를 2로 지정한다 길이가 2보다 작을경우 앞에서부터 0으로 채운다.(01)
  const minutes = String(date.getMinutes()).padStart(2, "0"); //padEnd: 길이를 2로 지정한다 길이가 2가 아닐경우 뒤에서부터 0으로 채운다.(10)
  const second = String(date.getSeconds()).padStart(2, "0"); // 참고로 padStart,End 는 string 값으로 받아야 사용가능하다.(String으로 묶어주는 이유)

  clock.innerText = `${hours}:${minutes}:${second}`;
}

getClock();
setInterval(getClock, 1000); //5초마다 실행

//setTimeout(sayHello, 5000); // 5초 기다렸다가 한번만 실행
