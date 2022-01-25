const quotes = [
  //이처럼 배열안에 {} 사용할 수 있다 하나의 오브젝트로 봐도된다.
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿는 믿는 대로 될것이다",
    author: "헨리포드",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
    author: "동아프리카 속담",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
    author: "하버트 개서",
  },
  {
    quote:
      "도중에 포기하지 말라 망설이지 말라 최후의 성공을 거둘 때까지 밀고 나가자",
    author: "헨리포드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math. 은 0과 1사이에 소숫자를 포함한 수가 나오기 때문에 * 10같은 숫자를 곱해줘 1~10사이의 숫자를 나타나게 할 수 있다.
// ceil은 올림 floor은 내림 round는 반올림
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
