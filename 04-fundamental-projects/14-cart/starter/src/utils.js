export const getTotals = (cart) => {
  console.log(cart);
  let totalAmount = 0;
  let totalCost = 0;
  //for petlja u kojoj iz Map objekta cart ispisujemo samo values bez key-eva. Radimo usput i destructuring objekta sa {amount, price} tj. iz
  //objekta koji je values izvlacimo samo amount i price jer nas samo to zanima
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }

  return { totalAmount, totalCost };
};
