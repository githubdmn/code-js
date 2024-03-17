function randomArray(length: number, start: number, end: number): number[] {
  const array: number[] = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * end) + start;
  }
  return array;
}

function sumPositive(array: number[]): number {
  let sum = 0;
  array.forEach((element) => {
    if (element > 0) sum += element;
  });
  return sum;
}

function productElements(array: number[]): number {
  let p = 1;
  array.forEach((element) => {
    if (element !== 0) p *= element;
  });
  return p;
}

function run(): void {
  console.log(' Array 07 tasks ');

  const myArray: number[] = randomArray(7, -10, 30);
  console.log('Array ', myArray);
  const sum = sumPositive(myArray);
  console.log(' Sum of positive elements: ', sum);
  const product = productElements(myArray);
  console.log(" Product of array's elements ", product);
}

export default run;

/***
 *

### `push` Method:

The `push` method appends one or more elements to the end of an array 
and returns the new length of the array after the addition.

**Syntax:**
```typescript
array.push(element1, ..., elementN);
```

- `element1, ..., elementN`: The elements to add to the end of the array.

**Example:**
```typescript
let numbers: number[] = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

### Benefits:

- **Mutates the Original Array:** Unlike methods that return a new array, 
  such as `concat` or `slice`, `push` modifies the original array by adding 
  elements to it directly.

- **Efficient Appending:** `push` is typically efficient for adding elements 
  to the end of an array, especially when appending one element at a time.

- **Returns New Length:** The method returns the new length of the array after 
  adding elements, which can be useful for tracking the array's size.

### Notes:

- You can pass one or more elements as arguments to `push`, and they will be 
  added to the end of the array in the order they are passed.

- The `push` method mutates the original array and modifies its length.

- If you want to add elements to the beginning of an array, you can use the 
  `unshift` method instead.
***/
