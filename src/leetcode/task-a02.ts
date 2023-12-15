// k * (k + 1) * ... * (2k - 1) * 2k
function calculateK(n: number): number {
  let p = 1;
  for (let i = n; i <= 2 * n; i++) {
    p = p * i;
  }
  return p;
}

// n(n+m)(n+2m)...(n+mm)
function calculateNM(n: number, m: number): number {
  let p = 1;
  for (let i = 0; i <= m; i++) {
    p *= n + i * m;
  }
  return p;
}

// (n+m)(n-2m)(n+3m)...(n+ (-1)^(m+1) m*m)
// n^e 3^4 = 3 * 3 * 3 * 3
function power(n: number, e: number): number {
  let result = 1;
  for (let i = 1; i <= e; i++) {
    result *= n;
  }
  return result;
}

function calculateNM2(n: number, m: number): number {
  let p = 1;
  let signum = -1;
  for (let i = 1; i <= m; i++) {
    p *= n + power(signum, i + 1) * i * m;
    // p *= n + (signum ** (i + 1)) * i * m;
  }
  return p;
}

// 1! + 2! + 3! + ... + n!
function fact(n: number): number {
  let p = 1;
  for (let i = 1; i <= n; i++) {
    p *= i;
  }
  return p;
}

function sumFact(n: number): number {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += fact(i);
  }
  return s;
}

// perfect number 28 = 1+2+4+7+14
function perfect(n: number): boolean {
  let s = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      s += i;
    }
  }
  return s == n;
}

function firstNPerfect() {
  for (let i = 1; i <= 100; i++) console.log('i =  ', i, ' p ', perfect(i));
}

function run(): void {
  console.log('Task a02');
  // console.log(calculateK(4))
  // console.log(calculateNM(2, 3))
  // console.log(calculateNM2(2, 3));
  // console.log(sumFact(6));
  // console.log(perfect(28));
  firstNPerfect();
}

export default run;
