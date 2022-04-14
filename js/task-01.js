const categories = [...document.querySelector('#categories').children].map(category => {
  return {
    category: category.querySelector('h2').innerText,
    elements: category.querySelector('ul').children,
  };
});

categories.forEach(({ category, elements }, i, categories) => {
  console.log('Number of categories: ', categories.length);
  console.log('Category: ', category);
  console.log('Elements: ', elements.length);
});
