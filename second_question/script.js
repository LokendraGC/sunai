arr = [7, 12, 4, 18, 2, 6];

const sum = arr.filter((ele) => ele % 3 == 0).reduce((a, b) => {
    return a + b;
  }, 0);

console.log(sum);



