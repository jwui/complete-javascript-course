/*  
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console 
*/

// const country = "South Korea";
// const continent = "Asia";
// let population = 51780000;

// console.log(country, continent, population);

/* 
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console 
*/

// const isIsland = false;
// let language = "Korean";
// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// );

/* 
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

/* 
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' 
*/

// let halfPopulation = population / 2;
// let populationPlusOne = population + 1;
// let finnishPopulation = 6000000;
// let averagePopulation = 33000000;
// console.log(halfPopulation);
// console.log(populationPlusOne);
// console.log(population > finnishPopulation);
// console.log(population > averagePopulation);
// let description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

/* 
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax 
*/

// description = `Portugal is in Europe, and its 11 million people speak portuguese`;

/* 
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original 
*/

// if (population >= 33000000) {
//   console.log(`South Korea's population is above average.`);
// } else {
//   let below = 33000000 - population;
//   console.log(`South Korea's population ${below} below average.`);
// }

/* 
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right 
*/

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

/* 
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation 
*/

// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );

// if (numNeighbors === 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

/* 
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D) 
*/

// let speaksEnglish = false;
// let population = 51780000;
// let isIsland = false;

// if (speaksEnglish == true && population <= 50000000 && isIsland == false) {
//   console.log("You should live in South Korea :)");
// } else {
//   console.log("South Korea does not meet your criteria :(");
// }

/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

// let language = "mandarin";

// switch (language) {
//   case "chinese":
//     console.log("MOST number of native speakers!");
//     break;
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3nd place in number of native speakers");
//     break;
//   case "hindi":
//     console.log("4nd place in number of native speakers");
//     break;
//   case "arabic":
//     console.log("5nd place in number of native speakers");
//     break;
//   default:
//     console.log("Not a valid input.");
// }

/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

console.log(
  `South Korea's population is ${51.78 >= 33 ? "above" : "below"} average`
);
*/
