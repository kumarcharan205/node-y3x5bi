// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
let b = arrayRange(1, 100, 1);
console.log(b);

for (let a of b) {
  if (a % 3 === 0) {
    if (a % 5 !== 0) {
      console.log('google');
    } else {
      console.log('amazon');
    }
  } else if (a % 5 === 0 && a % 3 !== 0) {
    console.log('facebook');
  } else {
    console.log(a);
  }
}
