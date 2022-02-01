const body = document.querySelector("body");

const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgimage");

document.body.prepend(bgImage); // append =html 에서 가장 뒤에 추가, prepend = html에서 가장 앞에 추가
