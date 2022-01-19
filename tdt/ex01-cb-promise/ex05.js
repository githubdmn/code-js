// eslint-disable-next-line no-unused-vars
const iPromise = (...args) => new Promise((resolve, reject) => {
  const number = Math.random()
  if (number > .5) return resolve(number)
  else reject('The value is too small')
})


exports.run = () => {
  console.log(' promise - 01')
  iPromise()
  .then((number) => console.log(`The number is ${number}`))
  .catch((error) => console.error(`An error has occured \n${error}`))
  .finally(() => console.log('Finally is called'))
}

