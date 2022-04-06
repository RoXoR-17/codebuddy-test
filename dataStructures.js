// level 2

const oddNumberArray = (inputArr = [1, 3, 4, 6, 7, 8]) =>
  inputArr.filter((num) => num % 2 !== 0);

const uppercaseVowels = (inputStr = "Elie") =>
  inputStr
    .split("")
    .map((char) => (/[aeiou]/i.test(char) ? char.toUpperCase() : char))
    .join("");

const maxNumInArray = (arr = [1, 3, 4, 6, 7, 8, 2, 5]) =>
  arr.sort((a, b) => b - a)[0];
