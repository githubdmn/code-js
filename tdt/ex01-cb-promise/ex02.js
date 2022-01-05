
function getFutureTime(callback) {
  setTimeout(() => {
    return callback(new Date())
  }, 1000)
}

function callback(future) {
  console.log(`future time ${future}`)
  console.log('getting future time is done\n')
}
 
exports.run = () => {
  console.log('callback - promise - 02')
  getFutureTime(callback)
}

