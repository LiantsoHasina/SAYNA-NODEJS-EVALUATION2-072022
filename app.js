const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/image', express.static(__dirname + 'public/image'))

// home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// backend page
app.get('/backend', (req, res) => {
    res.sendFile(__dirname + '/views/backend.html')
})

// frontend page
app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/views/frontend.html')
})

// DM page
app.get('/marketing', (req, res) => {
    res.sendFile(__dirname + '/views/marketing.html')
})

// ux/ui
app.get('/uxui', (req, res) => {
    res.sendFile(__dirname + '/views/uxui.html')
})

// contract
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
})




app.listen(port, () => console.log(`Live on port ${port}`))
