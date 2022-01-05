
function getFutureTime() {
  setTimeout(() => {
    return new Date()
  }, 1000)
}

exports.run = () => {
  console.log('callback - promise - 01')
  const future = getFutureTime()
  console.log(`future time ${future}`)
  console.log('getting future time is done\n')

}

