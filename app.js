'use strict'
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.send('Halo')
    // res.sendFile('index.html')
    res.sendFile(__dirname + '/index.html');
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
