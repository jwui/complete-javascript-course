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
