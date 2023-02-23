// Test case 1: sentence with unique words
const sentence1 = "pizza pasta salad burger fries";
const expected1 = [
  { word: "burger", count: 1 },
  { word: "fries", count: 1 },
  { word: "pasta", count: 1 },
];

const result1 = wordFrequencies(sentence1, 3);
console.assert(
  JSON.stringify(result1) === JSON.stringify(expected1),
  "Test case 1 failed"
);

// Test case 2: sentence with repeated words
const sentence2 = "pizza pasta salad burger pasta burger fries";
const expected2 = [
  { word: "burger", count: 2 },
  { word: "pasta", count: 2 },
  { word: "fries", count: 1 },
];

const result2 = wordFrequencies(sentence2, 3);
console.assert(
  JSON.stringify(result2) === JSON.stringify(expected2),
  "Test case 2 failed"
);

// Test case 3: sentence with ties in frequency
const sentence3 = "pizza pasta salad burger pasta burger fries salad pizza";
const expected3 = [
  { word: "burger", count: 2 },
  { word: "pasta", count: 2 },
  { word: "salad", count: 2 },
];

const result3 = wordFrequencies(sentence3, 3);
console.assert(
  JSON.stringify(result3) === JSON.stringify(expected3),
  "Test case 3 failed"
);

// Test case 4: sentence with fewer words than requested
const sentence4 = "pizza pasta salad burger fries";
const expected4 = [
  { word: "burger", count: 1 },
  { word: "fries", count: 1 },
  { word: "pasta", count: 1 },
];

const result4 = wordFrequencies(sentence4, 5);
console.assert(
  JSON.stringify(result4) === JSON.stringify(expected4),
  "Test case 4 failed"
);