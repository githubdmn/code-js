function run(): void {
  console.log('--- Arrays ---');

  let nums: number[] = [5, 8, 4, 2, 3, 3, 1];
  let numsA: number[];
  let numsB: number[] = new Array(5);
  const numsC: number[] = [4, 2, 6, 2, 9, 9];
  let numsD: readonly number[] = [8, 3, 6];
  const numsE: readonly number[] = [3, 7, 5, 3];

  console.log(' nums: ', nums);
  // console.log(' numsA: ', numsA);
  console.log(' numsB: ', numsB);
  // numsC = nums;
  numsA = nums; // both refer to the same array

  let fruit: string[] = ['apple', 'banana', 'orange'];
  let fruitB: Array<string> = ['orange', 'apple', 'banana'];
  let fruitC: string[] = new Array(4);

  let mixedArray: any[] = [1, 'Hello', true];

  numsA.push(3);
  numsA.push(7);
  numsA.push(5);
  numsA.push(4);
  numsA.push(9);
  numsA.push(2);
  console.log(' numsA: ', numsA);
  numsA.pop();
  numsA.pop();
  numsA.pop();
  console.log(' numsA: ', numsA);

  let login: [string, string] = ['name@mail.com', 'myPassword'];

  for (let i = 0; i < nums.length; i++) console.log('nums for: ', nums[i]);

  nums.forEach((el) => console.log('nums forEach: ', el));
  // numsB.forEach(el => el = await backend.call()); // Promise<undefined>

  for (const el of nums) console.log(' nums forOf: ', el);

  console.log('\n\n');

  console.log('nums 2: ', nums[1]);
  console.log('nums reverse: ', nums[nums.length - 1]);
  console.log('nums over: ', nums[99]);
  console.log('nums 2: ', nums.at(1));
  console.log('nums 2: ', nums.at(-1));
  console.log('nums over: ', nums.at(99));
}

export default run;
