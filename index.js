const express = require('express')
const app = express()
const port = 3000

var route = require('./routes/route')

app.use('/', route)
 
app.listen(port, () => console.log(`App listening on port ${port}!`))