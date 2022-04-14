const counter = {
  counterValue: 0,

  counter: document.querySelector('.counter'),
  valueUI: document.querySelector('#value'),

  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),

  onClickBtnDecrement() {
    this.counterValue -= 1;
  },
  onClickBtnIncrement() {
    this.counterValue += 1;
  },
  updateValueUI() {
    this.valueUI.textContent = this.counterValue;
  },
  addDecrementListener() {
    this.btnDecrement.addEventListener('click', () => {
      counter.onClickBtnDecrement();
      counter.updateValueUI();
    });
  },
  addIncrementListener() {
    this.btnIncrement.addEventListener('click', () => {
      counter.onClickBtnIncrement();
      counter.updateValueUI();
    });
  },
};

counter.updateValueUI();

counter.addDecrementListener();
counter.addIncrementListener();
