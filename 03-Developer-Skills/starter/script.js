// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
Coding Challenge 1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17 C in 1
days ... 21 C in 2 days ... 23 C in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
  Data 1: [17, 21, 23]
  Data 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let forcast = '';
  let day = 0;

  arr.forEach(temp => {
    day++;
    forcast += `... ${temp} C in ${day} ${day === 1 ? 'day' : 'days'} `;
  });

  forcast += `...`;
  return forcast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
