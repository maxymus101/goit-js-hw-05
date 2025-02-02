// Пакування товарів
function isEnoughCapacity(products, containerSize) {
  let allProducts = Object.values(products);
  let totalAmount = 0;
  for (const product of allProducts) {
    totalAmount += product;
  }
  console.log(
    `Total amount of products = ${totalAmount}.  Container size ${containerSize}.`
  );

  if (totalAmount <= containerSize) {
    return `Answer -> ${true}. You can grab all this thingth.`;
  } else {
    return `Answer -> ${false}. Upss. To much products, your limit is ${containerSize}!`;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
