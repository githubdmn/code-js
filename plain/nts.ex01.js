
const isEvenA = (n) => {
  if (n % 2 === 0) return true
  return false
}

const isEvenB = (n) => {
  return n % 2 === 0 ? true : false 
}

const isEvenString = (n) => {
 if (isEvenA(n)) return 'it is even'
 return 'it is odd'
}

const isEvenStringB = (n) => {
  return isEvenB(n) ? 'it\'s even' : 'it\'s odd'
}

const numbers = (n) => {
  for (let i = 1; i < n; i++) console.log(`${i} -> ${isEvenStringB(i)}`)
}

const inArray = (n) => {
  let a = [];
  for (let i = 0; i < n; i++) 
    if (isEvenB(i)) a.push(i)
  return a
}

exports.run = () => {
  console.log('nts ex01 odd/even number')
  // numbers(50)
  const nArray = inArray(50)
  console.log(nArray)
}
