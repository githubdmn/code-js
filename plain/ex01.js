

console.log('ex01')

function sumAll(a) {
  let sum = 0
  let [min, max] = a
  if (min > max) [max, min] = a
  for (let i = min; i <= max; i++) sum += i
  return sum
}


console.log(sumAll([5, 10]))
console.log(sumAll([10, 5]))

function sumAll2(a) {
  let sum = 0
  if(a[0] > a[1]) a.sort((x, y) => x - y)
  for (let i = a[0]; i <= a[1]; i++) sum += i
  return sum
}

console.log(sumAll2([6, 4]))
console.log(sumAll2([1, 10]))
