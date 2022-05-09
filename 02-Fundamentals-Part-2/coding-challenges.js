/* 
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀 
*/

// const calcAverageDolphins = (sumDolphins) => {
//   return sumDolphins / 3;
// };

// const calcAverageKoalas = (sumKoalas) => {
//   return sumKoalas / 3;
// };

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log("Dolphins win!");
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log("Koalas win!");
//   } else console.log("It's a draw!");
// }

// const avgDolphins = calcAverageDolphins(85 + 54 + 41);
// const avgKoalas = calcAverageKoalas(23 + 34 + 27);

// checkWinner(avgDolphins, avgKoalas);

/* 
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀 
*/

// const calcTip = (bill) => {
//   if (bill >= 50 && 300 >= bill) {
//     let tip = 0.15 * bill;
//     return tip;
//   } else {
//     let tip = 0.2 * bill;
//     return tip;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];
// console.log(totals);

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  BMI: function calcBMI() {
    return this.mass / this.height ** 2;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  BMI: function calcBMI() {
    return this.mass / this.height ** 2;
  },
};

if (markMiller.BMI() > johnSmith.BMI()) {
  console.log(
    `Mark's BMI (${markMiller
      .BMI()
      .toFixed(1)}) is higher than John's (${johnSmith.BMI().toFixed(1)})!`
  );
} else if (johnSmith.BMI() > markMiller.BMI()) {
  console.log(
    `John's BMI (${johnSmith
      .BMI()
      .toFixed(1)}) is higher than Mark's (${markMiller.BMI().toFixed(1)})!`
  );
} else console.log(`Mark and John have the same BMI!`);
