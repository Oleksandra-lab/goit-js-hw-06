const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.classList.add("item")
//   liEl.textContent = ingredient;
//   ulEl.appendChild(liEl)
// }
// document.body.appendChild(ulEl);

function createMarkup(ingredients){
  const items = ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
  liEl.classList.add("item")
  liEl.textContent = ingredient;
     return liEl;
  })
  ulEl.append(...items);
}
createMarkup(ingredients);