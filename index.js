const connectToMongo = require('./db')
const express = require('express')


var app = express()
const port = 5000
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Available Routes
app.use('/api/createEmployee',require('./routes/createEmployee'));
app.use('/api/EmployeeList',require('./routes/EmployeeList'));
app.use('/api/findEmployee',require('./routes/findEmployee'));
app.use('/api/updateEmployee',require('./routes/updateEmployee'));
app.use('/api/deleteEmployee',require('./routes/deleteEmployee'));

app.listen(port,() => {

  connectToMongo();
  console.log(`StickyNotes Backend app listening on port `)
})
