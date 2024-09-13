const {
  CATEGORY_A,
  CATEGORY_B,
  CATEGORY_C,
  CATEGORY_D,
  CATEGORY_E,
} = require('./data');

// Function to process each category
function processCategory(category) {
  return category.map((item) => {
    const processedItem = {};
    for (const key in item) {
      if (key >= '0' && key <= '9') {
        // For keys 0-9, multiply the value by 9
        processedItem[key] = item[key] * 9;
      } else if (['small', 'even', 'big', 'odd'].includes(key)) {
        // For keys small, even, big, odd, multiply the value by 1.98
        processedItem[key] = item[key] * 1.98;
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
const addMarginEventResponse = {
  CATEGORY_A: processedA,
  CATEGORY_B: processedB,
  CATEGORY_C: processedC,
  CATEGORY_D: processedD,
  CATEGORY_E: processedE,
};

console.log(
  `EVENT 1 (ADD MARGIN)-----------------------------------------------`
);
console.log(addMarginEventResponse);
console.log(`--------------------------------------------------------`);

module.exports = addMarginEventResponse;
