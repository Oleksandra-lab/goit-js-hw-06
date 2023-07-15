const totalCategories = document.querySelectorAll(".item");
  console.log(`Number of categories: ${totalCategories.length}`);
  
  const categoriesList = [...totalCategories].map(categories => 
  `Category: ${categories.firstChild.textContent}
  Elements: ${categories.lastChild.children.length}`)
  .forEach((element) => console.log('\n' + element))
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const ulEl = document.querySelector("#categories")
// console.log(ulEl);

// const categories = ulEl.children;
// console.log(categories);


// const itemEl = document.querySelectorAll('.item')
// console.log(itemEl);
// console.log(`Number of categories: ${itemEl.length}`);
// let categoriesNumber = 0;
// itemEl.forEach(category =>{
//     console.log(category);
//     categoriesNumber++
// })
// console.log(categoriesNumber);


// const categoriesTitles = document.querySelectorAll('h2')
// console.log(categoriesTitles);
// categoriesTitles.forEach(title => {
//     console.log(title);
// })
 
// const categoriesUlEl = itemEl.querySelectorAll('ul')
//   console.log(categoriesUlEl);
// !=============================================


  