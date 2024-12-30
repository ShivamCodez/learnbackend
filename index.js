require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/gmail' , (req , res) =>{
    res.send('shivambhagat467')
})
app.get('/login',(req, res)=>{
    res.send('<h1>please login at shivambhagat357</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
