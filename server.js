const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello world 2')
})

app.listen(PORT, () => {
    console.log(`Ready and listening on port ${PORT}`)
})