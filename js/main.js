const getRandomElement = (min = 0, max = 1, comma = 2) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  const random = min + Math.random() * (max + 0.000001 - min);
  return +random.toFixed(comma);
};

for (let i = 0; i <= 100; i++) {
  console.log(getRandomElement(1, 2));
}

function getRandomInteger(min = 0, max = 5) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

console.log(getRandomInteger());
