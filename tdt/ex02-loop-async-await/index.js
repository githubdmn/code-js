const { runFor } = require('./for')
const { runForEach } = require('./forEach')
const { runMap } = require('./map')

exports.run = () => {
  console.log('loop async/await \n')
  runFor() 
  runForEach()
  runMap()
}
