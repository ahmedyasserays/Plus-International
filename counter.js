let counterDiv = document.getElementById("counterDiv");
let show =
  counterDiv.offsetTop + counterDiv.offsetHeight / 2 - counterDiv.offsetHeight;

let brandsC = document.querySelector("#brandsC span"); // +5
let hyperC = document.querySelector("#hyperC span"); // +125
let customerC = document.querySelector("#customerC span"); // +500
let barsC = document.querySelector("#barsC span"); // +18
let restauC = document.querySelector("#restauC span"); // +40


import { CountUp } from './countUp.js';

window.addEventListener("scroll", () => {
  if (window.scrollY >= show) {
    if (+brandsC.innerText === 0) {
      let countUp = new CountUp(brandsC, 5);
      countUp.start();
    }
    if (+hyperC.innerText === 0) {
      let countUp = new CountUp(hyperC, 125);
      countUp.start();
    }
    if (+customerC.innerText === 0) {
      let countUp = new CountUp(customerC, 500);
      countUp.start();
    }
    if (+barsC.innerText === 0) {
      let countUp = new CountUp(barsC, 18);
      countUp.start();
    }
    if (+restauC.innerText === 0) {
      let countUp = new CountUp(restauC, 40);
      countUp.start();
    }
  }
})