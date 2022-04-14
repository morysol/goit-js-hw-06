const categories = [...document.querySelector('#categories').children].map(category => {
  return {
    category: category.querySelector('h2').innerText,
    elements: category.querySelector('ul').children,
  };
});

console.log(`Number of categories: `, categories.length);

categories.forEach(({ category, elements }) => {
  console.log('Category: ', category);
  console.log('Elements: ', elements.length);
});
