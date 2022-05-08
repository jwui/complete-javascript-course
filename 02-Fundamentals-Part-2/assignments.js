/* 
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console 
*/

// let describeCountry = function (country, population, capitalCity) {
//   let countryDescription = `${country} has ${population} people and its capital city is ${capitalCity}`;
//   console.log(countryDescription);
// };

// describeCountry("Finland", "6 million", "Helsinki");
// describeCountry("South Korea", "51 million", "Seoul");
// describeCountry("Japan", "126 million", "Tokyo");

/* 
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations) 
*/

// function percentageOfWorld1(population) {
//   let worldPopulation = 7900;
//   let percentagePopulation = ((population / worldPopulation) * 100).toFixed(2);
//   console.log(`${percentagePopulation}% of the world population`);
// }
// function percentageOfWorld2(population) {
//   let worldPopulation = 7900;
//   let percentagePopulation = ((population / worldPopulation) * 100).toFixed(2);
//   console.log(`${percentagePopulation}% of the world population`);
// }

// percentageOfWorld1(1441);
// percentageOfWorld1(51);
// percentageOfWorld1(126);
// percentageOfWorld2(1441);
// percentageOfWorld2(51);
// percentageOfWorld2(126);

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

// let percentageOfWorld3 = (population) => {
//   let worldPopulation = 7900;
//   let percentagePopulation = ((population / worldPopulation) * 100).toFixed(2);
//   console.log(`${percentagePopulation}% of the world population`);
// };

// percentageOfWorld3(51);

/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

// function percentageOfWorld1(population) {
//   let worldPopulation = 7900;
//   let percentagePopulation = ((population / worldPopulation) * 100).toFixed(2);
//   return percentagePopulation;
// }

// describePopulation = (country, population) => {
//   console.log(
//     `${country} has ${population} million people, which is about ${percentageOfWorld1(
//       population
//     )}% of the world.`
//   );
// };

// describePopulation("China", 1441);
// describePopulation("South Korea", 51);
// describePopulation("Japan", 126);

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

// const populations = new Array(1441, 51, 126, 33);
// console.log(populations.length == 4);

// function percentageOfWorld1(population) {
//   let worldPopulation = 7900;
//   let percentagePopulation = (population / worldPopulation) * 100;
//   return percentagePopulation.toFixed(2);
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighboring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbors. Store the array
into a variable called 'neighbors'
2. At some point, a new country called 'Utopia' is created in the neighborhood of
your selected country. So add it to the end of the 'neighbors' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbors' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighboring countries. To do that, find the
index of the country in the 'neighbors' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

// const neighbors = new Array("Japan", "China", "North Korea", "Taiwan");
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// if (neighbors.includes("Germany")) {
//   console.log("Probably a central European country :D");
// } else console.log("Probably not a central European country :D");
// neighbors[neighbors.indexOf("North Korea")] = "Sweden";
// console.log(neighbors);
