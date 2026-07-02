// Clean formatting helpers, no intentional bugs — a control sample so not
// every file in the fixture trips the reviewer.

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

function pluralize(word, count) {
  return count === 1 ? word : `${word}s`;
}

module.exports = { formatPrice, pluralize };
