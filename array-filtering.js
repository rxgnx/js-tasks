const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

console.log(mixedArray.filter(isEven));