
var quoter = "Either we live for now and today 12\n either we retreat 233 and either we live the morrow 100"
var counter = 0;

function regExMatcher(inputter, pattern) {
  let newStr = '';
  inputter.match(pattern).map((ellen) => {
    newStr += `${ellen} `;
  });
  return newStr;
}

function regExWord(inputter, pattern) {
  let newStr = '';
  inputter.split(' ').map((ellen) => {
    if (pattern.test(ellen)) {
      newStr += `${ellen} `;
    }
  });
  return newStr;
}

// 1
console.log(`\n============= Meta Characters =============`);
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
let findVowelerString = regExMatcher(quoter, findVoweler);
console.log(findVowelerString);


// 4
console.log(`\n\n=============${counter +=1}=============`);
console.log('Anti-Voweler with [^ ]\n');

const antiVoweler = /[^aeiou]/ig;
var antiVowelerString = regExMatcher(quoter, antiVoweler);
console.log(antiVowelerString);


// 5
console.log(`\n\n=============${counter +=1}=============`);
console.log('Ranges\n');

var numberer = '823478234823444386763';
const numbRanger = /[0-5]/ig;
const wordRanger = /[q-v]/ig;
var numbRangerFilter = regExMatcher(numberer, numbRanger);
var wordRangerFilter = regExWord(quoter, wordRanger);
console.log(numbRangerFilter);
console.log(wordRangerFilter);



// 6
console.log(`\n\n=============${counter +=1}=============`);
console.log('Or  |\n');

const orator = /(live | die | morrow)/ig;
console.log(quoter.replace(orator, " wakka wakka "));


// 7
console.log(`\n\n=============${counter +=1}=============`);
console.log('Wildcard .\n');

const wildcard = /.ow/g;
console.log(quoter.match(wildcard));


// 8
console.log(`\n\n=============${counter +=1}=============`);
console.log('Imma word   \w or not? \W \n');

const worder = /\w/g;
const antiWorder = /\W/g;
let worderString = regExWord(quoter, worder);   //regExMatcher(quoter, worder);
let antiWorderString = regExWord(quoter, antiWorder);
console.log(worderString);
console.log(antiWorderString);


// 9
// NOTE: \letter vs \LETTER the capitalized version is the antithesis of lowercase version
console.log(`\n\n=============${counter +=1}=============`);
console.log('d digit, s whitespace, b beginning/end  \n');

const ninerStr = 'In 200 years, the Yettis fled the depth there fifth pit. \n 320% they gave heeeel did not satisfy the mirth';
const digiter = /\d/ig;
const whitespacer =/\s/ig;
const bber = /\bth/ig;
console.log(ninerStr.match(digiter));
console.log(whitespacer.exec(ninerStr));
console.log(regExWord(ninerStr, bber));


// 10
console.log(`\n\n============= Quantifiers =============`);
console.log(`\n\n=============${counter +=1}=============`);
console.log(' n+, n*, n? \n');

const pluser = /i+/ig;
const starer = /th*/ig;
const whaaer = /he?/ig;
console.log(regExWord(ninerStr, pluser));
console.log(regExWord(ninerStr, starer));
console.log(ninerStr.match(whaaer));



console.log(' ');
console.log(' ');
