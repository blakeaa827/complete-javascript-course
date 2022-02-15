/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height invariables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);
*/

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}
*/

/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
// const scoreDolphins = [96, 108, 89];
// const scoreKoalas = [88, 91, 110];

// const scoreDolphins = [97, 112, 101];
// const scoreKoalas = [109, 95, 123];

const scoreDolphins = [97, 112, 101];
const scoreKoalas = [109, 95, 106];

let calcAvg = function (scores) {
    const denominator = scores.length;
    let total = 0;
    while (scores.length) total += scores.shift();
    return total / denominator;
}

const avgDolphins = calcAvg(scoreDolphins);
const avgKoalas = calcAvg(scoreKoalas);

if ((avgDolphins + avgKoalas) / 2 < 100) console.log(`Neither team scored the minimum average of 100 points.`)
else if (avgDolphins > avgKoalas) console.log(`Dolphins win with an average score of ${avgDolphins.toPrecision(4)} to ${avgKoalas.toPrecision(4)}.`)
else if (avgDolphins < avgKoalas) console.log(`Koalas win with an average score of ${avgKoalas.toPrecision(4)} to ${avgDolphins.toPrecision(4)}.`)
else console.log(`It's a tie of ${avgKoalas.toPrecision(4)}`);
*/

