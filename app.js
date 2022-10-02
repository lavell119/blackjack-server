const express=require('express')

const app=express()

//register user engine
app.set('view engine', 'ejs')


app.listen(3000, ()=>console.log('express app listening on port 3000'))

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
    console.log(req.body)
})