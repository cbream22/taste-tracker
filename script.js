console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Ramen", "Pizza", "Steak", "Burrito", "Sushi", "Pasta"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}

// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen"
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a function printFoodRecommendation(foodName) that prints three lines.
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
  console.log("-----------------------------");
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Pizza");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
  "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos",
  "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice",
  "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus",
  "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas",
  "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé",
  "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

// 5. Print out only foods that have an "a" in the name.
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].toLowerCase().includes("a")) {
    console.log(friendFavorites[i]);
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].toLowerCase().includes("a")) {
    foodsWithA.push(friendFavorites[i]);
  }
}
console.log("Foods with 'a':", foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
// Implemented explicitly using filter to make step 7 clear and separate.
let longFoodNames = friendFavorites.filter(function(food) {
  return food.length > 6;
});
console.log("Long food names (step 7):", longFoodNames);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(function(food) {
  return food.length <= 6;
});
console.log("Short food names (step 8):", shortFoodNames);

// 9. Print both arrays and compare:
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are an equal number of long and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
let longestFood = "";
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > longestFood.length) {
    longestFood = friendFavorites[i];
  }
}
console.log(
  "The longest food name in the list is " +
    longestFood +
    " with " +
    longestFood.length +
    " characters."
);