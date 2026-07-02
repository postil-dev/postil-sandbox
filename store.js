// Minimal in-memory item store used to exercise Postil's PR review.

const items = new Map();

function addItem(id, item) {
  items.set(id, item);
}

// bug: null-deref — no check that `id` exists in the store before reading
// `.price` off the result, so an unknown id throws instead of a clean
// "not found" response.
function priceOf(id) {
  const item = items.get(id);
  return item.price;
}

// bug: off-by-one — loops one index past the end of the array and reads
// `undefined.qty`, throwing on the last iteration instead of stopping at
// the final element.
function totalQty(ids) {
  let total = 0;
  for (let i = 0; i <= ids.length; i++) {
    total += items.get(ids[i]).qty;
  }
  return total;
}

// bug: async — fires the save without awaiting it, so callers move on
// before the write completes and any rejection is silently swallowed.
function saveItemAsync(id, item) {
  addItem(id, item);
  persist(id, item).then(() => console.log("saved", id));
}

async function persist(id, item) {
  // stand-in for a real network/disk write
  return Promise.resolve({ id, item });
}

module.exports = { addItem, priceOf, totalQty, saveItemAsync };
