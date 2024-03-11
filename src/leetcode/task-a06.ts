function run(): void {
  console.log('--- Arrays ---');

  let nums: number[] = [5, 8, 4, 2, 3, 3, 1];
  let numsB: number[] = new Array(5);

  let fruit: string[] = ['apple', 'banana', 'orange'];
  let fruitB: Array<string> = ['orange', 'apple', 'banana'];
  let fruitC: string[] = new Array(4);

  console.log(' nums: ', nums);
  console.log(' fruit: ', fruit);
  nums.push(7);
  console.log(' altered nums: ', nums);
  nums.pop();
  console.log(' removed last: ', nums);

  let mixedArray: any[] = [1, 'Hello', true];

  console.log(' nums element 3: ', nums[2]);

  let numsC: readonly number[] = [8, 3, 6];
  let login: [string, string] = ['name@mail.com', 'myPassword'];

  // for(let i = 0; i < nums.length; i++)
  //   console.log(' num: ', nums[i]);

  // nums.forEach(element => console.log(' num ', element));

  // for...of
  for (const element of nums) console.log(' nums for...of: ', element);
}

export default run;
