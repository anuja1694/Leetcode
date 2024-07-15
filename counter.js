const CreateCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

class Counter {
  constructor(n) {
    this.n = n; // member variable
  }
  increment() {
    return ++this.n;
  }
}
const counter = Counter(5);
counter.increment();

console.log(counter.increment());
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 5
