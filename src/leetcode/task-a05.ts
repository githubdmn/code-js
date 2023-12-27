// minimal value 3, 5, 6, 7, 3, 4, 1, 5, 9, 9, 2, 1
function min(n: number): void {
  let min = 1;
  for (let i = 0; i < n; i++) {
    let rnd = Math.floor(Math.random() * 20);
    console.log('RND: ', rnd);
    if (i == 0) min = rnd;
    if (min > rnd) min = rnd;
    console.log('min: ', min);
  }
}

// maximal value

// abcd -> dcba

function inverseNumber(n: number): number {
  let inverse = 0;
  let i = 1;
  let j = 1;
  while (n > 1) {
    inverse += Math.floor(n % 10) * i;
    console.log('Number: ', n, ' Inverse: ', inverse);
    i /= 10;
    j *= 10;
    n = Math.floor(n / 10);
  }
  return Math.floor((inverse * j) / 10);
}

function contains2(n: number): boolean {
  const two = 2;
  while (n > 1) {
    if (Math.floor(n % 10) == two) return true;
    n = Math.floor(n / 10);
  }
  return false;
}

// howMany2

// switch first and last: 246789 -> 946782
function firstLast(n: number): number {
  let last = (n % 10) * 10;
  n = Math.floor(n / 10);
  let partial = 0;
  let i = 1;
  while (n > 1) {
    if (n < 10) {
      partial += n;
      break;
    } else {
      partial += (n % 10) * 10 * i;
      n = Math.floor(n / 10);
      i *= 10;
    }
  }
  return last * i + partial;
}

function run(): void {
  console.log('Task 05');
  // min(6);
  //console.log(inverseNumber(48520));
  // console.log(contains2(2487));
  console.log(firstLast(246789));
}

export default run;
