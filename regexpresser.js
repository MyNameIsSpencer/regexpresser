
var quoter = "Either we live for now and today \neither we retreat and either we live the morrow"
var counter = 0;

function regExMatcher(pattern) {
  let newStr = '';
  quoter.match(pattern).map((ellen) => {
    newStr += ellen;
  });
  return newStr;
}

// 1
console.log(`\n=============${counter +=1}=============`);
console.log('Insensitive g\n');

const eCheck = /e/ig;
console.log(quoter.replace(eCheck, 'eeeehhhh'));

// 2
console.log(`\n\n=============${counter +=1}=============`);
console.log('Multiliner\n');

const multiliner = /^Either/img;
console.log(multiliner.multiline);
console.log(quoter.replace(multiliner, 'Ding dong'));


// 3
console.log(`\n\n=============${counter +=1}=============`);
console.log('Find Vowel with [ ]\n');

const findVoweler = /[aeiou]/g;
let findVowelerString = regExMatcher(findVoweler);
console.log(findVowelerString);


// 4
console.log(`\n\n=============${counter +=1}=============`);
console.log('Anti-Voweler with [^ ]\n');

const antiVoweler = /[^aeiou]/ig;
var antiVowelerString = regExMatcher(antiVoweler);
console.log(antiVowelerString);


// 5
console.log(`\n\n=============${counter +=1}=============`);
console.log('Or  |\n');

const orator = /(live | die | morrow)/ig;
console.log(quoter.replace(orator, " wakka wakka "));


// 6
console.log(`\n\n=============${counter +=1}=============`);
console.log('Wildcard .\n');

const wildcard = /.ow/g;
console.log(quoter.match(wildcard));


7
console.log(`\n\n=============${counter +=1}=============`);
console.log('Imma word   \w or not? \W \n');

const worder = /\w/g;
const antiWorder = /\W/g;
let worderString = regExMatcher(worder);
let antiWorderString = regExMatcher(antiWorder);
console.log(worderString);
console.log(antiWorderString);


// 8
console.log(`\n\n=============${counter +=1}=============`);
console.log('Imma word   \w or not?\W \n');
