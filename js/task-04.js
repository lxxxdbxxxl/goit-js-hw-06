let couterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueSum = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  couterValue += 1;
  valueSum.textContent = couterValue;
});

decrementBtn.addEventListener("click", () => {
  couterValue -= 1;
  valueSum.textContent = couterValue;
});
