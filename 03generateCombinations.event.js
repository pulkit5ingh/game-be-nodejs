const fs = require('fs');
const path = require('path');

const {
  CATEGORY_A,
  CATEGORY_B,
  CATEGORY_C,
  CATEGORY_D,
  CATEGORY_E,
} = require('./02evenOddSmallBigSumWithNumber.event');

const SUM = {
  sum_even: 9024.84,
  sum_odd: 8339.76,
  sum_small: 3433.32,
  sum_big: 15691.5,
};

// Function to generate all 5-digit combinations
function generateCombinations() {
  const combinations = [];
  for (let i = 0; i <= 99999; i++) {
    combinations.push(i.toString().padStart(5, '0'));
  }
  return combinations;
}

// Function to process each combination
function processCombination(combination) {
  const digits = combination.split('').map(Number);
  const [a, b, c, d, e] = digits;

  const sum = digits.reduce((acc, num) => acc + num, 0);
  let sumCategory;
  let sumRange;

  if (sum % 2 === 0) {
    sumCategory = 'even';
  } else {
    sumCategory = 'odd';
  }

  if (sum >= 0 && sum <= 22) {
    sumRange = 'small';
  } else {
    sumRange = 'big';
  }

  const A = CATEGORY_A[0][a] || 0;
  const B = CATEGORY_B[0][b] || 0;
  const C = CATEGORY_C[0][c] || 0;
  const D = CATEGORY_D[0][d] || 0;
  const E = CATEGORY_E[0][e] || 0;
  const sumValue = SUM[`sum_${sumCategory}`] + SUM[`sum_${sumRange}`];

  return {
    [combination]: {
      A,
      B,
      C,
      D,
      E,
      SUM: sumValue,
      TOTAL_SUM: A + B + C + D + E + sumValue, // Add TOTAL_SUM key
    },
  };
}

// Generate combinations and process each
const combinations = generateCombinations();
const combinationsResponse = combinations.map(processCombination);

// Define the path for the JSON file
const filePath = path.join(__dirname, 'combinations.json');

fs.unlink(filePath, (err) => {
  if (err && err.code !== 'ENOENT') throw err; // Ignore error if file does not exist
  fs.writeFile(
    filePath,
    JSON.stringify(combinationsResponse, null, 2),
    (err) => {
      if (err) throw err;
      console.log(
        'combinations.json has been created and data has been written.'
      );
    }
  );
});

// Log combinationsResponse
console.log(
  `EVENT 3 (Generated Key-Value Pairs:)-----------------------------------------------`
);
console.log(JSON.stringify(combinationsResponse, null, 2));
console.log(`--------------------------------------------------------`);

module.exports = combinationsResponse;
