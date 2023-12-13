// a - palindrom 141, 535, 121, 993
// b - armstrong 153 = 1*1*1 + 5*5*5 + 3*3*3

function palindrom(n: number): boolean {
  return n % 10 === Math.floor(n / 100);
}

function armstrong(n: number): boolean {
  const a = Math.floor(n / 100);
  const b = Math.floor((n % 100) / 10);
  const c = n % 10;
  return n === a * a * a + b * b * b + c * c * c;
}

function run(): void {
  //console.log(palindrom(993));
  console.log(armstrong(153));
}

export default run;
