const decBtnEl = document.querySelector('#counter button[data-action="decrement"');
const incBtnEl = document.querySelector('#counter button[data-action="increment"');
const spanEl = document.querySelector('#value');


let counterValue = 0;

decBtnEl.addEventListener('click', () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
});

incBtnEl.addEventListener('click', () => {
  counterValue += 1;
  spanEl.textContent = counterValue;

})