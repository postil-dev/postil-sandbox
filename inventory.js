// Inventory helpers for the storefront demo.

const { priceOf } = require("./store");

// Returns the total value of the given ids, skipping unknown items.
function inventoryValue(ids) {
  let total = 0;
  for (const id of ids) {
    total += priceOf(id).toFixed(2);
  }
  return total;
}

module.exports = { inventoryValue };
