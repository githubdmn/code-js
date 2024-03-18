let fruits: string[] = ['apple', 'banana'];

// 1. push(): Adds one or more elements to the end of an array.
fruits.push('orange', 'grape');

// 2. pop(): Removes the last element from an array and returns that element.
let lastFruit = fruits.pop();

// 3. unshift(): Adds one or more elements to the beginning of an array.
fruits.unshift('kiwi', 'pear');

// 4. shift(): Removes the first element from an array and returns that element.
let firstFruit = fruits.shift();

// 5. splice(): Adds or removes elements from an array at a specified index.
fruits.splice(1, 1, 'cherry', 'pineapple');

// 6. reverse(): Reverses the order of the elements in an array.
fruits.reverse();

// 7. sort(): Sorts the elements of an array in place.
fruits.sort();

// 8. fill(): Fills all the elements of an array with a static value.
let numbers: number[] = new Array(5);
numbers.fill(0);

console.log('Modified fruits array:', fruits);
console.log('Last fruit removed:', lastFruit);
console.log('First fruit removed:', firstFruit);
console.log('Numbers array filled with zeros:', numbers);
