//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOOK_COST = 800;

export const cost = (books) => {  
  if (!books || books.length === 0) {
    return 0;
  }

  // Count books
  const counts = {};
  for (const book of books) {
    counts[book] = (counts[book] || 0) + 1;
  }

  // Form groups
  const groups = [];
  while (Object.values(counts).some(c => c > 0)) {
    const size = Object.values(counts).filter(c => c > 0).length;
    groups.push(size);
    for (const book in counts) {
      if (counts[book] > 0) {
        counts[book]--;
      }
    }
  }

  // Rebalance (5,3) -> (4,4)
  while (groups.includes(5) && groups.includes(3)) {
    groups.splice(groups.indexOf(5), 1);
    groups.splice(groups.indexOf(3), 1);
    groups.push(4, 4);
  }

  // Calculate price
  const discounts = {1: 0, 2: 0.05, 3: 0.10, 4: 0.20, 5: 0.25};
  return groups.reduce((sum, size) => sum + size * BOOK_COST * (1 - discounts[size]), 0);
};
