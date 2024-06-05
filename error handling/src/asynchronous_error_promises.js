const fs = require('node:fs').promises
fs.readFile('/path/to/file')
  .then(data => {
    //process
  })
  .catch(err => {
    console.error('An error occurred:', err.message)
  })
