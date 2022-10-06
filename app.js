const express = require('express')
const mongoose = require('mongoose')
const User= require('./models/user.js')

const dbURI='mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/blackjack-db?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err))


const app=express()


//register user engine
app.set('view engine', 'ejs')


app.listen(3000, ()=>console.log('blackjack server listening on port 3000'))

//middleware
app.use(express.static('public'))
app.use(express.urlencoded( { extended: true }))

//routes
app.get('/', (req, res)=>{
    res.redirect('login')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/lobby', (req, res)=>{
    res.render('lobby')
})

app.get('/account', (req, res)=>{
    res.render('account')
})

app.get('/create-account', (req, res)=>{
    res.render('create-account')
})

app.post('/create-account', (req, res)=>{
    const creds=req.body
    let newUser=new User({
        nickname: creds.nickname,
        password: creds.passwordinput,
        email: creds.emailinput
    }) 
    newUser.save()
    .then((res)=>{
        console.log(res)
    })
})  

app.post('/login', (req, res)=>{
    User.find()
        .then((result)=>{
            
            console.log(result)
            res.send(result)
        })
        .catch((err)=>console.log(err))
})