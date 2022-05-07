const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyle = getComputedStyle(items);
const item = document.querySelectorAll(".item");

const itemWidth = getComputedStyle(items.firstElementChild).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const minRight = 0;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", (event) => {
  event.preventDefault();

  items.appendChild(items.firstElementChild);

  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = `${currentRight}px`;
  }
});

left.addEventListener("click", (event) => {
  event.preventDefault();

  items.insertBefore(items.lastElementChild, items.firstElementChild);

  if (currentRight > minRight) {
    currentRight -= step;
  }
});