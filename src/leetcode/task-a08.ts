/***
 * 8. Given an array a[1], a[2], ..., a[n], write:

   a) A procedure that changes the sign of all elements with even (odd) indices.
   
   b) A function that determines the number of even elements with odd indices in the array.
   
   c) A function that determines the number of elements k that precede the first negative element. If all elements are non-negative, k is equal to the number of elements in the array.

*
*/

import { formRandomArray } from './task-formArray';

function changeSignA(array: number[]): void {
  array.forEach((element, index) => {
    if (index % 2 === 0) array[index] = -element;
  });
}

function determineEvenElements(array: number[]): number {
  let counter = 0;
  array.forEach((element, index) => {
    if (index % 2 !== 0 && element % 2 === 0) counter += 1;
  });
  return counter;
}

function elementsReturned(array: number[]): number {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) break;
    else counter += 1;
  }
  return counter;
}

function elementsReturned2(array: number[]): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) return i;
  }
  return array.length;
}

function elementsReturned3(array: number[]): number {
  let i = 0;
  while (array[i] > 0) i += 1;
  return i;
}

function run(): void {
  console.log(' Run 08 ');
  const array: number[] = formRandomArray(15, -30, 90);
  console.log(' array: ', array);
  // changeSignA(array);
  // console.log(' array: ', array);
  console.log(
    'Count even elements odd indencies ',
    determineEvenElements(array),
  );
  console.log('Elements returned: ', elementsReturned(array));
  console.log('Elements returned: ', elementsReturned2(array));
  console.log('Elements returned: ', elementsReturned3(array));
}

export default run;

/***
 *

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

*/
