const {
  CATEGORY_A,
  CATEGORY_B,
  CATEGORY_C,
  CATEGORY_D,
  CATEGORY_E,
} = require('./01addMargin.event');

// const CATEGORY_A = addMarginEventResponse.CATEGORY_A;
// const CATEGORY_B = addMarginEventResponse.CATEGORY_B;
// const CATEGORY_C = addMarginEventResponse.CATEGORY_C;
// const CATEGORY_D = addMarginEventResponse.CATEGORY_D;
// const CATEGORY_E = addMarginEventResponse.CATEGORY_E;

// Function to process each category
function processCategory(category) {
  return category.map((item) => {
    const { even, small = 0, big, odd } = item;
    const processedItem = {};

    for (const key in item) {
      if (key >= '0' && key <= '9') {
        if (['0', '2', '4'].includes(key)) {
          processedItem[key] = item[key] + (even || 0) + (small || 0);
        } else if (['1', '3'].includes(key)) {
          processedItem[key] = item[key] + (odd || 0) + (small || 0);
        } else if (['6', '8'].includes(key)) {
          processedItem[key] = item[key] + (even || 0) + (big || 0);
        } else if (['5', '7', '9'].includes(key)) {
          processedItem[key] = item[key] + (odd || 0) + (big || 0);
        }
      } else if (['small', 'even', 'big', 'odd'].includes(key)) {
        // For other keys, just retain their values as they are.
        processedItem[key] = item[key];
      }
    }

    return processedItem;
  });
}

// Process all categories
const processedA = processCategory(CATEGORY_A);
const processedB = processCategory(CATEGORY_B);
const processedC = processCategory(CATEGORY_C);
const processedD = processCategory(CATEGORY_D);
const processedE = processCategory(CATEGORY_E);

// Return the processed arrays
const evenOddSmallBigSumWithNumber = {
  CATEGORY_A: processedA,
  CATEGORY_B: processedB,
  CATEGORY_C: processedC,
  CATEGORY_D: processedD,
  CATEGORY_E: processedE,
};

console.log(
  `EVENT 2 (evenOddSmallBigSumWithNumber)-----------------------------------------------`
);
console.log(evenOddSmallBigSumWithNumber);
console.log(`--------------------------------------------------------`);

module.exports = evenOddSmallBigSumWithNumber;
