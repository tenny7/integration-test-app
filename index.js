const express = require('express')
const app = express()
const port = 3001

app.get('/home', () => {
    return 'Hello '
})

app.listen(port,() => {
    console.log(`app is running on port ${port}`)
} )