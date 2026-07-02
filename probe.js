// Computes order totals for the demo storefront.
function orderTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return total;
}

module.exports = { orderTotal };
