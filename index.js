const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = function (array) {
  let emptyArr = [];
  let newArray = array.map((word) => console.log(word));
  for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
  }
};

console.log(titleCased(tutorials));
