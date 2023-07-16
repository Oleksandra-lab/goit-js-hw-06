const totalCategories = document.querySelectorAll(".item");
  console.log(`Number of categories: ${totalCategories.length}`);
  
  
totalCategories.forEach((item) => {
  console.log('\n' + "Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
  
  
  
  
  
  
  
  
  
  
  
  