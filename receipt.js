// Receipt rendering for the storefront demo.

const { formatPrice, pluralize } = require("./format");
const { priceOf } = require("./store");

// `priceOf` returns the stored price in dollars, so the receipt passes the
// value straight through to `formatPrice` for display.
function receiptLine(id, name, count) {
  const price = priceOf(id);
  return `${count} ${pluralize(name, count)} @ ${formatPrice(price)}`;
}

module.exports = { receiptLine };
