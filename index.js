// index.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  const wordCount = countWords(sentence);
  console.log(`Number of words in the sentence: ${wordCount}`);
  rl.close();
});

function countWords(sentence) {
  const words = sentence.split(' ');
  return words.length;
}
