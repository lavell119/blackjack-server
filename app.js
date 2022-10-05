const express = require('express')
const mongoose = require('mongoose')

const dbURI='mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/blackjack-db?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>console.log('connected to db'))
.catch((err)=>console.log(err))


const app=express()


class User {
    constructor(nickname, password, email){
        this.nickname=nickname;
        this.password=password;
        this.email=email;
    }
}

//register user engine
app.set('view engine', 'ejs')


app.listen(3000, ()=>console.log('blackjack server listening on port 3000'))

//middleware
app.use(express.static('public'))
app.use(express.urlencoded( { extended: true }))

//routes
app.get('/', (req, res)=>{
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
    let creds=req.body
    let newUser=new User(creds.nickname, creds.passwordinput, creds.emailinput)
    console.log(newUser)
})  