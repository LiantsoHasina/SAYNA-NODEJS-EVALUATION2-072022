const express = require('express')
const path = require('path')
const ejs = require('ejs')
const eLayouts = require('express-ejs-layouts')

// fetch pool
const database = require('./public/js/db.js')
const app = express()
const port = 3000



app
    // Static file access
    .use(express.static('public'))
    .use('/css', express.static(__dirname + 'public/css'))
    .use('/image', express.static(__dirname + 'public/image'))
    .use('/js', express.static(__dirname + 'public/js'))


    .use(express.urlencoded({extended:false}))
    .use(eLayouts)

    // set up ejs files
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    

    

// home page
app.get('/', (req, res) => {
    
    database.getConnection((err, connection)=>{
        if (err) throw err

        connection.execute("SELECT firstName, testimony, note FROM forms WHERE note>=7 ORDER BY note DESC", (err,result)=>{
            res.render(`${__dirname + '/views/index.ejs'}`, {title: "Home page", home:result})
        })
    })
    
})

// backend page
app.get('/backend', (req, res) => {
    database.getConnection((err, connection)=>{
        if (err) throw err

        connection.execute("SELECT id_forms, firstName, testimony, note FROM forms WHERE modules='Backend' ORDER BY id_forms DESC", (err,result)=>{
            res.render(`${__dirname + '/views/backend.ejs'}`, {title: "Back-End", back:result})
        })
    })
})

// frontend page
app.get('/frontend', (req, res) => {
    database.getConnection((err, connection)=>{
        if (err) throw err

        connection.execute("SELECT id_forms, firstName, testimony, note FROM forms WHERE modules='Frontend' ORDER BY id_forms DESC", (err,result)=>{
            res.render(`${__dirname + '/views/frontend.ejs'}`, {title: "Front-end", front:result})
        })
    })
})

// DM page
app.get('/marketing', (req, res) => {
    database.getConnection((err, connection)=>{
        if (err) throw err

        connection.execute("SELECT id_forms, firstName, testimony, note FROM forms WHERE modules='Marketing' ORDER BY id_forms DESC", (err,result)=>{
            res.render(`${__dirname + '/views/marketing.ejs'}`, {title: "Digital Marketing", dm:result})
        })
    })
})

// ux/ui
app.get('/uxui', (req, res) => {
    
    database.getConnection((err, connection)=>{
        if (err) throw err

        connection.execute("SELECT id_forms, firstName, testimony, note FROM forms WHERE modules='UX-UI' ORDER BY id_forms DESC", (err,result)=>{
            res.render(`${__dirname + '/views/uxui.ejs'}`, {title: "UX - UI", design:result})
        })
    })
})

// contact
app.get('/contact', (req, res) => {
    res.render(`${__dirname + '/views/contact.ejs'}`, {title: "Contact"})

})

// sign up
app.get('/signup', (req, res) => {
    res.render(`${__dirname + '/views/signup.ejs'}`, {title: "Sign up"})
})

app.post("/action_page", (req, res) => {
    let firstName = req.body.firstname
    let lastName = req.body.lastname
    let avis = req.body.avis
    let note = req.body.note
    let formation = req.body.formation 

    database.getConnection((err, connection) => {
        if(err) throw err;
        let userValue = [null, firstName, lastName, avis, note, formation]
        connection.query("INSERT INTO forms VALUES (?, ?, ?, ?, ?, ?)", 
        userValue, (err,result) => {
            if (err) {
                throw err;
            } else{
                res.redirect("/")
            }

        })
    })
    

})




app.listen(port, () => console.log(`Live on port ${port}`))


module.exports = database