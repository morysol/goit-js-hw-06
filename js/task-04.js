const counter = {
  counterValue: 0,

  counter: document.querySelector('.counter'),
  valueUI: document.querySelector('#value'),

  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),

  decrement() {
    this.counterValue -= 1;
  },
  increment() {
    this.counterValue += 1;
  },
  updateValueUI() {
    this.valueUI.textContent = this.counterValue;
  },
  addDecrementListener() {
    this.btnDecrement.addEventListener('click', () => {
      counter.decrement();
      counter.updateValueUI();
    });
  },
  addIncrementListener() {
    this.btnIncrement.addEventListener('click', () => {
      counter.increment();
      counter.updateValueUI();
    });
  },
};

counter.updateValueUI();

counter.addDecrementListener();
counter.addIncrementListener();
