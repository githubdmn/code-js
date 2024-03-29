/*** 

7. Write a program to calculate:

   a) The sum of positive elements in the array a[1], a[2], ..., a[n].
   
   b) The product of non-zero elements in the array a[1], a[2], ..., a[n].

8. Given an array a[1], a[2], ..., a[n], write:

   a) A procedure that changes the sign of all elements with even (odd) indices.
   
   b) A function that determines the number of even elements with odd indices in the array.
   
   c) A function that determines the number of elements k that precede the first negative element. If all elements are non-negative, k is equal to the number of elements in the array.

9. Write a function that determines the number of sign changes in an array of non-zero elements a[1], a[2], ..., a[n].

10. Write a function that checks if an array a[1], a[2], ..., a[n] has the property that every two consecutive elements are different.

11. Write a function that calculates a[1]*b[n]+a[2]*b[n-1]+... +a[n]*b[1] for given arrays a[1],a[2],...,a[n] and b[1],b[2],...,b[n].

12. Write a program that forms a new array a[1],a[2],...,a[2n] with values b[1],c[1],b[2],c[2],...,b[n],c[n] based on arrays b[1],b[2],...,b[n] and c[1],c[2],...,c[n].

13. Write a procedure that forms a new array b[1],b[2],...,b[n] based on an array a[1],a[2],...,a[2n] using the formula: b[i]=(a[i]+a[2n+1-i])/2

14. Write a procedure to determine the kth element of arrays formed in the following way:

   a[0] and b[0] are given, and
   
   a[i] = (a[i-1] + b[i-1]) / 2
   
   b[i] = a[k-1] * b[i-1] for i = 1, 2, 3, ...

15. Write a program that forms new arrays b[1],b[2],...,b[n] and c[1],c[2],...,c[n] based on an array a[1],a[2],...,a[2n]. Elements of b and c should be a[1], a[3], ..., a[2n-1] and a[2], a[4], ..., a[2n] respectively.

16. Given an array a[1], a[2], ..., a[2n], write a program to form a new array c[1], c[2], ..., c[2n] with elements rearranged in two ways:

   a) c[1] = a[1], c[n+1] = a[n+1], (c[2], c[n+2], ..., c[n], c[2n]) = (a[2], a[n+2], ..., a[n], a[2n])
   
   b) c[2n] = a[2n], c[1] = a[1], c[2n-1] = a[2n-1], ..., c[n+1] = a[n+1], c[n] = a[n] 

*/

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

function runSeven(): void {
  console.log(' Run 07 ');
  const myArray: number[] = randomArray(7, -10, 30);
  console.log('Array ', myArray);
  const sum = sumPositive(myArray);
  console.log(' Sum of positive elements: ', sum);
  const product = productElements(myArray);
  console.log(" Product of array's elements ", product);
}

function run(): void {
  console.log(' Array 07 tasks ');
  runSeven();
}

export default run;
