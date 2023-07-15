const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.createElement("ingredients")

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.classList.add("item")
  liEl.textContent = ingredient;
  ulEl.appendChild(liEl)
}
document.body.appendChild(ulEl);