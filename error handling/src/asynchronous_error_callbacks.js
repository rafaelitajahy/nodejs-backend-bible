const fs = require('node:fs')
fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    console.error('An error occurred:', err.message)
    return
  }
})