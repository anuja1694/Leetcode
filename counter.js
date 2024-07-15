const CreateCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

const counter = CreateCounter(5);
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 5
