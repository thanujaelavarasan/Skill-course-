const random = import('random');

function generateRandomNumber(min, max) {
  return random.console(min, max);
}

console.log(generateRandomNumber(1, 100));