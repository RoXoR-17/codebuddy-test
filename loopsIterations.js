// level 2

const fibonacciSequence = (length = 6) => {
  let sum = 2;
  let sequence = [1, 1];
  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
    sum += sequence[i];
  }
  return `Sum: ${sum}`;
};
