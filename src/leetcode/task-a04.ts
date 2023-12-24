// (3 + 5 + 7 + 2 + 4) / 5
function mean(n: number): number {
  let i = 0;
  let s = 0;
  while (i <= n) {
    s += Math.floor(Math.random() * 10 + 1);
    i += 1;
  }
  return s / i;
}

function positiveNum(n: number): boolean {
  let i = 0;
  while (i <= n) {
    let rnd = Math.floor(Math.random() * 20 - 10);
    console.log(rnd);
    if (rnd < 0) return false;
    i += 1;
  }
  return true;
}

function dividers(n: number): void {
  console.log('n = ', n);
  let i = 2;
  while (true) {
    if (n % i == 0) {
      console.log('n: ', n, ' i: ', i);
      n = Math.floor(n / i);
    } else i += 1;
    if (n == 1) break;
  }
}

function run(): void {
  console.log('Task 04');
  // console.log(mean(6));
  // console.log(positiveNum(6));
  dividers(28);
  dividers(54);
}

export default run;
