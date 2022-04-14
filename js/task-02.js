const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsMarkup = ingredients.reduce((acc, ingredient, i) => {
  acc.push(document.createElement('li'));
  acc[i].classList.add('item');
  acc[i].textContent = ingredient;
  return acc;
}, []);

const ingredientsTag = document.querySelector('ul#ingredients');
ingredientsTag.append(...ingredientsMarkup);
