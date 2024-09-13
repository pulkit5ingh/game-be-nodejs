const combinationsResponse = require('./03generateCombinations.event');

// Function to find the key with the smallest TOTAL_SUM
function findSmallestTotalSum(response) {
  let minKey = null;
  let minTotalSum = Infinity;

  response.forEach((item) => {
    const key = Object.keys(item)[0];
    const totalSum = item[key].TOTAL_SUM;

    if (totalSum < minTotalSum) {
      minTotalSum = totalSum;
      minKey = key;
    }
  });

  return {
    minKey,
    minTotalSum,
  };
}

// Find the key with the smallest TOTAL_SUM
const findSmallestResponse = findSmallestTotalSum(combinationsResponse);

// Log the findSmallestResponse
console.log(
  `EVENT 4 (Find Smallest TOTAL_SUM:)-----------------------------------------------`
);
console.log(findSmallestResponse);
console.log(`--------------------------------------------------------`);

module.exports = findSmallestResponse;
